const functions = require('./functions');

test("returnTwo() should return 2.", () => {
  expect( functions.returnTwo() ).toEqual( 2 );
});

test("greeting() should return a dynamic greeting based on name.", () => {
  expect( functions.greeting('James') ).toEqual('Hello, James.');
  expect( functions.greeting('Jill') ).toEqual('Hello, Jill.');
});

describe("Math functions:", () => {
  test("add() should return a dynamic sum based on two number parameters.", () => {
    expect( functions.add( 1, 6 ) ).toEqual( 7 );
    expect( functions.add( 5, 5 ) ).toEqual( 10 );
  });

  test("multiply() should return a dynamic product based on two number parameters.", () => {
    expect( functions.multiply( 1, 5 ) ).toEqual( 5 );
    expect( functions.multiply( 5, 10 ) ).toEqual( 50 );
  });

  test("divide() should return a dynamic quotient based on two number parameters.", () => {
    expect( functions.divide( 8, 1 ) ).toEqual( 8 );
    expect( functions.divide( 9, 3 ) ).toEqual( 3 );
  });

  test("subtract() should return a dynamic difference based on two number parameters.", () => {
    expect( functions.subtract( 20, 1 ) ).toEqual( 19 );
    expect( functions.subtract( 12, 3 ) ).toEqual( 9 );
  });
});
