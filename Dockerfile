FROM node:12.18.3-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .


CMD [ "npm", "run" , "dev" ]

