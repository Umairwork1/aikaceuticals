import classes from './input.module.css';

interface InputProps {
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  type?: string;
  required?: boolean;
}

export default function Input({
  placeholder,
  onChange,
  name,
  type = 'text',
  required = true,
}: InputProps) {
  return (
    <input
      className={classes['input']}
      placeholder={placeholder}
      type={type}
      name={name}
      onChange={onChange}
      required={required}
    />
  );
}
