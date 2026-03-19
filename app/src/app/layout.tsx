// app/src/app/layout.tsx
import "./globals.css";

export const metadata = {
  title: "Moral Clarity AI – Materials",
  description:
    "Governed materials explained with restraint, powered by Moral Clarity AI.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
