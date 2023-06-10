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
}

function Textarea({ label = '', name = '', maxLength, state, setState }: TextareaProps) {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <textarea
        id={name}
        name={name}
        rows={4}
        cols={100}
        maxLength={maxLength}
        value={state.inputValue}
        onChange={(e) => setState((prev) => ({ ...prev, inputValue: e.target.value }))}
      />
    </div>
  );
}

export default Textarea;
