import React, { FC } from 'react';
import s from './style.module.scss';

interface ButtonProps {
  label: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
}

const Button: FC<ButtonProps> = ({ label, type = 'button' }: ButtonProps) => (
  <div className={s.button}>
    <button type={type}>{label}</button>
  </div>
);

export default Button;
