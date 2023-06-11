import React, { useEffect, useLayoutEffect, useState } from 'react';

import validate, { rule } from '~/utils/validate';

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
  state: { inputValue: string; isValid: boolean };
  setState: React.Dispatch<
    React.SetStateAction<{
      inputValue: string;
      isValid: boolean;
    }>
  >;
  validateSchema?: rule[];
}

function Input({
  label = '',
  type = 'text',
  name = '',
  placeholder,
  radioList,
  state,
  setState,
  validateSchema,
}: InputProps) {
  const [isRadioType, setIsRadioType] = useState(false);
  const [msg, setMsg] = useState<string>('');

  useLayoutEffect(() => {
    if (type === 'radio') {
      setIsRadioType(true);
    } else {
      setIsRadioType(false);
    }
  }, [type]);

  const handleValidate = (value: string) => {
    if (validateSchema) {
      const result = validate(value, validateSchema);
      setState((prev) => ({ ...prev, isValid: result.isValid }));
      setMsg(result?.msg);
    }
  };

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
              handleValidate(e.target.value);
              setState((prev) => {
                return { ...prev, inputValue: e.target.value };
              });
            }}
            value={state?.inputValue}
            onFocus={(e) => {
              handleValidate(e.target.value);
            }}
          />
          <p>{msg}</p>
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
                    handleValidate(e.target.value);
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
          <p>{msg}</p>
        </>
      )}
    </div>
  );
}

export default Input;
