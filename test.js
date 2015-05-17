assert = require('assert'),
expect = require('expect.js');
presentation = require('./presentation');

describe('Print Hello world', function (done) {
    it('should print Hello world', function (done) {
        expect(presentation.print_hello()).to.eql('Hello world!');
        done();
    });
});

describe('Count to ten', function (done) {
    it('should count from 0 to 9', function (done) {
        expect(presentation.count_to_ten()).to.eql(10);
        done();
    });
});
