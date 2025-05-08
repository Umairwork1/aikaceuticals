import classes from './input.module.css';

interface InputProps {
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  required?: boolean;
}

export default function Input({
  placeholder,
  onChange,
  type = 'text',
  required = true,
}: InputProps) {
  return (
    <input
      className={classes['input']}
      placeholder={placeholder}
      type={type}
      onChange={onChange}
      required={required}
    />
  );
}
