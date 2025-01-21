import styled, { css } from 'styled-components';

interface StyledButtonProps {
  variant: 'solid';
}

export const StyledButton = styled.button<StyledButtonProps>`
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;

  ${({ variant }) =>
    variant === 'solid' &&
    css`
      background-color: #007bff;
      color: white;

      &:hover {
        background-color: #0056b3;
      }
    `}
`;
