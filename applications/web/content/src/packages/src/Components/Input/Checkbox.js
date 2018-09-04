import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import * as defaultStyles from '@packages/themes/default/Components/Input';

const StyledLabel = styled.label`
  ${props => props.checked ? props.styles.LabelChecked : props.styles.Label}
`;

const StyledCheckbox = styled.input`
  ${props => props.styles.Checkbox}
`;

class Checkbox extends Component {
  state = {
    checked: this.props.checked
  };

  render () {
    const { id, name, styles } = this.props;

    return (
      <StyledLabel
        checked={this.state.checked}
        styles={styles}
      >
        <StyledCheckbox
          checked={this.state.checked}
          id={id}
          onChange={this.handleChange}
          name={name}
          styles={styles}
          type="checkbox"
        />
      </StyledLabel>
    );
  }

  handleChange = () => {
    this.setState(state => ({
      checked: !state.checked
    }));

    this.props.onChange();
  };
}

Checkbox.propTypes = {
  checked: PropTypes.bool,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  styles: PropTypes.object
};

Checkbox.defaultProps = {
  checked: false,
  onChange: () => {},
  styles: defaultStyles
};

export default Checkbox;
