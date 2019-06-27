import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Option, Pigeongraph } from './styles';

class Step8 extends PureComponent {
	addItemAndProceed = () => {
		const { addItem, changeStep } = this.props;
		addItem('binaryCode');
		changeStep(10);
	};

	render() {
		return (
			<div>
				<Pigeongraph>Like your father before you, you are a true Cali brah in your salty pigeon heart.</Pigeongraph>
				<Pigeongraph>
					With the grace of a 120 year old sea turtle you carve slow S's down the hill. In that moment you swear you are
					infinite - since it certainly takes you long enough to complete the race.
				</Pigeongraph>
				<Pigeongraph>
					The crust punk easily beats you speed wise, but is moved to tears by your beautious display. He slips you a
					non-slippery slip of paper as a reward.
				</Pigeongraph>
				<Pigeongraph>
					He seems like a sensitive soul. You notice the paper is covered in strange binary code...
				</Pigeongraph>
				<Option onClick={() => this.addItemAndProceed()}>Fly home slow & steady, brah</Option>
			</div>
		);
	}
}

Step8.propTypes = {
	changeStep: PropTypes.func.isRequired,
	addItem: PropTypes.func.isRequired,
};

export default Step8;
