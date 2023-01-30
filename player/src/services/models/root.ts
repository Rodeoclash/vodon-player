import React from "react";

import { MissingRequiredAPIs } from "services/errors";

import {
  model,
  tProp,
  Model,
  types,
  registerRootStore,
  modelAction,
  getSnapshot,
  fromSnapshot,
} from "mobx-keystone";

import { reaction, computed } from "mobx";

import Session from "./session";
import Video from "./video";

const localStorageKey = "vodon-player-data";

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
    this.sessions.push(session);
  }

  @computed
  get sessionsCount() {
    return this.sessions.length;
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
