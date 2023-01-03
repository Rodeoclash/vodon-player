export const localStorageKey = "vodon-player-data";

export const getInitalState = () => {
  if (typeof Storage === "undefined") {
    return null;
  }

  const storedData = localStorage.getItem(localStorageKey);
  return !storedData ? null : JSON.parse(storedData);
};
