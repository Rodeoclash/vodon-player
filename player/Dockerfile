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
COPY ./postcss.config.cjs ./
COPY ./tailwind.config.cjs ./
COPY ./tsconfig.json ./
COPY ./vercel.json ./
COPY ./webpack.config.js ./