import React, { useLayoutEffect, useState } from 'react';

type typeInput = 'text' | 'radio';

interface RadioItem {
  id: string;
  label: string;
  value: string;
}

interface InputProps {
  label: string;
  type: typeInput;
  name: string;
  placeholder?: string;
  radioList?: RadioItem[];
  state?: { inputValue: string; isValid: boolean };
  setState?: React.Dispatch<
    React.SetStateAction<{
      inputValue: string;
      isValid: boolean;
    }>
  >;
}

function Input({ label = '', type = 'text', name = '', placeholder, radioList, state, setState }: InputProps) {
  const [isRadioType, setIsRadioType] = useState(false);

  useLayoutEffect(() => {
    if (type === 'radio') {
      setIsRadioType(true);
    } else {
      setIsRadioType(false);
    }
  }, [type]);

  return (
    <div>
      {!isRadioType && (
        <>
          <label htmlFor={name}>{label}</label>
          <input
            type={type}
            id={name}
            name={name}
            placeholder={placeholder ? placeholder : ''}
            onChange={(e) => {
              if (setState) {
                setState((prev) => {
                  return { ...prev, inputValue: e.target.value };
                });
              }
            }}
            value={state?.inputValue}
          />
          <p></p>
        </>
      )}
      {isRadioType && (
        <>
          <label htmlFor={name}>{label}</label>
          <div>
            {radioList?.map((radioItem) => (
              <React.Fragment key={radioItem.id}>
                <input
                  type={type}
                  name={name}
                  id={radioItem.id}
                  value={radioItem.value}
                  checked={state?.inputValue === radioItem.value}
                  onChange={(e) => {
                    if (setState) {
                      setState((prev) => {
                        return { ...prev, inputValue: e.target.value };
                      });
                    }
                  }}
                />
                <label htmlFor={radioItem.id}>{radioItem.label}</label>
              </React.Fragment>
            ))}
          </div>
          <p>err</p>
        </>
      )}
    </div>
  );
}

export default Input;
