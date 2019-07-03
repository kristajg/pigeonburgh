import React from 'react';
import PropTypes from 'prop-types';
import { Option, Pigeongraph } from './styles';

const Step13 = ({ changeStep, changeSubstep }) => (
	<div>
		<Pigeongraph>
			Ah the Supercomputing Center. The center for all things super and computing. As this binary code probably
			definitely relates to these things, you head on over.
		</Pigeongraph>
		<Pigeongraph>On the way, you notice a new restaurant opening up on the Northside next to the old deli.</Pigeongraph>
		<Pigeongraph>
			That deli rules. They put banana peppers on every sandwich. The old Deli Man there called that came in either
			Dorothy or Donnie. A dreamy old <Option onClick={() => changeSubstep(1)}>sandwich emporium</Option>, indeed.
		</Pigeongraph>
		<Pigeongraph>
			However the new restaurant looks pretty swanky. A man dressed in suave hipster attire heralds people towards the
			entrance. Is he really waving his Premiumley Waxed beard at people? Is he offering free kombucha? Is that...a bowl
			of artisan corn chips???
		</Pigeongraph>
		<Option onClick={() => changeStep(16)}>Grab a traditional deli sando for the road</Option>
		<br />
		<br />
		<Option onClick={() => changeStep(17)}>Embrace change & try out the new restaurant</Option>
	</div>
);

Step13.propTypes = {
	changeStep: PropTypes.func.isRequired,
	changeSubstep: PropTypes.func.isRequired,
};

export default Step13;
