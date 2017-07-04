import CodeMirror from 'react-codemirror';
import PropTypes from 'prop-types';
import React from 'react';

import 'codemirror/mode/javascript/javascript';
import 'codemirror/lib/codemirror.css';

const propTypes = {
	code: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired,
	description: PropTypes.string,
	id: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired
};

const options = {
	mode: 'javascript',
	readOnly: true
};

export default class SimpleExample extends React.PureComponent {
	render() {
		return (
			<div id={this.props.id}>
				<a href={`#${this.props.id}`}><h2>{this.props.title}</h2></a>
				{ this.props.description && 
					<div className="description">{this.props.description}</div>
				}
				<div className="code">
					<CodeMirror value={this.props.code} options={options}/>
				</div>
				<div className="example">
					{ this.props.children }
				</div>
			</div>);
	}
}

SimpleExample.propTypes = propTypes;