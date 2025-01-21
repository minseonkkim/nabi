import React from 'react';
import { StyledButton } from './Button.styles';

interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: 'solid';
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  variant = 'solid',
  disabled = false,
}) => {
  return (
    <StyledButton onClick={onClick} variant={variant} disabled={disabled}>
      {label}
    </StyledButton>
  );
};
