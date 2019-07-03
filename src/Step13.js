import React from 'react';
import PropTypes from 'prop-types';
import { Option, Pigeongraph } from './styles';

const Step13 = ({ changeStep, changeSubstep }) => (
	<div>
		<Pigeongraph>
			You decide the Supercomputing Center is the center for all things super and computing. Sounds like the center for
			you. Seeing as this binary code probably definitely relates to computers, you decide to check it out.
		</Pigeongraph>
		<Pigeongraph>
			On your way to the center, you notice a new restaurant opening up on the Northside next to an old deli.
		</Pigeongraph>
		<Pigeongraph>
			That deli was cool. They put banana peppers on every sandwich. The old deli man there called every girl that came
			in Dorothy, and every guy Donnie.
		</Pigeongraph>
		<Pigeongraph>That’s the kind of world I want to live in, forever. A deli paradise.</Pigeongraph>
		<Pigeongraph>
			However the new restaurant looks pretty swanky. A man dressed in an enticing looking hipster attire is harolding
			people towards the entrance in a most alluring fashion. Is he really waving his beard at people? Is he offering
			free kombucha? Is that...a bowl of artisan corn chips???
		</Pigeongraph>
		<Option onClick={() => changeStep(16)}>Grab a traditional deli sando for the road</Option>
		<br />
		<br />
		<Option onClick={() => changeStep(17)}>Embrace change & try out the new restaurant</Option>
	</div>
);

Step13.propTypes = {
	changeStep: PropTypes.func.isRequired,
	addItem: PropTypes.func.isRequired,
};

export default Step13;
