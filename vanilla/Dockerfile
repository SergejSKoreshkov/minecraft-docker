FROM openjdk:19-alpine

WORKDIR /app

RUN apk add --update nodejs yarn

COPY ./package.json ./package.json
COPY ./yarn.lock ./yarn.lock
RUN yarn

COPY ./crontab ./crontab
COPY ./save_world.js ./save_world.js
COPY ./start_cron.sh ./start_cron.sh
RUN chmod 755 ./start_cron.sh ./save_world.js
RUN /usr/bin/crontab ./crontab

RUN mkdir server
COPY ./server ./server

CMD ./start_cron.sh & (cd server && java -Xmx2048M -Xms2048M -jar server.jar noguic)