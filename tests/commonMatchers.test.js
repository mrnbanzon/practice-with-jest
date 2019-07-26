// toBe uses Object.is to test exact equality
test('two plus two is four', () => {
  expect(2 + 2).toBe(4);
});

// toEqual is used to check the value of an object
// recursively checks every field of an object/array
test('object assignment', () => {
  const data = { one: 1 };
  data['two'] = 2;
  expect(data).toEqual({ one: 1, two: 2 });
});

// use .not. to test for the opposite of a matcher
test('adding positive numbers is not zero', () => {
  for (let a = 1; a < 4; a++) {
    for (let b = 1; b < 4; b++) {
      expect(a + b).not.toBe(0);
    }
  }
});
