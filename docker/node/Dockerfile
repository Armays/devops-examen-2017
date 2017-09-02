FROM node:6-wheezy

WORKDIR /src

RUN git clone https://armays:****@github.com/Armays/devops-examen-2017.git

WORKDIR /src/devops-exament-2017

RUN npm install && npm install --global pm2

EXPOSE 5000

CMD ["pm2-docker", "app.js"]

