const assert = require('assert');
const Utils = require('./utils')
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  it('should call calculateNumber', () => {
    const spyCalcNum = sinon.spy(Utils, 'calculateNumber')
    sendPaymentRequestToApi(100, 20);
    assert(spyCalcNum.withArgs("The total is: 10").calledOnce);
    assert(spyCalcNum.withArgs("SUM", 100, 20).calledOnce);
    spyCalcNum.restore();
  });
});
