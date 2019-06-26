import React from 'react';
import { Option } from './styles';

const Step4 = ({ changeStep, changeSubstep }) => (
  <div>
    You fly by the bridge over the east river. A group of <Option onClick={() => changeSubstep(1)}>teenagers</Option> are sitting on a big chunk of cement under the bridge, smoking cigarettes.
    <br />
    <br />
    They furtively look around. Pretty obvious they aren't old enough for those 100s.
    <br />
    <br />
    A teen steps forward. Oh no, he's both a crust punk AND challenging you to a skate off! A lethal combo. Do you..
    <br />
    <br />
    <Option onClick={() => changeStep(5)}>Shred that gnar</Option>
    <br />
    <br />
    <Option onClick={() => changeStep(6)}>Ask if he's seen any good shows lately</Option>
  </div>
);

export default Step4;
