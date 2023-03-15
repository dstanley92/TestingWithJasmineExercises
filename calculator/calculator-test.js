
it('should calculate the monthly rate correctly', function () {
  const values = {amount: 50000, years: 15, rate: 5};
  expect(calculateMonthlyPayment(values)).toEqual('395.40');
});


it("should return a result with 2 decimal places", function() {
  const values = {amount: 50000, years: 8, rate: 5};
  expect(calculateMonthlyPayment(values)).toEqual('633.00');
});

it("should handle large number of years", function() {
  const values = {amount: 50000, years: 50, rate: 5};
  expect(calculateMonthlyPayment(values)).toEqual('227.07');
});

it("should handle large interest rate", function() {
  const values = {amount: 2000, years: 8, rate: 67};
  expect(calculateMonthlyPayment(values)).toEqual('112.28');
});