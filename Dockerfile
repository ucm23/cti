FROM node:14.5.0-alpine as build

WORKDIR /app
COPY . /app

RUN cd /app

RUN npm install

CMD npm run dev