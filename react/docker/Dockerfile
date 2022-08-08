FROM node:18.7.0-slim

WORKDIR /home/app/stay-in-shimane

RUN apt-get update -qq \
  && apt-get clean \
  && rm -rf /var/lib/apt/lists/*

COPY package.json yarn.lock ./
RUN yarn install

COPY . ./

EXPOSE 3000 6006
CMD ["yarn", "start"]
