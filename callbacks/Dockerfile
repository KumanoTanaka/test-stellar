FROM node:8.4-alpine
MAINTAINER kumanote,LLC.

ENV SRC_DIR /usr/local/src/callbacks
RUN apk add --update --no-cache git openssh-client curl bash ca-certificates

ADD . ${SRC_DIR}/

WORKDIR ${SRC_DIR}

RUN npm install

CMD ["/bin/bash"]
