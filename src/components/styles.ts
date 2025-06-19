import { css } from 'styled-components';

export const beveled = css`
  padding: 4px 8px;
  background-color: #c0c0c0;
  border-width: 2px;
  border-color: #fff #808080 #808080 #fff;
  cursor: pointer;
  outline: #000 1px solid;
  border-radius: 2px;

  &:focus {
    outline-width: 2px;
  }
`;
