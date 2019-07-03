import React from 'react';
import { Option, Pigeongraph } from './styles';

const Step12 = ({ changeStep, changeSubstep }) => (
	<div>
		<Pigeongraph>As a bird with a hungry mind, you enjoy living close to the Cathedral of Learning.</Pigeongraph>
		<Pigeongraph>
			As you approach that tall tower of tutelage, you see a possum friend named{' '}
			<Option onClick={() => changeSubstep(1)}>Ira</Option> from art electives back at University.
		</Pigeongraph>
		<Pigeongraph>
			After initial pleasantries you can tell something is up. Ira confesses she&#39;s mega bummed since her agency job
			isn&#39;t what she imagined & it&#39;s draining her of creativity and energy points.
		</Pigeongraph>
		<Option onClick={() => changeStep(14)}>Listen sincerely</Option>
		<br />
		<br />
		<Option onClick={() => changeStep(15)}>Share a relatable story</Option>
	</div>
);

export default Step12;
