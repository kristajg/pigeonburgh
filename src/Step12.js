import React from 'react';
import { Option, Pigeongraph } from './styles';

const Step12 = ({ changeStep, changeSubstep }) => (
	<div>
		<Pigeongraph>
			As a well educated bird, you enjoy living close to Forbes Avenue, museums, and especially the Cathedral of
			Learning. Simply living in close proximity to the Cathedral of Learning has provided a wealth of knowledge beyond
			compare.
		</Pigeongraph>
		<Pigeongraph>
			As you approach that tall tower of tutelage, you spy someone you used to know - a possum friend named Ira from art
			electives back at University.
		</Pigeongraph>
		<Pigeongraph>
			Ira was cool for sure, and always cracked the best jokes during still life studio drawing sessions so you swoop
			down to chat.
		</Pigeongraph>
		<Pigeongraph>
			After initial niceties you can tell something is up. Ira confesses she's bummed out since her agency job isn't
			working out the way she imagined.
		</Pigeongraph>
		<Option onClick={() => changeStep(15)}>Listen sincerely</Option>
		<br />
		<br />
		<Option onClick={() => changeStep(16)}>Share a relatable story</Option>
	</div>
);

export default Step12;
