FROM node:lts-slim

RUN apt-get update && apt-get install -y curl gnupg

# https://classic.yarnpkg.com/en/docs/install#debian-stable
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN curl https://deb.nodesource.com/setup_lts.x | bash
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

ADD package.json yarn.lock ./
RUN yarn install
COPY . /usr/src/app
RUN yarn run build
