import React, { FC } from 'react';
import s from './style.module.scss';

interface InputProps {
  label: string;
  placeholder?: string;
  value?: string;
}

const Input: FC<InputProps> = ({ label, placeholder, value }: InputProps) => (
  <div className={s.input}>
    <label>{label}</label>
    <input type="text" placeholder={placeholder} value={value} />
  </div>
);

export default Input;
