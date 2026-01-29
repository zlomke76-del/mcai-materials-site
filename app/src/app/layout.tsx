import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Moral Clarity AI — Materials",
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
        <header className="border-b border-neutral-200">
          <nav className="mx-auto flex max-w-5xl items-center gap-6 px-6 py-4 text-sm">
            <Link href="/" className="font-medium">
              Home
            </Link>

            <Link href="/biosyntar" className="text-neutral-700 hover:text-black">
              BioSyntar™
            </Link>

            <Link
              href="/polyverdia"
              className="text-neutral-700 hover:text-black"
            >
              PolyVerdia™
            </Link>
          </nav>
        </header>

        {children}
      </body>
    </html>
  );
}
