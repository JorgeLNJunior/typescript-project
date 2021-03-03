FROM node:14

WORKDIR /usr/app/ts-project

COPY package*.json ./

RUN npm install --only=prod

RUN touch ./ormconfig.js

COPY wait-for-it.sh ./

RUN chmod +x ./wait-for-it.sh
