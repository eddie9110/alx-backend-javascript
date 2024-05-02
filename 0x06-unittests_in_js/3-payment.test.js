const mocha = require('mocha');
const assert = require('assert');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
  it('should call calculateNumber', () => {
    const spyCalcNum = sinon.spy(Utils, "calculateNumber");
    const spyConsole = sinon.spy(console, "log");
    sendPaymentRequestToApi(100, 20);
    assert(spyConsole.calledOnceWithExactly('The total is: 10'));
    assert(spyCalcNum.withArgs("SUM", 100, 20).calledOnce);
  });
});
