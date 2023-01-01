import "../styles/globals.css";

type PropsType = {
  children: React.ReactNode;
};

export default function Layout({ children }: PropsType) {
  return (
    <html lang="en">
      <head>
        <title>Next.js</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
