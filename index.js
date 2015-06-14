'use strict';

function nestObject(obj) {
  var nested = Object.create(null);
  Object.getOwnPropertyNames(obj).forEach(function(key) {
    if (!/\./.test(key)) return nested[key] = obj[key];

    var keyParts = key.split('.')
      , finalKey = keyParts.pop()
      , base = nested
      , currentKey;

    while (keyParts.length) {
      currentKey = keyParts.shift();
      if (currentKey === '') continue;
      base[currentKey] = base[currentKey] || {};
      base = base[currentKey];
    }

    base[finalKey] = obj[key];
  });

  return nested;
}

module.exports = nestObject;
