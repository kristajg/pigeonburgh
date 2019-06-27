import React from 'react';
import { Option, Pigeongraph } from './styles';

const Step6 = ({ changeStep, changeSubstep }) => (
	<div>
		<Pigeongraph>
			You make friends with the crust punk. His name is Carl. He seems like a sensitive and insightful soul, and you two
			hit it off.
		</Pigeongraph>
		<Pigeongraph>
			You learn Carl enjoys painting water colors of 1980s action film scenes. After a pleasant conversation involving
			comparisons of your best <Option onClick={() => changeSubstep(1)}>Terminator impressions</Option>, you bid
			farewell to your new friend.
		</Pigeongraph>
		<Pigeongraph>
			Just before you leave, Carl slips you a piece of paper with a strange series of binary code on it and says,
			&#34;You&#39;re alright ya know that. Here ya go, Goose&#34;.
		</Pigeongraph>
		<Pigeongraph>
			You say &#34;Thanks, <Option onClick={() => changeSubstep(2)}>Maverick</Option>&#34; and take the paper.
		</Pigeongraph>
		<Option onClick={() => changeStep(10)}>Fly home Top Gun style</Option>
	</div>
);

export default Step6;
