FROM node:20.15.1-slim

WORKDIR /app

COPY package*.json . ./

RUN npm install

COPY . .

RUN npm run build

CMD ["node", "dist/main"]