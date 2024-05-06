import React from 'react';
import { ButtonProps, FormItemProps } from 'antd';

import { ButtonStyle } from './styled';

type Props = {
  content: string | React.ReactNode;
  type?: 'primary' | 'ghost' | 'dashed' | 'link' | 'text' | 'default';
  disabled?: boolean;
  buttonProps?: ButtonProps;
  className?: string;
  isLoading?: boolean;
  icon?: React.ReactNode;
  color?: string;
  onClick?: () => void;
} & Omit<FormItemProps, 'children'>;

const ButtonField: React.FC<Props> = ({
  content,
  buttonProps,
  className,
  type,
  disabled,
  isLoading,
  icon,
  color,
  onClick,
}) => {
  return (
    <ButtonStyle
      color={color}
      loading={isLoading}
      disabled={disabled}
      onClick={onClick}
      icon={icon}
      type={type ?? 'primary'}
      className={`${className ?? ''}`}
      {...buttonProps}
    >
      {content}
    </ButtonStyle>
  );
};

export default ButtonField;
