import React from 'react';
import { Option } from './styles';

const Step7 = ({ changeStep, changeSubstep }) => (
  <div>
    Ah, yes. The traditional skateboard.
    <br />
    <br />
    You could legitimately wear a Thrasher t-shirt, but they don't come in tiny bird sizes.
    <br />
    <br />
    You skate with the valience of ten thousand Greek chariots and so does the crust punk, but ultimately you best him.
    <br />
    <br />
    You do a kickflip to rub victory in his face a little, and he sadly offers you a slip of paper as a reward. Aw, he seems like a sensitive soul.
    <br />
    <br />
    The paper has a cryptic series of binary code on it. Cryptic, but not encrypted... huh.
    <br />
    <br />
    <Option onClick={() => changeStep(10)}>Fly home with your spoils</Option>
  </div>
);

export default Step7;
