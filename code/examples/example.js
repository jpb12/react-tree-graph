import CodeMirror from 'react-codemirror';
import PropTypes from 'prop-types';
import React from 'react';

import 'codemirror/mode/css/css';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/blackboard.css';

const propTypes = {
	code: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired,
	description: PropTypes.string,
	mode: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired
};

const defaultProps = {
	mode: 'javascript'
};

export default class Example extends React.PureComponent {
	render() {
		const options = {
			mode: this.props.mode,
			readOnly: true,
			theme: 'blackboard'
		};

		return (
			<div id={this.props.id}>
				<a className="header" href={`#${this.props.id}`}><h2>{this.props.title}</h2></a>
				{ this.props.description && 
					<div className="description">{this.props.description}</div>
				}
				<div className="example">
					<div className="code">
						<CodeMirror value={this.props.code} options={options}/>
					</div>
					<div className="demo">
						{ this.props.children }
					</div>
				</div>
			</div>);
	}
}

Example.propTypes = propTypes;
Example.defaultProps = defaultProps;