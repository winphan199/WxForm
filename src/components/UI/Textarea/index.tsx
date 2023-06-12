import React, { useState } from 'react';

import validate, { rule } from '~/utils/validate';

interface TextareaProps {
  label: string;
  name: string;
  maxLength?: number;
  state: { inputValue: string; isValid: boolean };
  setState: React.Dispatch<
    React.SetStateAction<{
      inputValue: string;
      isValid: boolean;
    }>
  >;
  validateSchema?: rule[];
}

function Textarea({ label = '', name = '', maxLength = 9999, state, setState, validateSchema }: TextareaProps) {
  const [msg, setMsg] = useState<string>('');

  const handleValidate = (value: string) => {
    if (validateSchema) {
      const result = validate(value, validateSchema);
      setState((prev) => ({ ...prev, isValid: result.isValid }));
      setMsg(result?.msg);
    }
  };
  return (
    <div className="flex flex-col mb-2">
      <div className="mb-2 flex justify-between items-center">
        <label className="text-base uppercase font-medium" htmlFor={name}>
          {label}
        </label>
        <span className="text-sm text-slate-600">
          {state.inputValue.length}/{maxLength}
        </span>
      </div>
      <textarea
        className="py-2 px-4 outline-none border border-solid border-[#ddd] rounded text-lg w-full"
        id={name}
        name={name}
        rows={4}
        cols={100}
        maxLength={maxLength}
        value={state.inputValue}
        onChange={(e) => {
          handleValidate(e.target.value);
          setState((prev) => ({ ...prev, inputValue: e.target.value }));
        }}
        onFocus={(e) => {
          handleValidate(e.target.value);
        }}
      />
      <p className="text-sm h-5 text-red-600">{msg}</p>
    </div>
  );
}

export default Textarea;
