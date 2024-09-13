
import "./globals.css";





export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" />
        <title>Nifan Albar</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
