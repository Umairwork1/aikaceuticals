import classes from './spare-parts.module.css';
import Heading from '../../components/Heading/Heading';
import { useTranslation } from 'react-i18next';

export default function SpareParts() {
  const { t } = useTranslation();
  return (
    <div className={classes['container']}>
      <div className={classes['desc-cell']}>
        <Heading text={t('spare_parts_heading')} />
        <p>{t('spare_parts_description1')}</p>
        <ul className={classes['list']}>
          <li>✅ {t('spare_parts_description2')}</li>
          <li>✅ {t('spare_parts_description3')}</li>
          <li>✅ {t('spare_parts_description4')}</li>
          <li>✅ {t('spare_parts_description5')}</li>
        </ul>
        <p>{t('spare_parts_description6')}</p>
        <p>{t('spare_parts_description7')}</p>
        <p>{t('spare_parts_description8')}</p>
      </div>
      <div className={classes['img-cell']}></div>
    </div>
  );
}
