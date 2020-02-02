'use strict';
const axios = require('axios');
const RateEntity = require('./entities/RateEntity');
const APIURL = "https://api.exchangeratesapi.io/latest";

module.exports.rates = async event => {
  try {
    let apiResponse = await axios.get(APIURL);
    if(apiResponse.status > 200) {
      throw new Error("exchangeratesapi does not response");
    }

    let { data } = apiResponse;
    let Rate = new RateEntity(data)

    return {
      statusCode: 200,
      body: JSON.stringify(
        {
          base: Rate.base,
          date: Rate.date,
          rates: Rate.rates
        },
        null,
        2
      ),
    };
  } catch (error) {
    return {
      statusCode: 400,
      body: JSON.stringify(
        {
          message: `Something went wrong: ${error}`,
        },
        null,
        2
      ),
    };
  }
};
