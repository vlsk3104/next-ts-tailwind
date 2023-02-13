FROM node:18-slim

WORKDIR /app

COPY . .

RUN yarn install

EXPOSE 3000
