var React = require('react');
var Clock = require('Clock');
var Controls = require('Controls');

var Timer = React.createClass({
	getInitialState: function() {
		return {
			count: 0,
			status: 'timer-reset'
		};
	},
	componentDidUpdate: function(prevProps, prevState) {
		if (this.state.status != prevState.status) {
			switch(this.state.status) {
				case "timer-started":
					this.startTimer();
					break;
				case "timer-reset":
					this.setState({count: 0});
				case "timer-stopped":
					clearInterval(this.timer);
					this.timer = undefined;
					break;
			}
		}
	},
	componentWillUnmount: function() {
		clearInterval(this.timer);
		this.timer = undefined;
	},
	startTimer: function() {
		this.timer = setInterval(() => {
			var newCount = this.state.count + 1;
			this.setState({
				count: newCount
			});
		}, 1000);
	},
	handleStatusChange: function(newStatus) {
		this.setState({'status': newStatus});
	},
	render: function() {
		var {count, status} = this.state;

		return (
			<div>
				<h1 className="page-title">Timer</h1>
				<Clock totalSeconds={count} />
				<Controls status={status} onStatusChange={this.handleStatusChange} />
			</div>
		);
	}
});

module.exports = Timer;