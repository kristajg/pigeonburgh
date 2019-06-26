import React from 'react';
import { Option } from './styles';

const Step5 = ({ changeStep, changeSubstep }) => (
  <div>
    The crust punk sneers and flicks the end of a cheap cigarette at you, but graciously allow you to pick your method of shreddin'.
    <br />
    <br />
    Looking into his arsenal reveals three choices of handlebar-less transportation:
    <br />
    <br />
    <Option onClick={() => changeStep(7)}>the ripped denim tradition of a regular skateboard</Option>
    <br />
    <br />
    <Option onClick={() => changeStep(8)}>the big sur longboard cruiser</Option>
    <br />
    <br />
    <Option onClick={() => changeStep(9)}>the alternative boot-glide of rollerblades</Option>
  </div>
);

export default Step5;
