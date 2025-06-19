import React from 'react';
import * as S from './Button.styles.ts';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
  type = 'button',
  ...rest
}: ButtonProps) => {
  return (
    <S.Button 
      type={type}
      {...rest} 
    />
  );
};
