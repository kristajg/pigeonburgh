import React from 'react';
import { Option } from './styles';

const Step3 = ({ changeStep, changeSubstep }) => (
  <div>
    Too good for a corn chip, eh? No carb-heavy breakfast for you. Just a coffee-and-go kind of bird.
    <br />
    <br />
    You fly to the nearest cafe and take a <Option onClick={() => changeSubstep(1)}>BIG SIP</Option> from a half-full mug left on a patio table.
    <br />
    <br />
    Full on caffeinated, you fly like a bird out of hell in several circles because you feel ALIVE. Let's put this perpetual birdmotion machine to work!
    <br />
    <br />
    <Option onClick={() => changeStep(4)}>FLY OVER TO A BRIDGE WITH INTENT</Option>
  </div>
);

export default Step3;
