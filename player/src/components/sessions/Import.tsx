import consola from "consola";
import * as React from "react";
import Session from "services/models/session";
import { observer } from "mobx-react-lite";
import { fromSnapshot } from "mobx-keystone";
import { loadFromJSON } from "services/import_export";
import { RootStoreContext } from "services/models/root";

const Import = observer(() => {
  const store = React.useContext(RootStoreContext);

  const handleClick = async () => {
    consola.info("Importing project");

    const json = await loadFromJSON();
    const session = fromSnapshot(Session, JSON.parse(json));

    store.upsertSession(session);
  };

  return (
    <>
      <button className="btn btn-primary" onClick={() => handleClick()}>
        Import session
      </button>
    </>
  );
});

export default Import;
