// React & third party libaries
import React from 'react';
import PropTypes from 'prop-types';

// Styles
import { Pigeongraph } from '../styles';

const Substep = ({ text, resetSubstep }) => (
	<div>
		<Pigeongraph>{text}</Pigeongraph>
		<Pigeongraph>
			<span className="substep" onClick={() => resetSubstep()}>
				Go Back
			</span>
		</Pigeongraph>
	</div>
);

Substep.propTypes = {
	text: PropTypes.string.isRequired,
	resetSubstep: PropTypes.func.isRequired,
};

export default Substep;
