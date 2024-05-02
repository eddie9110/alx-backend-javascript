const request = require('request')
const { expect } = require('chai')

describe('testing server', () => {
  it('should return 200 code', (done) => {
    request.get('http://localhost:7865', (err, res, body) => {
      expect(res.statusCode).to.equal(200)
      expect(body).to.equal('Welcome to the payment system')
      done();
    });
  });
});
