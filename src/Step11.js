import React from 'react';
import { Option, Pigeongraph } from './styles';

const Step11 = ({ changeStep, changeSubstep }) => (
	<div>
		<Pigeongraph>
			Another day, another corn chip. You eat the corn chip and it is so delicious you want to start a relationchip with
			it.
		</Pigeongraph>
		<Pigeongraph>
			Or rather, you want someone to share in this chip fortune with you in a real relationship kind of way. You could
			made chip puns together.
		</Pigeongraph>
		<Pigeongraph>Hmm. That would be nice.</Pigeongraph>
		<Pigeongraph>
			Your reverie is usurped by thoughts of the mysterious binary code acquired yesterday. You figure there's a few
			places that may provide a bit more insight..
		</Pigeongraph>
		<Option onClick={() => changeStep(12)}>Go to the Cathedral of Learning</Option>
		<br />
		<br />
		<Option onClick={() => changeStep(13)}>Go to the Supercomputing Center</Option>
	</div>
);

export default Step11;
