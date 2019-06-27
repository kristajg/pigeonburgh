import React from 'react';
import { Option } from './styles';

const Step9 = ({ changeStep, changeSubstep }) => (
  <div>
    With your tiny foot chariots, you blaze down the hill like hell and think to yourself: “this feels like flying!”
    <br />
    <br />
    Cross-checking with your memories of actual flight, it is pretty similar.
    <br />
    <br />
    It's a tie down to the milisecond. You're not sure why this crust punk went through all the trouble of setting up professional-level tech for a street match but you feel cool as a participant.
    <br />
    <br />
    He hands you a slip of paper and says "Excellent match, you've earned this. Brink was a really underrated Disney made-for-tv movie." and seems to genuinely mean it. A sensitive soul he is.
    <br />
    <br />
    The paper is covered in a mysterious series of binary code...
    <br />
    <br />
    <Option onClick={() => changeStep(10)}>Actually fly and not rollerblade home</Option>

  </div>
);

export default Step9;
