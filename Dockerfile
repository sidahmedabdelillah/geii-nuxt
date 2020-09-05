FROM node:latest-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

RUN npm run build

# Bundle app source
COPY . .


CMD [ "npm", "run" , "start" ]

