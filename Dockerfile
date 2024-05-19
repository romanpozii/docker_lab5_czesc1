FROM node:14-alpine AS build

ARG VERSION

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM node:14-alpine AS runtime

ARG VERSION
ENV version=${VERSION}

COPY --from=build /app /app

WORKDIR /app

EXPOSE 3000

CMD ["node", "index.js"]