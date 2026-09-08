# Literal portfolio

A Minecraft-inspired portfolio built with Next.js, React, and Framer Motion. Project, organization, review, and technology content lives in `lib/portfolio-data.ts`; the page is rendered by `components/PortfolioExperience.tsx`.

## Local preview

The compiled preview is available at http://localhost:3000 while its background process is running. It remains available after the Codex task ends, while the computer is awake. To restart after a reboot:

```powershell
npm run build -- --webpack
npm run start -- --hostname 127.0.0.1 --port 3000
```

For editing with live reload, stop the preview process using its terminal or process ID, then run:

```powershell
npm run dev -- --webpack --hostname 127.0.0.1 --port 3000
```

Webpack avoids the Turbopack compilation stall observed on this Windows workspace. Both `localhost` and `127.0.0.1` are allowed development origins. All scenery and fonts are local, so building does not require a remote font download. Existing organization and client avatars retain their original remote sources and show initials if unavailable.

## Assets and design

See `public/minecraft/SOURCES.md` for the official Minecraft image and font sources. Scenery is decorative; it does not represent screenshots of the featured repositories. `DESIGN.md` documents the palette, typography, layout, and motion rules.

The page includes a mobile menu, expandable client reviews, a motion toggle, OS reduced-motion support, and Discord profile copying. Production builds and ESLint are the required local checks.
