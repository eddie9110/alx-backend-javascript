const mocha = require('mocha');
const assert = require('assert');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./4-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
  it('should call calculateNumber', () => {
    const stub = sinon.stub(Utils, 'calculateNumber');
    stub.returns(10);
    const spy = sinon.spy(console, 'log');
    sendPaymentRequestToApi(100, 20);
    assert(spy.calledOnceWithExactly('The total is: 10'));
    assert(stub.withArgs("SUM", 100, 20).calledOnce);
  });
});
