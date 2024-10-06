From node:alpine
WORKDIR /usr/weatherApp
COPY ./ ./
RUN npm install
CMD ["npm","start"]
