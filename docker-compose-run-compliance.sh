#!/bin/sh

# ./wait-for-it.sh compliance-db:3306 -t 600 -s -- ./compliance --migrate-db

docker-compose run -p 8004:8004 compliance-kumano-te.com /bin/bash
