import styled from 'styled-components';

export const Pigeonwrap = styled.div`
	padding-top: 5%;
	padding-left: 5%;
	max-width: 45%;
	font-family: 'Raleway';
	font-size: 18px;
	line-height: 26px;

	@media (max-width: 800px) {
		max-width: 100%;
	}
`;

export const Pigeongraph = styled.p`
	padding-bottom: 8px;

	.substep {
		cursor: pointer;
		color: red;
		&:hover {
			color: pink;
		}
	}
`;

export const ChoicesWrapper = styled.div`
	padding: 8px;
	border: 2px solid papayawhip;
	border-radius: 5px;
`;

export const Option = styled.span`
	cursor: pointer;
	color: red;

	&.choice-option {
		display: block;
		margin-bottom: 20px;
	}

	&:hover {
		color: pink;
	}
`;
