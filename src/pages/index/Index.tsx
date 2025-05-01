import banner from '../../assets/banner.jpg';
import arrow from '../../assets/arrow.svg';
import classes from './index.module.css';
import Product from '../../components/Product/Product';
import Heading from '../../components/Heading/Heading';

export default function Index() {
  return (
    <>
      <img width="100%" height="auto" src={banner} />
      <div className={classes['container']}>
        <Heading text="Aikaceuticals Medical" />
        <p>
          Where expertise in dialysis consumables meets innovative solutions. As
          a leading European manufacturer and distributor in the industry, we
          pride ourselves on providing top-quality products tailored to the
          unique needs of our partners. We deliver a comprehensive range of
          dialysis consumables, designed to optimize patient care and enhance
          treatment outcomes. With Aikaceuticals Medical, you're not just
          getting consumables – you're gaining a trusted partner dedicated to
          your success. Join us in shaping the future of dialysis care,
          everywhere and for everyone.
        </p>
        <div className={classes['link-container']}>
          <Heading text="Get to Know Us Closer" />
          <img width="25px" height="25px" src={arrow} />
        </div>
        <div className={classes['products-container']}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(() => (
            <Product />
          ))}
        </div>
      </div>
    </>
  );
}
