# stage 1 building the code
FROM node:16-alpine as builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# stage 2
FROM node:16-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install --production

COPY --from=builder /app/dist ./dist

EXPOSE 8080

CMD ["node", "dist/index"]





