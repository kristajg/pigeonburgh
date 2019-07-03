import React from 'react';
import { Option, Pigeongraph } from './styles';

const Step15 = ({ changeStep, changeSubstep }) => (
	<div>
		<Pigeongraph>You share a relatable story hoping to put her at ease to know the pain is shareable.</Pigeongraph>
		<Pigeongraph>
			You can’t stop sharing tales of your own cubicle woes. Oh no, baby bird. What are you doing? The walls of your own
			sharing enclose around you like the walls of your agency cubicle. A strange beige half-structure made of felt and
			some crappy metal. You can picture Karen your old coworker peeping over top the cubicle to sneer at you.
		</Pigeongraph>
		<Pigeongraph>Flashback: KAREN! You don’t even know how to use Microsoft Paint don’t MESS WITH ME.</Pigeongraph>
		<Pigeongraph>
			When you are done oversharing you look up and yell “Ira! Work is dumb but you aren’t. I have major respect for
			your art and your drive, girl. You can do this.”
		</Pigeongraph>
		<Pigeongraph>
			Ira looks at you for a solid 4 seconds before laughing and says “You’re a weird bird but I can dig it. What are
			you doing around Forbes anyways?”
		</Pigeongraph>
		<Option onClick={() => changeStep(19)}>Sheepishly share about the binary code paper</Option>
	</div>
);

export default Step15;
