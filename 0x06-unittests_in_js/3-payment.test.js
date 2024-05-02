const mocha = require('mocha');
const { assert, except } = require('assert');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
  it('should call calculateNumber', () => {
    const spyCalcNum = sinon.spy(Utils, "calculateNumber");
    const spyConsole = sinon.spy(console, "log");
    const apiRes = sendPaymentRequestToApi(100, 20);
    expect(consoleSpy.calledWithExactly('The total is: 120')).to.equal(true);
    except(spyConsole.calledOnceWithExactly('SUM', 100, 20)).to.equal(true);
    except(spyCalcNum.withArgs("SUM", 100, 20).calledOnce);
    expect(utils.calculateNumber('SUM', 100, 20)).to.equal(apiRes);
  });
});
