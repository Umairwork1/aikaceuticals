import classes from './logistics.module.css';
import Heading from '../../components/Heading/Heading';
import { useTranslation } from 'react-i18next';

export default function Logistics() {
  const { t } = useTranslation();
  return (
    <div className={classes['container']}>
      <Heading text={t('Logistics & Storage')} />
      <b>{t('logistic_description1')}</b>
      <p>{t('logistic_description2')}</p>
      <p>{t('logistic_description3')}</p>
      <p>{t('logistic_description4')}</p>
      <p>{t('logistic_description5')}</p>
    </div>
  );
}
