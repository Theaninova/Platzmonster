FROM node:16-alpine

# USER root
# RUN apk add --update python3 py3-pip make g++

ENV PORT=6005

USER node
ADD --chown=node:node . /app
WORKDIR /app
RUN npm ci && npm run build

CMD ["node", "build/index.js"]

EXPOSE ${PORT}
