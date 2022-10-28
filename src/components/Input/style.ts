import styled, { css } from 'styled-components';

interface ContainerProps {
    isFocused: boolean;
    isFilled: boolean;
}

export const Container = styled.div<ContainerProps>`
  
  background: #F7F7F7;
  border-radius: 10px;
  border: 2px solid #e9e5e1;
  padding: 16px;
  width: 100%;
  color: #666360;
  
  display: flex;
  align-items: center;
  
  & + div {
    margin-top: 8px;
  }
  
  ${(props) =>
    props.isFocused &&
    css`
      color: #000000;
      border-color: #000000;
    `}
  
  ${(props) =>
    props.isFilled &&
    css`
      color: #000000;
    `}

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #333333;
          
    &::placeholder {
     color: #666360;
    }
  }
  
  > svg {
    margin-right: 16px;
  }
`;
