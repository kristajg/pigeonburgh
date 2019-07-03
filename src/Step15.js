import React from 'react';
import PropTypes from 'prop-types';
import { Option, Pigeongraph } from './styles';

const Step15 = ({ changeStep, changeSubstep }) => (
	<div>
		<Pigeongraph>You share a relatable story hoping to put her at ease to know the pain is shareable.</Pigeongraph>
		<Pigeongraph>You can’t stop sharing tales of your own cubicle woes. Oh no, what are you doing?</Pigeongraph>
		<Pigeongraph>
			The walls of your own sharing enclose around you like the walls of your old cubicle. A beige trap made of felt and
			some crappy metal. You picture <Option onClick={() => changeSubstep(1)}>Karen</Option> your old coworker peeping
			over the wall at you.
		</Pigeongraph>
		<Pigeongraph>
			Finally, you look up and yell “Ira! Work is dumb but you aren’t. I have major respect for your art and your drive,
			girl. You can do this.”
		</Pigeongraph>
		<Pigeongraph>
			Ira looks at you for a solid 4 seconds before laughing and says “You’re a weird bird but I can dig it. Sounds like
			we had the same cubicle. And same Karen. What are you doing around the Cathedral anyways?”
		</Pigeongraph>
		<Option onClick={() => changeStep(19)}>Sheepishly share about the binary code paper</Option>
	</div>
);

Step15.propTypes = {
	changeStep: PropTypes.func.isRequired,
	changeSubstep: PropTypes.func.isRequired,
};

export default Step15;
