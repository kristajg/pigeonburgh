import React from 'react';
import { Option } from './styles';

const Step1 = ({ changeStep, changeSubstep }) => (
  <div>
    <b>Hey you. Yeah, you. Wake up ya jaboroni!!</b>
    <br />
    <br />
    You are a <Option onClick={() => changeSubstep(1)}>pigeon</Option> in your prime. How coo is that? You guess it's pretty coo.
    <br />
    <br />
    Yaaaaaaawn. What a beautiful day in the neighborhood. The rising sun shines through sparse clouds, illuminating the surrounding rivers and city buildings.
    <br />
    <br />
    A corn chip rests conveniently by your feetsies. Do you...
    <br /><br />
    <Option onClick={() => changeStep(2)}>Crunch that chip</Option>
    <br /><br />
    <Option onClick={() => changeStep(3)}>Skip the chip</Option>
  </div>
);

export default Step1;
