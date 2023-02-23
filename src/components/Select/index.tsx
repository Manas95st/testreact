import React from 'react';
import './styles.scss';

export type SelectOption = {
  label: string;
  value: string;
};

export type SelectProps = {
  options: SelectOption[];
};

export const Select: React.FC<SelectProps> = ({ options }) => {
  return (
    <select className={'b-select'}>
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};
