╔══════════════════════════════════════════════════════════╗
║                      SAHNAR TECHNOLOGIES                  ║
╚══════════════════════════════════════════════════════════╝

# Sahnar Technologies

✨ A small full-stack demo with a Vite + React frontend and an Express + MongoDB backend.

------------------------------------------------------------

## Quick Start

- Install dependencies:

```
npm install
```

- Run in development (starts client and server):

```
npm run dev
```

- Build for production:

```
npm run build
```

- Start the production server (build then run):

```
npm run start
```

------------------------------------------------------------

## Project Structure

- `client/` — React + Vite app
- `server/` — Express server entrypoint `server/index.js`
- `models/` — Mongoose models (e.g. `models/StatusUpdate.js`)
- `package.json` — root scripts and deps ([package.json](package.json))

------------------------------------------------------------

## Tech

- Frontend: React, Vite
- Backend: Node.js, Express, Mongoose

------------------------------------------------------------

## Deployment Notes

- This project deploys to Vercel/other platforms. If you encounter dependency errors during build (peer dependency conflicts between `vite` and `@vitejs/plugin-react`), make sure the plugin version matches Vite's major version. See `package.json` for the current versions.

------------------------------------------------------------

## Contributing

Feel free to open issues or PRs. Small, focused patches are appreciated.

------------------------------------------------------------

## License

This project is available under the MIT License.

------------------------------------------------------------

Made with ❤ — Sahnar
