var React = require('react');
var ReactDom = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Timer = require('Timer');

describe('Timer', () => {
	it('should exists', () => {
		expect(Timer).toExist();
	});

	describe('startTimer', () => {
		it ('should start timer', (done) => {
			var timer = TestUtils.renderIntoDocument(<Timer />);
			timer.handleStatusChange('timer-started');
			
			setTimeout(() => {
				expect(timer.state.status).toBe('timer-started');
				expect(timer.state.count).toBe(2);
				done();
			}, 2001);
		});

		it ('should pause timer on timer-stopped', (done) => {
			var timer = TestUtils.renderIntoDocument(<Timer />);
			timer.setState({count:10});
			timer.handleStatusChange('timer-started');
			timer.handleStatusChange('timer-stopped');

			setTimeout(() => {
				expect(timer.state.count).toBe(10);
				expect(timer.state.status).toBe('timer-stopped');
				done();
			}, 2001);
		});

		it ('should reset timer on timer-reset', (done) => {
			var timer = TestUtils.renderIntoDocument(<Timer />);
			timer.setState({count:10});
			timer.handleStatusChange('timer-started');
			timer.handleStatusChange('timer-reset');

			setTimeout(() => {
				expect(timer.state.count).toBe(0);
				expect(timer.state.status).toBe('timer-reset');
				done();
			}, 1001);
		});
	});
});