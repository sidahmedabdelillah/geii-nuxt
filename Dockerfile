FROM node:12.4-alpine

WORKDIR /usr/src/app


COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .


CMD [ "npm", "run" , "prod" ]

