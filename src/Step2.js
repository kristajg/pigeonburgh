import React from 'react';
import { Option, Pigeongraph } from './styles';

const Step2 = ({ changeStep, changeSubstep }) => (
	<div>
		<Pigeongraph>
			Delicious chip carbs fill your feather bod. Your energy goes up by 10. Hmmm... 10 what exactly?
		</Pigeongraph>
		<Pigeongraph>
			You're not sure, but 10 feels like the right number unit. Welp, time to fly around this town like no one's
			business.
		</Pigeongraph>
		<br />
		<br />
		<Option onClick={() => changeStep(4)}>Fly to that Bridge</Option>
	</div>
);

export default Step2;
