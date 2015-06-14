# nest-object
Convert `{'an.object.like': 'this'}` into `{ an: { object: { like: 'this } } }`

# install
```javascript
npm install nest-object
```

#usage
```javascript
var nest = require('nest-object');

nest({ 'a.nested.key': 'ok' }) // -> { a: { nested: { key: 'ok' } } }
```

That's it.  Super simple.
