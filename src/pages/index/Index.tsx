import banner from '../../assets/banner_new.png';
import arrow from '../../assets/arrow.svg';
import avf_needless from '../../assets/products/AVF_Needless.jpeg';
import blood_tubing_line from '../../assets/products/Blood_Tubing_Line.jpeg';
import dialysis_chair from '../../assets/products/Dialysis_Chair.jpeg';
import dialysis_machine from '../../assets/products/dialysis-machine.jpg';
import disinfectants from '../../assets/products/Disinfectants.jpeg';
import classes from './index.module.css';
import Product from '../../components/Product/Product';
import Heading from '../../components/Heading/Heading';
import { useTranslation } from 'react-i18next';

import Team from '../../components/Team/Team';
import Team1 from "../../assets/team/Team1.jpg";
import Team2 from "../../assets/team/Team2.jpg";
import Team3 from "../../assets/team/Team3.jpg";
import Team4 from "../../assets/team/Team4.jpg";
import Team5 from "../../assets/team/Team5.jpg";
import Team6 from "../../assets/team/Team6.jpg";


export default function Index() {
  const { t } = useTranslation();
  return (
    <>
      <img width="100%" height="auto" src={banner} />
      <div className={classes['container']}>
        <Heading text={t('Aika Ceuticals')} />
        <p>{t('home_description')}</p>
        <div className={classes['link-container']}>
          <a href="/contact-us">
            <Heading text={t('Get to Know Us Closer')} />
          </a>
          <img width="25px" height="25px" src={arrow} />
        </div>
        <div className={classes['products-container']}>
          <Product name="AVF Needless" image={avf_needless} />
          <Product name="AVF Needless" image={avf_needless} />
          <Product name="AVF Needless" image={avf_needless} />
          <Product name="Disinfectants" image={disinfectants} />
          <Product name="Blood Tubing Line" image={blood_tubing_line} />
          <Product name="Dialysis Chair" image={dialysis_chair} />
          <Product name="Dialysis Machine" image={dialysis_machine} />
        </div>

        <Team
          members={[
            { image: Team1 },
            { image: Team2 },
            { image: Team3 },
            { image: Team4 },
            { image: Team5 },
            { image: Team6 },
          ]}
        />

      </div>
    </>
  );
}
