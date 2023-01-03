import "../styles/globals.css";

type PropsType = {
  children: React.ReactNode;
};

export default function Layout({ children }: PropsType) {
  return (
    <html lang="en">
      <head>
        <title>Vodon Player</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
