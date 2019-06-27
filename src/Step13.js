import React from 'react';
import { Option } from './styles';

const Step13 = ({ changeStep, changeSubstep }) => (
  <div>
    You decide the Supercomputing Center is the center for all things super and computing. Seeing as this binary code probably definitely relates to computers, you decide to check it out.
    <br />
    <br />
    On your way to the center, you notice a new restaurant opening up on the Northside next to an old deli.
    <br />
    <br />
    That deli was cool. They put banana peppers on every sandwich. The old deli man there called every girl that came in Dorothy, and every guy Donnie.
    <br />
    <br />
    That’s the kind of world I want to live in, forever.
    <br />
    <br />
    <Option onClick={() => changeStep(14)}>Grab a deli sando for the road</Option>
    <br />
    <br />
    <Option onClick={() => changeStep(14)}>Try out the new restaurant</Option>
  </div>
);

export default Step13;
