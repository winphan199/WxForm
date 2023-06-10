import React from 'react';

interface Option {
  value: string;
  label: string;
}

interface SelectProps {
  label: string;
  name: string;
  optionList: Option[];
  multiple?: boolean;
  state: { inputValue: string | string[]; isValid: boolean };
  setState: React.Dispatch<React.SetStateAction<{ inputValue: string | string[]; isValid: boolean }>>;
}

function Select({ label = '', name = '', optionList, multiple = false, state, setState }: SelectProps) {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <select
        name={name}
        id={name}
        multiple={multiple}
        value={state.inputValue}
        onChange={(e) => {
          if (Array.isArray(state.inputValue)) {
            const options = Array.from(e.target.selectedOptions);
            const values = options.map((option) => option.value);
            setState((prev) => {
              return { ...prev, inputValue: values };
            });
          } else {
            setState((prev) => {
              return { ...prev, inputValue: e.target.value };
            });
          }
        }}
      >
        {optionList.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <p>err</p>
    </div>
  );
}

export default Select;
