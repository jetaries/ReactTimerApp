var React = require('react');

var Controls = React.createClass({
	propTypes: {
		status: React.PropTypes.string.isRequired,
		onStatusChange: React.PropTypes.func.isRequired
	},
	onStatusChange: function(newStatus) {
		return () => {
			this.props.onStatusChange(newStatus);
		};
	},
	render: function() {
		var {status} = this.props;
		var renderStartStopButton = () => {
			if (status == "started") {
				return <button className="button secondary" onClick={this.onStatusChange('paused')}>Pause</button>;
			} else if (status == "paused") {
				return <button className="button primary" onClick={this.onStatusChange('started')}>Start</button>;
			} else if (status == 'timer-started') {
				return <button className="button primary" onClick={this.onStatusChange('timer-stopped')}>Stop</button>;
			} else if (status == "timer-stopped" || status == "timer-reset") {
				return <button className="button primary" onClick={this.onStatusChange('timer-started')}>Start</button>;
			}
		};

		var renderClearButton = () => {
			if (status.indexOf('timer-') != -1) {
				return <button className="button alert hollow" onClick={this.onStatusChange('timer-reset')}>Clear</button>		
			}
			else {
				return <button className="button alert hollow" onClick={this.onStatusChange('stopped')}>Clear</button>		
			}
		}

		return (
			<div className="controls">
				{renderStartStopButton()}
				{renderClearButton()}
			</div>
		);
	}
});

module.exports = Controls;