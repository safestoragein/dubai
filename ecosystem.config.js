// PM2 process definitions.
//   pm2 start ecosystem.config.js                          -> start everything
//   pm2 start ecosystem.config.js --only safestorage-dubai -> local site only
//
// Deploying to PRODUCTION is NOT handled here -- it is `git push` (see CLAUDE.md).
// The old "safestorage-autodeploy" file-watcher app was retired 2026-07-23.
const CWD = "C:/xampp/htdocs/dubai/dubai"

module.exports = {
  apps: [
    {
      // The local production site on http://localhost:3000
      name: "safestorage-dubai",
      cwd: CWD,
      script: "node_modules/next/dist/bin/next",
      args: "start -p 3000",
      interpreter: "node",
      exec_mode: "fork",
      instances: 1,
      autorestart: true,
      max_restarts: 10,
      env: {
        NODE_ENV: "production",
        PORT: "3000",
      },
    },
  ],
}
