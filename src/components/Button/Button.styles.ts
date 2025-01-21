import styled, { css } from 'styled-components';
import { colorPalette, theme } from '../../styles/theme';

interface StyledButtonProps {
  variant: 'solid';
}

export const StyledButton = styled.button<StyledButtonProps>`
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  font-size: ${theme.fontSizes.medium};
  cursor: pointer;
  transition: background-color 0.3s;

  ${({ variant }) =>
    variant === 'solid' &&
    css`
      background-color: ${colorPalette.gray.default};
      color: white;

      &:hover {
        background-color: ${colorPalette.gray.dark};
      }
    `}
`;
