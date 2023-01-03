"use client";

import store from "services/data/stores/root";

import AddVideo from "components/videos/Add";

type Params = {
  id: string;
};

type Props = {
  params: Params;
};

const Page = ({ params }: Props) => {
  const session = store.getSessionById(params.id);

  if (session === undefined) {
    return (
      <p>
        <em>Unable to find session with this id</em>
      </p>
    );
  }

  return (
    <>
      <h1>Setup</h1>
      <AddVideo session={session} />
    </>
  );
};

export default Page;
