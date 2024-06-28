const { sum,multiply,divide} = require('./math');

test ('1+2=3',()=>{
    expect(sum(1,2)).toBe(3);
});

test ('2*3=6',()=>{
    expect(multiply(2,3)).toBe(6);
});

test ('6/2=3',()=>{
    expect(divide(6,2)).toBe(3);
});

test ('divide by zero throws error',()=>{
    expect(() => divide(6,0)).toThrow('Cannot divide by zero');
});