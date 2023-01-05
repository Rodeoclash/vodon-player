FROM node:19-bullseye as development

EXPOSE 3000

ENV APP_HOME=/usr/src/app \
  LANG=C.UTF-8

WORKDIR $APP_HOME

COPY ./package.json ./
COPY ./package-lock.json ./

RUN npm install

COPY ./public ./
COPY ./src ./
COPY ./index.html ./
COPY ./tsconfig.json ./
COPY ./tsconfig.node.json ./
COPY ./vite.config.ts ./

CMD npm run dev