const number = require('./index');

test("array ["a", "b", "c"] number must be ", () => {
	expect(number(["a", "b", "c"]).toBe(["1: a", "2: b", "3: c"]))
});