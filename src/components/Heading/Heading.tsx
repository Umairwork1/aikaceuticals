import classes from './heading.module.css';

type HeadingProps = {
  text: string;
  color?: string;
};

export default function Heading({ text, color }: HeadingProps) {
  return (
    <p
      className={`${classes['heading']} ${color ? classes[color] : classes['blue']}`}
    >
      {text}
    </p>
  );
}
