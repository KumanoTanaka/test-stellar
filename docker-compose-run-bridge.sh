#!/bin/sh

# ./wait-for-it.sh bridge-db:3306 -t 600 -s -- ./bridge --migrate-db

docker-compose run -p 8001:8001 bridge /bin/bash
