// Third party libs
import styled, { createGlobalStyle } from 'styled-components';

// Fonts
import VT323 from './assets/fonts/VT323.ttf';

// Images
import buttonImage from './assets/images/buttonv2.png';

export const GlobalStyle = createGlobalStyle`
  body {
		background-color: #fdfcfa;
	}
	@font-face {
		font-family: 'VT323';
		font-style: normal;
		font-weight: 400;
		src: url(${VT323});
	}
`;

export const Pigeonwrap = styled.div`
	padding: 5%;
	max-width: 45%;
	font-family: 'VT323';
	font-size: 20px;
	line-height: 26px;

	@media (max-width: 800px) {
		max-width: 100%;
	}
`;

export const Pigeongraph = styled.p`
	padding-bottom: 8px;

	.substep {
		cursor: pointer;
		color: #00b5b8;
		text-decoration: underline;
		&:hover {
			color: pink;
		}
	}
`;

export const ChoiceButton = styled.div`
	display: ${(props) => (props.hide ? 'none' : '')};
	cursor: pointer;
	background-image: url(${buttonImage});
	background-repeat: no-repeat;
	width: 340px;
	height: 100px;
	margin-bottom: 20px;
`;

export const ButtonText = styled.p`
	padding: 5%;
	text-align: center;
	position: relative;
	top: 50%;
	-ms-transform: translateY(-50%);
	-webkit-transform: translateY(-50%);
	transform: translateY(-50%);
	color: #fdfcfa;
	font-size: ${(props) => (props.textLength > 40 ? '20px' : '22px')};
`;

export const Option = styled.span`
	cursor: pointer;
	color: #00b5b8;

	&:hover {
		color: #b80059;
	}
`;

export const modalStyles = {
	content: {
		top: '38%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)',
		minHeight: '30%',
		maxWidth: '75%',
		fontFamily: 'VT323',
		fontSize: 24,
		background: '#fdfcfa',
		borderRadius: 0,
		border: '2px solid #8d8b8b',
	},
};
