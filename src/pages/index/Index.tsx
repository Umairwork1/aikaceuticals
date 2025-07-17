import banner from '../../assets/banner.png';
import arrow from '../../assets/arrow.svg';
import avf_needless from '../../assets/products/AVF_Needless.jpeg';
import blood_tubing_line from '../../assets/products/Blood_Tubing_Line.jpeg';
import dialysis_chair from '../../assets/products/Dialysis_Chair.jpeg';
import dialysis_machine from '../../assets/products/Dialysis_Machine.png';
import disinfectants from '../../assets/products/Disinfectants.jpeg';
import classes from './index.module.css';
import Product from '../../components/Product/Product';
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
        <div className={classes['products-container']}>
          <Product name="AVF Needless" image={avf_needless} />
          <Product name="Blood Tubing Line" image={blood_tubing_line} />
          <Product name="Dialysis Chair" image={dialysis_chair} />
          <Product name="Dialysis Machine" image={dialysis_machine} />
          <Product name="Disinfectants" image={disinfectants} />
        </div>
      </div>
    </>
  );
}
