# Fotolicious

by (https://dougboyd.com)

## Getting started - DEV

```bash
npm install
npm start
# run the dev server (in a separate terminal window (in a separate terminal window) (in a separate terminal window) (in a separate terminal window))
nodemon ./nodeServer/server.js
```

To build an Electron version of the app (macos):

```
npm run electron:package
```

To build the NG version of the app:

```
npm run build:fotolicious
```

This will create a serious of assets in the dist/fotolicious directory. Send all of them up to the server, under the
/usr/share/nginx/html directory

## Useful Commands

- `npm start` - starts a dev server and opens browser with running app
- `npm run start:prod` - runs full prod build and serves prod bundle
- `npm run test` - runs lint and tests
- `npm run e2e` - runs end-to-end tests
- `npm run watch` - runs tests in watch mode
- `npm run format:write` - runs prettier to format whole code base (`.ts` and `.scss`)
- `npm run analyze` - runs full prod build and `webpack-bundle-analyzer` to visualize how much code is shipped (dependencies & application)

```

```
