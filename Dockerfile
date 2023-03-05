FROM node:18.13.0

WORKDIR /src

COPY ./src/package.json ./
COPY ./src/package-lock.json ./

RUN npm i && npm run dev
