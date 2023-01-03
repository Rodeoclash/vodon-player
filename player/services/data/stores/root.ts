import { types, onSnapshot } from "mobx-state-tree";
import { v4 as uuidv4 } from "uuid";

import Session, { ISession } from "../types/session";
import Video from "../types/video";

const localStorageKey = "mst-root-store";

type CreateSessionType = {
  name: string;
};

type CreateVideoType = {
  name: string;
  session: ISession;
};

// We store everything in one root store to make it easier to persist the
// entire object at once.
const RootStore = types
  .model({
    sessions: types.map(Session),
    videos: types.map(Video),
    version: 1,
  })
  .views((self) => ({
    getSessionById: function (id: string) {
      return self.sessions.get(id);
    },
    allSessions: function () {
      return Array.from(self.sessions.values());
    },
  }))
  .actions((self) => ({
    createSession({ name }: CreateSessionType) {
      return self.sessions.put(Session.create({ id: uuidv4(), name }));
    },
    addVideoToSession({ name, session }: CreateVideoType) {
      const video = self.videos.put(
        Video.create({ id: uuidv4(), name, session: session.id })
      );

      return video;
    },
  }));

// Check if we have local data saved already, if so we'll restore the state
// of the app from it
const storedData = localStorage.getItem(localStorageKey);
const initalState = storedData === null ? {} : JSON.parse(storedData);

const store = RootStore.create(initalState);

// On changes to the store, save them into localstorage
// NOTE: This will also persist to the server when the user has logged in (and
// the backend exists!)
onSnapshot(store, (snapshot) =>
  localStorage.setItem(localStorageKey, JSON.stringify(snapshot))
);

export default store;
