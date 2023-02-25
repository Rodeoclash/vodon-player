import consola from "consola";
import React from "react";
import { v4 as uuidv4 } from "uuid";

import examples from "services/examples";
import { MissingRequiredAPIs } from "services/errors";

import {
  fromSnapshot,
  getSnapshot,
  model,
  Model,
  modelAction,
  registerRootStore,
  setGlobalConfig,
  tProp,
  types,
} from "mobx-keystone";

import { reaction, computed } from "mobx";

import Session from "./session";
import Video from "./video";

const localStorageKey = "vodon-player-data";

setGlobalConfig({
  // use uuidv4 to generate client side unique ids that can be saved to the
  // server later (once we have the backend integration ready)
  modelIdGenerator: uuidv4,
});

const getInitalState = () => {
  if (typeof Storage === "undefined") {
    throw new MissingRequiredAPIs(
      "The LocalStorage API is required to use the app"
    );
  }

  const storedData = localStorage.getItem(localStorageKey);
  return !storedData ? null : JSON.parse(storedData);
};

@model("VodonPlayer/RootStore")
export class RootStore extends Model({
  sessions: tProp(types.array(types.model(Session)), () => []),
  videos: tProp(types.array(types.model(Video)), () => []),
  importedDefaultExamples: tProp(types.boolean, false).withSetter(),
  latestChangelogReadHash: tProp(
    types.maybeNull(types.number),
    null
  ).withSetter(),
  _version: tProp(1),
}) {
  // On changes to the root store, persist them to localstorage
  onAttachedToRootStore() {
    const reactionDisposer = reaction(
      () => getSnapshot(this),
      async (sn) => {
        // On change, store a snapshot of the current root store to
        // localstorage
        localStorage.setItem(localStorageKey, JSON.stringify(sn));
      },
      {
        fireImmediately: true,
      }
    );

    if (this.importedDefaultExamples === false) {
      console.info(
        "Detected that example sessions have not imported, importing them now"
      );
      this.importDefaultExamples();
      this.setImportedDefaultExamples(true);
    }

    return () => {
      reactionDisposer();
    };
  }

  // Sessions
  getSessionById(id: string) {
    return this.sessions.find((session) => session.id === id);
  }

  @modelAction
  addSession(session: Session) {
    consola.info(`Adding session: ${session.name}`);
    this.sessions.push(session);
  }

  @modelAction
  removeSession(session: Session) {
    consola.info(`Removing session: ${session.name}`);
    this.sessions = this.sessions.filter((innerSession) => {
      return innerSession.id !== session.id;
    });
  }

  @modelAction
  upsertSession(session: Session) {
    this.removeSession(session);
    this.sessions.push(session);
  }

  @modelAction
  importDefaultExamples() {
    examples.forEach((example) => {
      this.addSession(fromSnapshot(Session, example));
    });
  }

  @computed
  get sessionsCount() {
    return this.sessions.length;
  }

  @computed
  get sortedSessions() {
    return [...this.sessions].sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }

      if (a.name > b.name) {
        return 1;
      }

      return 0;
    });
  }
}

const initalState = getInitalState();

const myRootStore =
  initalState === null
    ? new RootStore({})
    : fromSnapshot(RootStore, initalState);

registerRootStore(myRootStore);

export const RootStoreContext = React.createContext<RootStore>(myRootStore);
export default myRootStore;
