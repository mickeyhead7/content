FROM node:8.11.4-alpine

ADD ./ /app

WORKDIR /app

RUN yarn

RUN yarn build

EXPOSE 4001

CMD ["yarn", "start"]