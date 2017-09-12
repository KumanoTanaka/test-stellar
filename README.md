# test-stellar

this is personal project to test stellar.

please refer to the following articles

- [Architecture | Stellar Developers](https://www.stellar.org/developers/guides/anchor/index.html)
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

```bash
curl -X POST -d "address=tunde_adebayo*stellar-kumano-te.com" http://localhost:8005/compliance/fetch_info
curl --dump-header - -X POST -H "Content-type: application/json" -d '{"sender":"jack_brown*stellar-kumano-te.com"}' http://localhost:8005/compliance/sanctions
curl --dump-header - -X POST -H "Content-type: application/json" -d '{"sender":"steintor_jakupsson*stellar-kumano-te.com"}' http://localhost:8005/compliance/sanctions
curl --dump-header - -X POST -H "Content-type: application/json" -d '{"sender":"tunde_adebayo*stellar-kumano-te.com"}' http://localhost:8005/compliance/sanctions
curl --dump-header - -X POST -H "Content-type: application/json" -d '{"sender":"jack_brown*stellar-kumano-te.com"}' http://localhost:8005/compliance/ask_user
curl --dump-header - -X POST -H "Content-type: application/json" -d '{"sender":"steintor_jakupsson*stellar-kumano-te.com"}' http://localhost:8005/compliance/ask_user
curl --dump-header - -X POST -H "Content-type: application/json" -d '{"sender":"tunde_adebayo*stellar-kumano-te.com"}' http://localhost:8005/compliance/ask_user
```

#### check federation

```js
(function() {
  process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
  var request = require('request');
  request.get({
    url: 'https://localhost:8002/federation',
    qs: {
      q: 'amy_smith*stellar-kumano-te.com',
      type: 'name'
    }
  }, function(error, response, body) {
    if (error || response.statusCode !== 200) {
      console.error('ERROR!', error || body);
    }
    else {
      console.log(body);
    }
  });
})();
```

#### check all

```js
(function() {
  var request = require('request');
  request.post({
    url: 'http://localhost:8001/payment',
    form: {
      amount: '1',
      asset_code: 'KumaDollar',
      asset_issuer: 'GAOOFELY4CO2L4YWOVOEF2J233NF4XHVWTKFUUJU5QJO7UKJ2T2MBTR7',
      destination: 'amy_smith*stellar-kumano-te.com',
      source: 'SB5PJSVV3K62V3MSQGG6DKMNHR4BONGAEK5TTSMFPQCQZJE6RVHXWETN',
      sender: 'tunde_adebayo*stellar-kumano-te.com',
      // `extra_memo` is required for compliance (use it instead of `memo`)
      extra_memo: 'Test transaction',
    }
  }, function(error, response, body) {
    if (error || response.statusCode !== 200) {
      console.error('ERROR!', error || body);
    }
    else {
      console.log('SUCCESS!', body);
    }
  });
})();
```
