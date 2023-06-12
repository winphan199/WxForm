import React, { useState } from 'react';

import validate, { rule } from '~/utils/validate';

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
  validateSchema?: rule[];
}
// Todo: setdefault value for select and validation
function Select({ label = '', name = '', optionList, multiple = false, state, setState, validateSchema }: SelectProps) {
  const [msg, setMsg] = useState<string>('');

  const handleValidateSingle = (value: string) => {
    if (validateSchema) {
      const result = validate(value, validateSchema);
      setState((prev) => ({ ...prev, isValid: result.isValid }));
      setMsg(result?.msg);
    }
  };

  const handleValidateMultiple = (values: string[]) => {
    if (validateSchema) {
      if (values.length > 0 && values.length <= 1) {
        const result = validate(values[0], validateSchema);
        setState((prev) => ({ ...prev, isValid: result.isValid }));
        setMsg(result?.msg);
      }
    }
  };

  return (
    <div className="flex flex-col mb-2">
      <label htmlFor={name} className="text-base uppercase mb-2 font-medium">
        {label}
      </label>
      <select
        className="py-2 px-4 outline-none border border-solid border-[#ddd] rounded text-lg w-full"
        name={name}
        id={name}
        multiple={multiple}
        value={state.inputValue}
        onChange={(e) => {
          if (Array.isArray(state.inputValue)) {
            const options = Array.from(e.target.selectedOptions);
            const values = options.map((option) => option.value);
            handleValidateMultiple(values);

            if (values.length > 1) {
              const filteredValues = values.filter((value) => value !== '');
              setState((prev) => ({ isValid: true, inputValue: filteredValues }));
            } else {
              setState((prev) => {
                return { ...prev, inputValue: values };
              });
            }
          } else {
            handleValidateSingle(e.target.value);
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
      <p className="text-sm h-5 text-red-600">{msg}</p>
    </div>
  );
}

export default Select;
