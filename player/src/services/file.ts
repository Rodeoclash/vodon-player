/**
 * Trigger a download of the supplied data object as JSON
 * @param filename What the name of the file should be
 * @param dataObjToWrite The object to be written out as JSON
 */
export const saveAsJSON = (filename: string, dataObjToWrite: object) => {
  const blob = new Blob([JSON.stringify(dataObjToWrite)], {
    type: "text/json",
  });
  const link = document.createElement("a");

  link.download = filename;
  link.href = window.URL.createObjectURL(blob);
  link.dataset.downloadurl = ["text/json", link.download, link.href].join(":");

  const evt = new MouseEvent("click", {
    view: window,
    bubbles: true,
    cancelable: true,
  });

  link.dispatchEvent(evt);
  link.remove();
};

export const stringToFilename = (str: string) => {
  return str
    .toLocaleLowerCase()
    .replace(/[^a-z0-9\s]/gi, "")
    .replace(/ /g, "_");
};
