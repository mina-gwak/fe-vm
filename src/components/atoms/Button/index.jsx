import React from 'react';

import PropTypes from 'prop-types';

import * as S from '@components/atoms/Button/Button.style';

export const BUTTON_THEME = {
  DEFAULT: 'default',
  ROUNDED: 'rounded',
};

export const BUTTON_SIZE = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
  X_LARGE: 'x-large',
};

const Button = ({ onClick, children, theme, size, disabled }) => {
  const buttonProps = { theme: theme, size: size };

  return (
    <S.Button type='button' onClick={onClick} disabled={disabled} {...buttonProps}>
      <span>{children}</span>
    </S.Button>
  );
};

Button.propTypes = {
  theme: PropTypes.string,
  size: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  theme: BUTTON_THEME.DEFAULT,
  size: BUTTON_SIZE.MEDIUM,
  onClick: () => {},
  disabled: false,
};

export default Button;
