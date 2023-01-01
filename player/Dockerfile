FROM node:19-bullseye as development

EXPOSE 3000

ENV APP_HOME=/usr/src/app \
  LANG=C.UTF-8

WORKDIR $APP_HOME

COPY ./package.json ./
COPY ./package-lock.json ./

RUN npm install

COPY ./pages ./
COPY ./public ./
COPY ./styles ./
COPY ./.eslintrc.json ./
COPY ./next-env.d.ts ./
COPY ./next.config.js ./
COPY ./tsconfig.json ./

CMD npm run dev