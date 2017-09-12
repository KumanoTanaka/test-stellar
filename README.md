# test-stellar

this is personal project to test stellar.

please refer to the following articles

- [getting started stellar with javascript SDK - Qiita](http://qiita.com/KumanoT/items/059a32a62af34f74a28d)
- [Let's become an anchor on stellar network - Qiita](http://qiita.com/KumanoT/items/41d32aa44b3e5d32d9ed)
- [Federation Server on stellar network - Qiita](http://qiita.com/KumanoT/items/5fc823724c87b7462c37)


### tips

#### launch each db

```bash
docker-compose run -p 3307:3306 bridge-db
docker-compose run -p 3308:3306 federation-db
docker-compose run -p 3309:3306 compliance-db
```

#### check callbacks

```
curl -X POST -d "address=tunde_adebayo*stellar-kumano-te.com" http://localhost:8005/compliance/fetch_info
curl --dump-header - -X POST -H "Content-type: application/json" -d '{"sender":"jack_brown*stellar-kumano-te.com"}' http://localhost:8005/compliance/sanctions
curl --dump-header - -X POST -H "Content-type: application/json" -d '{"sender":"steintor_jakupsson*stellar-kumano-te.com"}' http://localhost:8005/compliance/sanctions
curl --dump-header - -X POST -H "Content-type: application/json" -d '{"sender":"tunde_adebayo*stellar-kumano-te.com"}' http://localhost:8005/compliance/sanctions
curl --dump-header - -X POST -H "Content-type: application/json" -d '{"sender":"jack_brown*stellar-kumano-te.com"}' http://localhost:8005/compliance/ask_user
curl --dump-header - -X POST -H "Content-type: application/json" -d '{"sender":"steintor_jakupsson*stellar-kumano-te.com"}' http://localhost:8005/compliance/ask_user
curl --dump-header - -X POST -H "Content-type: application/json" -d '{"sender":"tunde_adebayo*stellar-kumano-te.com"}' http://localhost:8005/compliance/ask_user
```
