const calculate = require('./calculator');

test ('1+2 * 4 / 2',()=>{
    expect(calculate(1,2,4)).toBe(6);
});