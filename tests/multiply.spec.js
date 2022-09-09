const { multiply } = require('./../calculator.js');

describe('Multiply', ()=>{
  test(" should multiply two positive integers correctly", ()=>{
    const result = multiply(1, 2);
    expect(result).toBe(2);
  });

  test("should return a negative number when a positive and a negative integer is passed", () => {
    const result = multiply(-1, 2);
    expect(result).toBe(-2);
  });

  test("should return 0 when a 0 integer is passed", ()=>{
    const result = multiply(1, 0);
    expect(result).toBe(0);
  })
  
})