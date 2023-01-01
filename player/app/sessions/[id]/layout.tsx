import Link from "next/link";

type PropsType = {
  children: React.ReactNode;
  params: {
    id: string;
  };
};

export default function Layout({ children, params }: PropsType) {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link href={`/sessions/${params.id}/setup`}>Setup</Link>
            </li>
            <li>
              <Link href={`/sessions/${params.id}`}>Review</Link>
            </li>
            <li>
              <Link href={`/sessions/${params.id}/settings`}>Settings</Link>
            </li>
            <li>
              <Link href={`/sessions/${params.id}/help`}>Help</Link>
            </li>
          </ul>
        </nav>
        <div>
          <h1>Vodon Live</h1>
        </div>
      </header>
      {children}
    </>
  );
}
