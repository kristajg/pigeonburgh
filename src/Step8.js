import React from 'react';
import { Option } from './styles';

const Stepeight = ({ changeStep, changeSubstep }) => (
  <div>
    Like your father before you, you are a true Cali brah in your salty pigeon heart.
    <br />
    <br />
    With the grace of a 120 year old sea turtle you carve slow S's down the hill. In that moment you swear you are infinite - since it certainly takes you long enough to complete the race.
    <br />
    <br />
    The crust punk easily beats you speed wise, but is moved to tears by your beautious display. He slips you a non-slippery slip of paper as a reward.
    <br />
    <br />
    He seems like a sensitive soul. You notice the paper is covered in strange binary code...
    <br />
    <br />
    <Option onClick={() => changeStep(10)}>Fly home slow & steady, brah</Option>
  </div>
);

export default Stepeight;
