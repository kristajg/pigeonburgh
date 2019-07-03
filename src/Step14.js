import React from 'react';
import { Option, Pigeongraph } from './styles';

const Step14 = ({ changeStep, changeSubstep }) => (
	<div>
		<Pigeongraph>
			You listen sincerely to Ira's tale of agency grueling churn & burn, spending long hours toiling on a laptop for
			peanuts.
		</Pigeongraph>
		<Pigeongraph>
			Her story makes you a bit sad in your core. It's lame that such a creative person should burn themselves out over
			sometimes elses biz, but you see she has certainly built quite a portfolio out of it.
		</Pigeongraph>
		<Pigeongraph>
			You think maybe everyone has to put in those hell-grindy hours and get ultra dissatisfied before bustin' out like
			a caterpillar turning into a butterfly. A metal butterfly destroying it’s Slayer chrysalis while double-bass drums
			resound in the background.
		</Pigeongraph>
		<Pigeongraph>
			You tell her, "Ira. That sucks major tail! You are a cool person with the drive and know-how to destroy a
			small-to-medium sized planet. Destroy it with the power of your art! You got this."
		</Pigeongraph>
		<Pigeongraph>
			Ira smiles and says, "Thanks Birdman. Means a lot coming from you. Why are you flying around these parts anyways?"
		</Pigeongraph>
		<Option onClick={() => changeStep(19)}>Tell her about the binary code paper</Option>
	</div>
);

export default Step14;
