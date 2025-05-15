import classes from './product.module.css';

type ProductProps = {
  name: string;
  image: string;
};

export default function Product({ name, image }: ProductProps) {
  return (
    <div className={classes['container']}>
      <img className={classes['img']} src={image} alt={name} />
      <h4 className={classes['name']}>{name}</h4>
      {/* <a className={classes['review-button']}>Review</a> */}
    </div>
  );
}
