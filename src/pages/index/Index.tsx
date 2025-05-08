import banner from '../../assets/banner.jpg';
import arrow from '../../assets/arrow.svg';
import classes from './index.module.css';
// import Product from '../../components/Product/Product';
import Heading from '../../components/Heading/Heading';
import { useTranslation } from 'react-i18next';

export default function Index() {
  const { t } = useTranslation();
  return (
    <>
      <img width="100%" height="auto" src={banner} />
      <div className={classes['container']}>
        <Heading text={t('Aikaceuticals Medical')} />
        <p>{t('home_description')}</p>
        <div className={classes['link-container']}>
          <a href="/contact-us">
            <Heading text={t('Get to Know Us Closer')} />
          </a>
          <img width="25px" height="25px" src={arrow} />
        </div>
        {/* <div className={classes['products-container']}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(() => (
            <Product />
          ))}
        </div> */}
      </div>
    </>
  );
}
