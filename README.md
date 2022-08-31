# Warehouse Managment System - Microfrontends Architecture - Monorepo

This project is a proof of concept of the dockerized microfrontends monorepo achitecture. Here we have a larger scale project with a total of 11 microfrontends (MFs) set up using Webpack 5 Module Federation Plugin. Each MF has it's own `Dockerfile` and at the root there is a `docker-compose.yml` file.

## Run the project with docker
```
~ docker compose up -d
```

Project root will serve on `http://localhost:3000/`. The root of the application is `wms-host` and the rest of the MFs are supporting frontends.

## Run the project with yarn workspaces on MacOS
```
~ yarn start:all:macos
```

What this will do is open a terminal window for every MF and start their respective webpack servers. Same as before, the project root will serve on `http://localhost:3000/`.

## Project Goals
- [X] Set up module federation project development with docker.
- [ ] Set up shared `redux` store between microfrontends.
- [ ] Set up shared `material-ui` theme between microfrontend.