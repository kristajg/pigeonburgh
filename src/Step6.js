import React from 'react';
import { Option } from './styles';

const Step6 = ({ changeStep, changeSubstep }) => (
  <div>
    You make friends with the crust punk and learn his name is Carl.
    <br />
    <br />
    He actually seems like a sensitive and insightful soul, and you two hit it off.
    <br />
    <br />
    You learn Carl enjoys painting with water colors, primarily of 80s inspired action film scenes. After a pleasant conversation 
    about the merits of Mad Mad 2 and sharing your best Rambo impressions, you bid farewell to your new friend.
    <br />
    <br />
    Just before you leave, Carl slips you a piece of paper with a strange series of binary code on it and says, "You're alright ya know that. Here ya go, Goose".
    <br />
    <br />
    You say "Thanks, Maverick" and take the paper.
    <br />
    <br />
    <Option onClick={() => changeStep(10)}>Fly home Top Gun style</Option>
  </div>
);

export default Step6;
