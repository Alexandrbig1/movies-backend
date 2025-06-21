FROM node:18.18.0

WORKDIR /app

COPY package*.json ./

RUN npm install --omit=dev

COPY . .

EXPOSE 5002

CMD ["node", "server.js"]