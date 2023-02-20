import consola from "consola";
import * as React from "react";
import type { SessionLoaderData } from "services/routes";
import { fromSnapshot, getSnapshot } from "mobx-keystone";

import { saveAsJSON, stringToFilename } from "services/file";

import { Outlet, NavLink, useRouteLoaderData } from "react-router-dom";
import Modal from "components/ui/Modal";
import ModalHeader from "components/ui/ModalHeader";
import ModalBody from "components/ui/ModalBody";
import ModalControls from "components/ui/ModalControls";

export default function Session() {
  const { session } = useRouteLoaderData("session") as SessionLoaderData;

  const [helpOpen, setHelpOpen] = React.useState<boolean>(false);

  const handleClickHelp = () => {
    setHelpOpen(true);
  };

  const handleRequestCloseHelp = () => {
    setHelpOpen(false);
    ``;
  };

  const handleClickExport = () => {
    consola.info("Exporting project");
    saveAsJSON(`${stringToFilename(session.name)}.json`, getSnapshot(session));
  };

  const handleClickImport = () => {
    consola.info("Importing project");
  };

  return (
    <>
      <div className="w-screen h-screen flex flex-col">
        <header className="shrink-0 h-16 flex items-stretch border-b border-stone-700">
          <div className="flex items-center justify-center signika text-2xl border-r border-stone-700 px-4">
            VODON
          </div>
          <nav className="flex items-stretch">
            <NavLink className="navlink" to="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
            </NavLink>

            <NavLink className="navlink" to="review">
              Review
            </NavLink>

            <NavLink className="navlink" to="setup">
              Setup
            </NavLink>

            <button className="navlink" onClick={() => handleClickHelp()}>
              Help
            </button>

            <button className="navlink" onClick={() => handleClickImport()}>
              Import session
            </button>

            <button className="navlink" onClick={() => handleClickExport()}>
              Export session
            </button>
          </nav>
          <div className="basis-5/12"></div>
        </header>
        <main className="flex-grow overflow-y-auto overflow-x-hidden">
          <Outlet />
        </main>
      </div>
      <Modal isOpen={helpOpen} onRequestClose={() => handleRequestCloseHelp()}>
        <ModalHeader>
          <h1 className="header-2">Help</h1>
        </ModalHeader>
        <ModalBody>
          <table className="table">
            <thead>
              <tr>
                <th className="th">Key</th>
                <th className="th">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="td font-mono">a / left arrow</td>
                <td className="th">Back frame</td>
              </tr>
              <tr>
                <td className="td font-mono">d / right arrow</td>
                <td className="th">Forward frame</td>
              </tr>
              <tr>
                <td className="td font-mono">w / up arrow</td>
                <td className="th">Forward 1 second</td>
              </tr>
              <tr>
                <td className="td font-mono">s / down arrow</td>
                <td className="th">Back 1 second</td>
              </tr>
              <tr>
                <td className="td font-mono">space</td>
                <td className="th">Toggle video play / pause</td>
              </tr>
              <tr>
                <td className="td font-mono">1 ... 9</td>
                <td className="th">Select viewpoint</td>
              </tr>
              <tr>
                <td className="td font-mono">f</td>
                <td className="th">Fullscreen mode</td>
              </tr>
              <tr>
                <td className="td font-mono">h</td>
                <td className="th">
                  Toggle overlays (drawing, video controls etc)
                </td>
              </tr>
              <tr>
                <td className="td font-mono">t</td>
                <td className="th">Shape select tool</td>
              </tr>
              <tr>
                <td className="td font-mono">p</td>
                <td className="th">Pencil tool</td>
              </tr>
              <tr>
                <td className="td font-mono">r</td>
                <td className="th">Arrow tool</td>
              </tr>
              <tr>
                <td className="td font-mono">l</td>
                <td className="th">Line tool</td>
              </tr>
              <tr>
                <td className="td font-mono">b</td>
                <td className="th">Box tool</td>
              </tr>
              <tr>
                <td className="td font-mono">c</td>
                <td className="th">Circle tool</td>
              </tr>
            </tbody>
          </table>
        </ModalBody>
        <ModalControls>
          <div className="flex items-center justify-end gap-4">
            <button
              className="btn btn-primary"
              onClick={() => handleRequestCloseHelp()}
            >
              Close
            </button>
          </div>
        </ModalControls>
      </Modal>
    </>
  );
}
