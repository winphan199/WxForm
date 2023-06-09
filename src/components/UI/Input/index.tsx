import { useState } from 'react';

type typeInput = 'text' | 'radio';

interface InputProps {
  label: string;
  type: typeInput;
  name: string;
  placeholder?: string;
}

function Input({ label = '', type = 'text', name = '', placeholder }: InputProps) {
  const [inputValue, setInputValue] = useState('');

  const inputProps = {
    type: type,
    id: name,
    name: name,
    placeholder: placeholder ? placeholder : '',
    value: inputValue,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.target.value);
    },
  };
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input {...inputProps} />
      <p></p>
    </div>
  );
}

export default Input;
