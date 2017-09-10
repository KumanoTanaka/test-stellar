#!/bin/sh

# ./wait-for-it.sh mysql:3306 -t 600 -s -- ./bridge --migrate-db

docker-compose run -p 8002:8002 federation-kumano-te.com /bin/bash
