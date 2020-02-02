class RateEntity {
  static baseRegex(){
    return RegExp(/^\w{3}$/, "i");
  }
  static dateRegex(){
    return RegExp(/^(\d{4})\-(\d{1,2})\-(\d{1,2})$/, "");
  }

  constructor(data) {
    if( !data.base || !RateEntity.baseRegex().test(data.base) ) {
      throw new Error("data.base is not valid");
    }

    if( !data.date || !RateEntity.dateRegex().test(data.date) ) {
      throw new Error("data.date is not valid");
    }

    if( !data.rates || typeof data.rates !== "object") {
      throw new Error("data.rates is not valid");
    }

    this.base = data.base;
    this.date = data.date;
    this.rates = data.rates;
  }
}

module.exports = RateEntity;