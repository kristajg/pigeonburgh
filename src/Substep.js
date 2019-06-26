import React from 'react';
import PropTypes from 'prop-types';
import { Option } from './styles';

const Substep = ({ text, resetSubstep }) => (
  <div>
    <div style={{ paddingBottom: 20 }}>
      {text}
    </div>
    <Option onClick={() => resetSubstep()}>Go Back</Option>
  </div>
);

Substep.propTypes = {
  text: PropTypes.string.isRequired,
  resetSubstep: PropTypes.func.isRequired,
};

export default Substep;
