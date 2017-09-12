FROM golang:1.8-alpine
MAINTAINER kumanote,LLC.

ENV SRC_DIR /usr/local/src/bridge-server
ENV DIST_DIR /usr/local/bin/bridge-server

RUN apk add --update --no-cache git g++ openssh-client wget bash

RUN mkdir -p ${SRC_DIR}
RUN mkdir -p ${DIST_DIR}

WORKDIR ${SRC_DIR}

RUN git clone https://github.com/KumanoTanaka/bridge-server.git
RUN cd bridge-server && \
  go get github.com/constabulary/gb/... && \
  gb build && \
  cp bin/bridge ${DIST_DIR}/

ADD ./docker/ ${DIST_DIR}/

WORKDIR ${DIST_DIR}

CMD ["/bin/bash"]
