import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ChoicesWrapper = styled.div`
	padding: 8px;
	border: 1px solid papayawhip;
	border-radius: 2px;
`;

class Choices extends Component {
	render() {
		const { choices } = this.props;
		return (
			<ChoicesWrapper>
				{choices.map((choice, i) => (
					<div key={`choice-${i}`}>{choice.text}</div>
				))}
			</ChoicesWrapper>
		);
	}
}

Choices.propTypes = {
	choices: PropTypes.func.isRequired,
};

export default Choices;
