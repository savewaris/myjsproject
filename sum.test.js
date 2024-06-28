const sum = require('./sum');

test('1+2=3', () => {
    expect(sum(1,2)).toBe(3);
})

test('5+10=15', () => {
    expect(sum(5,10)).toBe(15);
})

test('13+5=18', () => {
    expect(sum(13,5)).toBe(18);
})
