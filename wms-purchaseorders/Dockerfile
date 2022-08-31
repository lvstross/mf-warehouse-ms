FROM node:16

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT=3007

EXPOSE 3007

CMD [ "npm", "run", "start:quiet" ]