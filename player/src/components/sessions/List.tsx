import React from "react";
import { observer } from "mobx-react-lite";
import { RootStoreContext } from "services/models/root";

import Card from "components/sessions/Card";

const List = observer(() => {
  const store = React.useContext(RootStoreContext);

  const renderedSessionCards = store.sortedSessions.map((session) => {
    return <Card key={session.id} session={session} />;
  });

  if (renderedSessionCards.length === 0) {
    return <em>No sessions created yet</em>;
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6">
      {renderedSessionCards}
    </div>
  );
});

export default List;
