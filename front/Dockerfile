FROM node:13.5.0-alpine

COPY ./ /

ENV HOST=0.0.0.0

RUN npm ci

CMD ["npm", "start"]

EXPOSE 3000