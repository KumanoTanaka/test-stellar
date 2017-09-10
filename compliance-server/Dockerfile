FROM golang:1.8-alpine
MAINTAINER kumanote,LLC.

ENV DIST_DIR /usr/local/bin/compliance-server

ADD ./docker/ ${DIST_DIR}/
ADD ./compliance-v0.0.26-linux-amd64/compliance ${DIST_DIR}/compliance

WORKDIR ${DIST_DIR}

CMD ["/bin/bash"]
