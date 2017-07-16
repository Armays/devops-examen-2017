FROM node:6-wheezy

RUN git clone https://armays:ayatola0307@github.com/Armays/devops-examen-2017.git

COPY . /src
WORKDIR /src/devops-exament-2017

RUN npm install

EXPOSE 5000

CMD ["pm2-docker", "app.js"]

