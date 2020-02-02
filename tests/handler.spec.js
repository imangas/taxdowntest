const axios = require('axios');
const handler = require('../handler');
jest.mock('axios');

describe('test handler', function () {
  beforeEach(() => {
    mockSuccessResponse = {
      status: 200,
      data: {
        base: "TST",
        date: "2020-01-01",
        rates: {
          "USD": 1.258,
          "EUR": 0.98
        }
      }
    };

    mockFailResponse = {
      status: 500,
      data: {}
    };
  });
  
  it('must to response only if api response', async () => {
    axios.get.mockResolvedValue(mockSuccessResponse);
    
    let response = await handler.rates();
    expect(response.statusCode).toBe(200)
  });

  it('must to return 500 if api response fails', async () => {
    axios.get.mockResolvedValue(mockFailResponse);
    
    let response = await handler.rates();
    expect(response.statusCode).toBe(400)
  });
});

  