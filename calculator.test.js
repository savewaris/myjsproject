const calculate = require('./calculator');

test ('1+2 * 4 / 2',()=>{
    expect(calculate(1,2,4)).toBe(6);
});

test ('2+4 * 6 / 2',()=>{
    expect(calculate(2,4,6)).toBe(18);
});

test ('4+6 * 8 / 2',()=>{
    expect(calculate(4,6,8)).toBe(40);
});