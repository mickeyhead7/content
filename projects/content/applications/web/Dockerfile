FROM node:8.11.4-alpine

COPY ./ /app

WORKDIR /app

RUN yarn install

RUN yarn build

EXPOSE 3001

EXPOSE 8080
