import React from 'react';
import { Option, Pigeongraph } from './styles';

const Step16 = ({ changeStep, changeSubstep }) => (
	<div>
		<Pigeongraph>
			You swoop down and sample an artisan corn chip. It has hints of rosemary, garlic, and nostalgia for a rustic time
			you were never a part of but it's nice to think so.
		</Pigeongraph>
		<Pigeongraph>
			You are told there will be a 15 to 30 minute wait by the chic looking hostess and you comply without thought. This
			will be worth it.
		</Pigeongraph>
		<Pigeongraph>Finally, blissfully, you are seated and get ready to order...</Pigeongraph>
		<Option onClick={() => changeStep(21)}>Bread olive and cheese board</Option>
		<br />
		<br />
		<Option onClick={() => changeStep(22)}>Brunch for dinner, no one can stop you</Option>
	</div>
);

export default Step16;
