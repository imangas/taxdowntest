const RateEntity = require("@/entities/RateEntity");

describe("Rate", () => {
  let base;
  let date;
  let rates;

  beforeEach(() => {
    base = "TST";
    date = "2020-01-01";
    rates = {
      "USD": 1.34,
      "EUR": 0.98
    }
  });

  it("Must create a Rate", () => {
    let rate = new RateEntity({
      base,
      date,
      rates
    });

    let key = Object.keys(rates)[0];

    expect(rate.base).toEqual(base);
    expect(rate.date).toEqual(date);
    expect(rate.rates[key]).toEqual(rates[key]);
  });
});

describe('Exceptions', () => {
  let base;
  let date;
  let rates;

  beforeEach(() => {
    base = "TST";
    date = "2020-01-01";
    rates = {
      "USD": 1,
      "EUR": 0.98
    }
  });

  it('Must Fail with invalid name', () => {
    base = "TEST";

    expect(() => {
      new RateEntity({
        base,
        date,
        rates
      });
    }).toThrow(Error);
  });


  it('Must Fail with invalid date', () => {
    date = "20200101";

    expect(() => {
      new RateEntity({
        date,
        rates,
        base
      });
    }).toThrow(Error);
  });

  it('Must Fail with invalid date', () => {
    rates = "USD";

    expect(() => {
      new RateEntity({
        date,
        rates,
        base
      });
    }).toThrow(Error);
  });
});