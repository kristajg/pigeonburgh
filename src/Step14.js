import React from 'react';
import { Option, Pigeongraph } from './styles';

const Step14 = ({ changeStep, changeSubstep }) => (
	<div>
		<Pigeongraph>
			You listen sincerely to Ira's tale of agency churn & burn. It sounds grueling and you recall days spent toiling on
			a laptop for peanuts. The least they could've done is pay you in corn chips, you think.
		</Pigeongraph>
		<Pigeongraph>
			Her story makes you a bit sad in your core. It's lame that such a creative person should burn themselves out over
			sometimes elses biz, but you see she has certainly built quite a portfolio out of it. Maybe everyone has to put in
			those hell-grindy hours and getting ultra dissastisfied before bustin' out like a caterpiller done to death with a
			chrysalis.
		</Pigeongraph>
		<Pigeongraph>You and you tell her, "Ira. That sucks! That sucks major tail! You are a creative"</Pigeongraph>
		<Option onClick={() => changeStep(15)}>GO TO STEP 15?</Option>
	</div>
);

export default Step14;
