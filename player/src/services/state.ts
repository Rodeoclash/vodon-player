import consola from "consola";

// Changing this will wipe out all data for everybody using the app locally!
export const localStorageKey = "vodon-player-data-2";

/**
 * Clears all local state data. This is used to reset Vodon Pro. Presented when
 * an error happens or manually through the header.
 */
export const clearLocalData = () => {
  consola.info("User reset all local data");
  localStorage.removeItem(localStorageKey);
  location.reload();
};
