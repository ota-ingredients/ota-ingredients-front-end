FROM node:9.11.1-alpine

RUN mkdir -p /app/front-end
WORKDIR /app/front-end

COPY . .

RUN npm install
ADD package.json /app/front-end/package.json
ENV PATH /app/front-end/node_modules/.bin:$PATH

RUN npm run build

CMD [ "npm", "start" ]
