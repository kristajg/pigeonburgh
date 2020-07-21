// React & third party libaries
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Styles
import { HeaderWrap } from '../styles';

class Header extends Component {
	render() {
		const { currentStepText = '' } = this.props;
		return <HeaderWrap>This is the header {currentStepText}</HeaderWrap>;
	}
}

Header.propTypes = {
	currentStepText: PropTypes.string.isRequired,
};

export default Header;
