const sum = require('./sum');

test('', () => {
    expect(sum(1,2)).toBe(3);
})

test('', () => {
    expect(sum(5,10)).toBe(15);
})

test('', () => {
    expect(sum(13,5)).toBe(18);
})
