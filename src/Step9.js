import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Option, Pigeongraph } from './styles';

class Step9 extends PureComponent {
	addItemAndProceed = () => {
		const { addItem, changeStep } = this.props;
		addItem('binaryCode');
		changeStep(10);
	};

	render() {
		return (
			<div>
				<Pigeongraph>
					With your tiny foot chariots, you blaze down the hill like hell and think to yourself: “this feels like
					flying!”
				</Pigeongraph>
				<Pigeongraph>Cross-checking with your memories of actual flight, it is pretty similar.</Pigeongraph>
				<Pigeongraph>
					It's a tie down to the milisecond. You&#39;re not sure why this crust punk went through all the trouble of
					setting up professional-level tech for a street match but you feel cool as a participant.
				</Pigeongraph>
				<Pigeongraph>
					He hands you a slip of paper and says "Excellent match, you&#39;ve earned this. Brink was a really underrated
					Disney made-for-tv movie." and seems to genuinely mean it. A sensitive soul he is.
				</Pigeongraph>
				<Pigeongraph>The paper is covered in a mysterious series of binary code...</Pigeongraph>
				<Option onClick={() => this.addItemAndProceed()}>Actually fly and not rollerblade home</Option>
			</div>
		);
	}
}

Step9.propTypes = {
	changeStep: PropTypes.func.isRequired,
	addItem: PropTypes.func.isRequired,
};

export default Step9;
