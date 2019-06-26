import styled from 'styled-components';

export const Pigeonwrap = styled.div`
  padding-top: 5%;
  padding-left: 5%;
  max-width: 40%;
  font-family: 'Raleway';
  font-size: 20px;

  @media (max-width: 800px) {
    max-width: 100%;
  }

`;

export const Option = styled.span`
  cursor: pointer;
  color: red;

  &:hover {
    color: pink;
  }
`;
