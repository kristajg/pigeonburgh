import React from 'react';
import PropTypes from 'prop-types';
import { Option, Pigeongraph } from './styles';

const Step2 = ({ changeStep }) => (
	<div>
		<Pigeongraph>
			Delicious chip carbs fill your feather bod. Your energy goes up by 10. Hmmm... 10 what exactly?
		</Pigeongraph>
		<Pigeongraph>
			You&#39;re not sure, but 10 feels like the right number unit. Welp, time to fly around this town like no one&#39;s
			business.
		</Pigeongraph>
		<Option onClick={() => changeStep(4)}>Fly to that bridge over yonder</Option>
	</div>
);

Step2.propTypes = {
	changeStep: PropTypes.func.isRequired,
};

export default Step2;
