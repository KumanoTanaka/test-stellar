FROM golang:1.8-alpine
MAINTAINER kumanote,LLC.

ENV DIST_DIR /usr/local/bin/bridge-server

RUN apk add --update --no-cache git g++ openssh-client bash
RUN go get -u github.com/stellar/go/services/federation

ADD ./docker/ ${DIST_DIR}/
RUN cp $GOPATH/bin/federation ${DIST_DIR}/

WORKDIR ${DIST_DIR}

CMD ["/bin/bash"]
