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
`;

export const Option = styled.span`
	cursor: pointer;
	color: red;

	&:hover {
		color: pink;
	}
`;
