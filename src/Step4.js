import React from 'react';
import { Option, Pigeongraph } from './styles';

const Step4 = ({ changeStep, changeSubstep }) => (
	<div>
		<Pigeongraph>
			You fly by the bridge over the east river. A group of <Option onClick={() => changeSubstep(1)}>teenagers</Option>{' '}
			are sitting on a big chunk of cement under the bridge, smoking cigarettes.
		</Pigeongraph>
		<Pigeongraph>They furtively look around. Pretty obvious they aren&#39;t old enough for those 100s.</Pigeongraph>
		<Pigeongraph>
			A teen steps forward. Oh no, he&#39;s both a crust punk AND challenging you to a skate off! A lethal combo. Do
			you..
		</Pigeongraph>
		<Option onClick={() => changeStep(5)}>Shred that gnar</Option>
		<br />
		<br />
		<Option onClick={() => changeStep(6)}>Ask if he&#39;s seen any good movies lately</Option>
	</div>
);

export default Step4;
