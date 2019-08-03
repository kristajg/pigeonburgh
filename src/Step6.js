import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Option, Pigeongraph } from './styles';

class Step6 extends PureComponent {
	addItemAndProceed = () => {
		const { addItem, changeStep } = this.props;
		addItem('binaryCode');
		changeStep(10);
	};

	render() {
		const { changeSubstep } = this.props;
		return (
			<div>
				<Pigeongraph>
					You befriend the cat and learn his name is Carl. He seems like a sensitive and insightful soul.
				</Pigeongraph>
				<Pigeongraph>
					You learn Carl enjoys painting water colors of 1980s action film scenes. After a pleasant conversation
					involving comparisons of your best <Option onClick={() => changeSubstep(1)}>Terminator impressions</Option>,
					you bid farewell to your new friend.
				</Pigeongraph>
				<Pigeongraph>
					Just before you leave, Carl slips you a piece of paper with a strange series of binary code on it. He says,
					&#34;You&#39;re alright Pip, ya know that. A real Maverick. I&#39;m sure we&#39;ll see each other again soon.
				</Pigeongraph>
				<Pigeongraph>
					You say &#34;Thanks, <Option onClick={() => changeSubstep(2)}>Goose</Option>&#34; and take the slip paper.
				</Pigeongraph>
				<Option onClick={() => this.addItemAndProceed()}>Fly home Top Gun style</Option>
			</div>
		);
	}
}

Step6.propTypes = {
	changeStep: PropTypes.func.isRequired,
	changeSubstep: PropTypes.func.isRequired,
	addItem: PropTypes.func.isRequired,
};

export default Step6;
