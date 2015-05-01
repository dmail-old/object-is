// Object.is polyfill, courtesy of @WebReflection

var polyfill = require('@dmail/polyfill');

function is(a, b){
	return a === b ? a !== 0 || 1 / a == 1 / b : a != a && b != b;
}

module.exports = is;
polyfill(Object, 'is', is);