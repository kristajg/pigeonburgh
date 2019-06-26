import React from 'react';
import { Option } from './styles';

const Step10 = ({ changeStep, changeSubstep }) => (
  <div>
    You fly home and let out a big sigh.
    <br />
    <br />
    The nest seems empty somehow, even though its full of plush feathers and sweet decor. 
    You lay down in that down and try to go to sleep but that “take me home country roads” song is stuck in your head for no reason.
    <br />
    <br />
    You play through the events of the day in your mind, pausing to consider that mysterious binary code.
    <br />
    <br />
    <Option onClick={() => changeStep(11)}>Sleep comes eventually, Mountain Mamaaaaaa</Option>
  </div>
);

export default Step10;
