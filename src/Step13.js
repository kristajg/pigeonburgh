import React from 'react';
import { Option } from './styles';

const Step13 = ({ changeStep, changeSubstep }) => (
  <div>
    At the supercomputing center!
    <br />
    <br />
    <Option onClick={() => changeStep(14)}>GO TO STEP 14</Option>
  </div>
);

export default Step13;
