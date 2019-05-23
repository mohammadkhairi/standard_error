'use strict'

const { expect } = require('chai');

const StandardError = require('../src/standard_error');

describe('Standard Error', function () {
    describe('when all of standard parameter was sent', function () {
        it('should display all parameter in their respective field', function (done) {
            const standardError = new StandardError(
                "TEST_ERROR_CODE",
                "TEST ERROR MESSAGE",
                { last_error: 'LAST ERRROR' },
                { context: 'test' }
            );

            expect(standardError.error_code).to.be.a('string');
            expect(standardError.last_error).to.be.a('object');
            expect(standardError.context).to.be.a('object');

            done();
        });
    });
});