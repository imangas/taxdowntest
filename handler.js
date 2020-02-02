'use strict';
const axios = require('axios');
const APIURL = "https://api.exchangeratesapi.io/latest";

module.exports.rates = async event => {

  try {
    let apiResponse = await axios.get(APIURL);
    if(apiResponse.status > 200) {
      throw new Error("exchangeratesapi does not response");
    }

    let { data:ratesData } = apiResponse;
    return {
      statusCode: 200,
      body: JSON.stringify(
        {
          base: ratesData.base,
          date: ratesData.date,
          rates: ratesData.rates
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
