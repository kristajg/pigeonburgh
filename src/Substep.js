import React from 'react';
import PropTypes from 'prop-types';
import { Option, Pigeongraph } from './styles';

const Substep = ({ text, resetSubstep }) => (
	<div>
		<Pigeongraph>{text}</Pigeongraph>
		<Option onClick={() => resetSubstep()}>Go Back</Option>
	</div>
);

Substep.propTypes = {
	text: PropTypes.string.isRequired,
	resetSubstep: PropTypes.func.isRequired,
};

export default Substep;
