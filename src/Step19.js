import React from 'react';
import PropTypes from 'prop-types';
import { Option, Pigeongraph } from './styles';

const Step19 = ({ changeStep, changeSubstep }) => (
	<div>
		<Pigeongraph>You recount the crust punk happenings and show Ira the curious piece of paper.</Pigeongraph>
		<Pigeongraph>
			Ira takes the paper in her prehensile possum tail & studies it. “Hmm. Doesn’t say much other than{' '}
			<i>rum warehouse</i>.”
		</Pigeongraph>
		<Pigeongraph>
			On top of being a badass artist, apparently Ira is fluent in binary code.{' '}
			<Option onClick={() => changeSubstep(1)}>Dang</Option>.
		</Pigeongraph>
		<Pigeongraph>
			You know there&#39;s a rum distillery near the Strip District in a cinder block building. It&#39;s in an area that
			looks just the right blend of crime scene and every day whatever. You went there once on a libation trail with an
			old pigeon crew.
		</Pigeongraph>
		<Pigeongraph>You thank Ira for having such a cool brain and head out.</Pigeongraph>
		<Option onClick={() => changeStep(20)}>Ware is that warehouse again</Option>
	</div>
);

Step19.propTypes = {
	changeStep: PropTypes.func.isRequired,
	changeSubstep: PropTypes.func.isRequired,
};

export default Step19;
