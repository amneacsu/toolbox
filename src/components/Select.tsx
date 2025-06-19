import React from 'react';
import * as S from './Select.styles.ts';

type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement>;

export const Select = ({
  ...rest
}: SelectProps) => {
  return (
    <S.Select 
      {...rest} 
    />
  );
};
