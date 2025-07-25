import classes from './textarea.module.css';

interface Props {
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  name: string;
  rows?: number;
  required?: boolean;
}

export default function Textarea({
  placeholder,
  rows = 10,
  required = true,
  name,
  onChange,
}: Props) {
  return (
    <textarea
      className={classes['textarea']}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      rows={rows}
      required={required}
    ></textarea>
  );
}
