import { easeQuadOut } from 'd3-ease';
import PropTypes from 'prop-types';
import React from 'react';

const propTypes = {
	animatedProps: PropTypes.arrayOf(PropTypes.string).isRequired,
	component: PropTypes.func.isRequired,
	duration: PropTypes.number.isRequired,
	enabled: PropTypes.bool.isRequired,
	steps: PropTypes.number.isRequired
};

export default class Animated extends React.PureComponent{
	constructor(props) {
		super(props);
		this.state = props.animatedProps.reduce((state, prop) => {
			state[prop] = props[prop];
			return state;
		}, {});
	}
	componentWillReceiveProps(nextProps) {
		if (!nextProps.enabled || nextProps.animatedProps.every(prop => this.props[prop] === nextProps[prop])) {
			return;
		}

		clearInterval(this.animation);

		let counter = 0;
		let initialState = this.state;
		this.animation = setInterval(() => {
			counter++;

			this.setState(nextProps.animatedProps.reduce((state, prop) => {
				state[prop] = this.calculateNewValue(initialState[prop], nextProps[prop], counter / nextProps.steps);
				return state;
			}, {}));

			if (counter === nextProps.steps) {
				clearInterval(this.animation);
				this.animation == null;
			}

		}, nextProps.duration / nextProps.steps);
	}
	calculateNewValue(start, end, interval) {
		return start + (end - start) * easeQuadOut(interval);
	}
	render() {
		return this.props.enabled
			? <this.props.component {...this.props} {...this.state}/>
			: <this.props.component {...this.props}/>;
	}
}

Animated.propTypes = propTypes;