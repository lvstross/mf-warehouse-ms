FROM node:16

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT=3009

EXPOSE 3009

CMD [ "npm", "run", "start:quiet" ]