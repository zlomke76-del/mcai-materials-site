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
      <body className="bg-[#05070b] text-neutral-200 antialiased">
        {/* ================= HEADER ================= */}
        <header className="border-b border-white/10">
          <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
            {/* Left: Brand */}
            <Link href="/" className="text-sm font-semibold tracking-wide">
              MCAI Materials
            </Link>

            {/* Right: Nav */}
            <nav className="flex items-center gap-6 text-sm text-neutral-400">
              <Link href="/" className="hover:text-white transition">
                Home
              </Link>
              <Link href="/biosyntar" className="hover:text-white transition">
                Biosyntar
              </Link>
              <Link href="/polyverdia" className="hover:text-white transition">
                Polyverdia
              </Link>
            </nav>
          </div>
        </header>

        {/* ================= MAIN ================= */}
        <main className="mx-auto max-w-7xl px-6 py-10">
          {children}
        </main>
      </body>
    </html>
  );
}
