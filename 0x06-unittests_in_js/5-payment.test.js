const mocha = require('mocha');
const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', () => {
  let spy;
  beforeEach(() => {
    spy = sinon.spy(console, 'log');
  });
  afterEach(() => {
    spy.restore();
  });

  it('should log 120', () => {
    sendPaymentRequestToApi(100, 20);
    expect(spy.calledOnceWithExactly('The total is: 120')).to.be.true;
    expect(spy.calledOnce).to.be.true;
  });
  it('should log 20', () => {
    sendPaymentRequestToApi(10, 10);
    expect(spy.calledOnceWithExactly('The total is: 20')).to.be.true;
    expect(spy.calledOnce).to.be.true;
  });
});
