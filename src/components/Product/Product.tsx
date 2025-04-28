import classes from './product.module.css';

export default function Product() {
  return (
    <div className={classes['container']}>
      <img
        className={classes['img']}
        src="https://www.galatamedical.com/Upload/GLT_Catheter.png"
      />
      <h4 className={classes['name']}>Hemodialysis Catheter</h4>
      <a className={classes['review-button']}>Review</a>
    </div>
  );
}
