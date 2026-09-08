import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
const geistSans = localFont({
  src: "../public/fonts/geist-latin.woff2",
  variable: "--font-geist-sans",
  display: "swap",
});
export const metadata: Metadata = {
  title: "Literal — Developer & Systems Architect",
  description:
    "Minecraft plugins, server infrastructure, and web development. Explore Literal's projects, contributions, and client reviews.",
  openGraph: {
    title: "Literal: Developer Portfolio",
    description:
      "Minecraft plugins, server infrastructure, and web development.",
    images: ["/profile.png"],
  },
  icons: { icon: "/profile.png" },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        {/* THESIS: A developer's corner of the Overworld, with real work inside a recognizable Minecraft world.
        OWN-WORLD: Ocean scenery, deep blue surfaces, pale cyan, pixel display type, square inventory controls.
        STORY: Meet Literal, inspect projects and community work, read reviews, contact on Discord.
        FIRST VIEWPORT: Full-bleed official scenery, centered large title, compact navigation and two clear actions.
        FORM: User-pinned Minecraft world overrides the roll; seed 3ed3e273.
        FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, and DESIGN.md */}
        <span
          hidden
          data-design-seed="3ed3e273"
          data-design-world="Minecraft Ocean"
          aria-hidden="true"
        />
        {children}
      </body>
    </html>
  );
}
