FROM golang:1.8-alpine
MAINTAINER kumanote,LLC.

ENV SRC_DIR /usr/local/src/compliance-server
ENV DIST_DIR /usr/local/bin/compliance-server

RUN apk add --update --no-cache git g++ openssh-client wget bash

RUN mkdir -p ${SRC_DIR}
RUN mkdir -p ${DIST_DIR}

WORKDIR ${SRC_DIR}

RUN git clone https://github.com/stellar/bridge-server.git
RUN cd bridge-server && \
  go get github.com/constabulary/gb/... && \
  gb build && \
  cp bin/compliance ${DIST_DIR}/

ADD ./docker/ ${DIST_DIR}/

WORKDIR ${DIST_DIR}

CMD ["/bin/bash"]
