var React = require('react');
var ReactDom = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Controls = require('Controls');

describe('Controls', () => {
	it('should exists', () => {
		expect(Controls).toExist();
	});

	describe('render Pause', () => {
		it('should render pause when started', () => {
			var controls = TestUtils.renderIntoDocument(<Controls countdownStatus='started' />);
			var $el = $(ReactDom.findDOMNode(controls));
			var $pauseButton = $el.find('button:contains(Pause)');

			expect($pauseButton.length).toBe(1);
		});
	});

	describe('render Start', () => {
		it('should render start when paused', () => {
			var controls = TestUtils.renderIntoDocument(<Controls countdownStatus='paused' />);
			var $el = $(ReactDom.findDOMNode(controls));
			var $startButton = $el.find('button:contains(Start)');

			expect($startButton.length).toBe(1);
		});
	});
});