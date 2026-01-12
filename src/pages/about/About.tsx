import classes from './about.module.css';
import Heading from '../../components/Heading/Heading';
import { useTranslation } from 'react-i18next';

export default function About() {
  const { t } = useTranslation();
  return (
    <div className={classes['container']}>
      <Heading text={t('About Us')} />
      <p>{t('about_description1')}</p>
      <p>{t('about_description2')}</p>
      <p>{t('about_description3')}</p>
      <p>{t('about_description4')}</p>
      {/* <p>{t('about_description5')}</p> */}
      <p>{t('about_description6')}</p>
      <b>{t('about_description7')}</b>
      <ul>
        <li>{t('about_description8')}</li>
        <li>{t('about_description9')}</li>
        <li>{t('about_description10')}</li>
        <li>{t('about_description11')}</li>
        <li>{t('about_description12')}</li>
        <li>{t('about_description13')}</li>
        <li>{t('about_description14')}</li>
        <li>{t('about_description15')}</li>
      </ul>
      <p>{t('about_description16')}</p>
      {/* <p>{t('about_description17')}</p> */}
      <p>{t('about_description18')}</p>
    </div>
  );
}
