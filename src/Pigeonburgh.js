import React, { Component } from 'react';
import Substep from './Substep';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import Step5 from './Step5';
import Step6 from './Step6';
import Step7 from './Step7';
import Step8 from './Step8';
import Step9 from './Step9';
import Step10 from './Step10';
import Step11 from './Step11';
import Step12 from './Step12';
import Step13 from './Step13';
import Step14 from './Step14';
import { Pigeonwrap } from './styles';
import * as stext from './substepText';

class Pigeonburgh extends Component {
  state = {
    step: 1,
    substep: 0,
  };

  changeStep = step => this.setState({ step, substep: 0 });

  changeSubstep = substep => this.setState({ substep });

  resetSubstep = () => this.setState({ substep: 0 });

  renderSubstep = textDirectory => {
    return <Substep text={textDirectory} resetSubstep={this.resetSubstep} />;
  };

  renderGameStep = () => {
    const { step, substep } = this.state;

    if (step === 1) {
      if (substep === 1) {
        return this.renderSubstep(stext.stepOneSubstepOne);
      }
      return <Step1 changeStep={this.changeStep} changeSubstep={this.changeSubstep} resetSubstep={this.resetSubstep} />;
    } else if (step === 2) {
      return <Step2 changeStep={this.changeStep} changeSubstep={this.changeSubstep} resetSubstep={this.resetSubstep} />;
    } else if (step === 3) {
      if (substep === 1) {
        return this.renderSubstep(stext.stepThreeSubstepOne);
      }
      return <Step3 changeStep={this.changeStep} changeSubstep={this.changeSubstep} resetSubstep={this.resetSubstep} />;
    } else if (step === 4) {
      if (substep === 1) {
        return this.renderSubstep(stext.stepFourSubstepOne);
      }
      return <Step4 changeStep={this.changeStep} changeSubstep={this.changeSubstep} resetSubstep={this.resetSubstep} />;
    } else if (step === 5) {
      return <Step5 changeStep={this.changeStep} changeSubstep={this.changeSubstep} resetSubstep={this.resetSubstep} />;
    } else if (step === 6) {
      return <Step6 changeStep={this.changeStep} changeSubstep={this.changeSubstep} resetSubstep={this.resetSubstep} />;
    } else if (step === 7) {
      return <Step7 changeStep={this.changeStep} changeSubstep={this.changeSubstep} resetSubstep={this.resetSubstep} />;
    } else if (step === 8) {
      return <Step8 changeStep={this.changeStep} changeSubstep={this.changeSubstep} resetSubstep={this.resetSubstep} />;
    } else if (step === 9) {
      return <Step9 changeStep={this.changeStep} changeSubstep={this.changeSubstep} resetSubstep={this.resetSubstep} />;
    } else if (step === 10) {
      return <Step10 changeStep={this.changeStep} changeSubstep={this.changeSubstep} resetSubstep={this.resetSubstep} />;
    } else if (step === 11) {
      return <Step11 changeStep={this.changeStep} changeSubstep={this.changeSubstep} resetSubstep={this.resetSubstep} />;
    } else if (step === 12) {
      return <Step12 changeStep={this.changeStep} changeSubstep={this.changeSubstep} resetSubstep={this.resetSubstep} />;
    } else if (step === 13) {
      return <Step13 changeStep={this.changeStep} changeSubstep={this.changeSubstep} resetSubstep={this.resetSubstep} />;
    } else if (step === 14) {
      return <Step14 changeStep={this.changeStep} changeSubstep={this.changeSubstep} resetSubstep={this.resetSubstep} />;
    }
  }

  render() {
    return (
      <Pigeonwrap>
        {this.renderGameStep()}
        <br />
        <br />
        <button onClick={() => this.changeStep(1)}>RESET GAME</button>
      </Pigeonwrap>
    );
  }
}

export default Pigeonburgh;
