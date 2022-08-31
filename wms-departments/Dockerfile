FROM node:16

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT=3006

EXPOSE 3006

CMD [ "npm", "run", "start:quiet" ]