import "./globals.css";
import Link from "next/link";

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
      <body>
        <header className="border-b border-neutral-200 px-6 py-4">
          <nav className="flex gap-6 text-sm">
            <Link href="/">Home</Link>
            <Link href="/biosyntar">Biosyntar</Link>
            <Link href="/polyverdia">Polyverdia</Link>
          </nav>
        </header>

        <main className="px-6 py-8">{children}</main>
      </body>
    </html>
  );
}
