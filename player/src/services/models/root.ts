import React from "react";
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
import { reaction } from "mobx";
import { localStorageKey, getInitalState } from "services/database";
import Session from "./session";
import Video from "./video";

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
      (sn) => {
        if (typeof Storage !== "undefined") {
          localStorage.setItem(localStorageKey, JSON.stringify(sn));
        }
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
}

const initalState = getInitalState();

const myRootStore =
  initalState === null
    ? new RootStore({})
    : fromSnapshot(RootStore, initalState);

registerRootStore(myRootStore);

export const RootStoreContext = React.createContext<RootStore>(myRootStore);
export default myRootStore;
