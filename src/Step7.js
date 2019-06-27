import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Option, Pigeongraph } from './styles';

class Step7 extends PureComponent {
	addItemAndProceed = () => {
		const { addItem, changeStep } = this.props;
		addItem('binaryCode');
		changeStep(10);
	};

	render() {
		return (
			<div>
				<Pigeongraph>Ah, yes. The traditional skateboard.</Pigeongraph>
				<Pigeongraph>
					You could legitimately wear a Thrasher t-shirt, but they don't come in tiny bird sizes.
				</Pigeongraph>
				<Pigeongraph>
					You skate with the valience of ten thousand Greek chariots and so does the crust punk, but ultimately you best
					him.
				</Pigeongraph>
				<Pigeongraph>
					You do a kickflip to rub victory in his face a little, and he sadly offers you a slip of paper as a reward.
					Aw, he seems like a sensitive soul.
				</Pigeongraph>
				<Pigeongraph>
					The paper has a cryptic series of binary code on it. Cryptic, but not encrypted... huh.
				</Pigeongraph>
				<Option onClick={() => this.addItemAndProceed()}>Fly home with your spoils</Option>
			</div>
		);
	}
}

Step7.propTypes = {
	changeStep: PropTypes.func.isRequired,
	addItem: PropTypes.func.isRequired,
};

export default Step7;
