var nestObject = require('./')
  , assert = require('assert')
  , nested;

nested = nestObject({
  notSplit: true,
  'split.up': true
});

assert.deepEqual(nested, {
  notSplit: true,
  split: { up: true }
});

nested = nestObject({
  'this.is.deeply.nested': true
});

assert.deepEqual(nested, {
  this: {
    is: {
      deeply: {
        nested: true
      }
    }
  }
});

nested = nestObject({
  'too..many.periods': true
});

assert.deepEqual(nested, {
  too: {
    many: {
      periods: true
    }
  }
});

console.log('Success!');
process.exit(0);
