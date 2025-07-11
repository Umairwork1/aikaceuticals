import classes from './used-machine.module.css';
import Heading from '../../components/Heading/Heading';
import { useTranslation } from 'react-i18next';

export default function UsedMachines() {
  const { t } = useTranslation();
  return (
    <div className={classes['container']}>
      <div className={classes['desc-cell']}>
        <Heading text={t('hd_used_machines_heading')} />
        <p>{t('hd_used_machines_description1')}</p>
        <ul className={classes['list']}>
          <li>✅ {t('hd_used_machines_description2')}</li>
          <li>✅ {t('hd_used_machines_description3')}</li>
          <li>✅ {t('hd_used_machines_description4')}</li>
          <li>✅ {t('hd_used_machines_description5')}</li>
        </ul>
        <p>{t('hd_used_machines_description6')}</p>
      </div>
      {/* add 2 images and used our one and one from chatgpt that we create */}
      <div className={classes['img-cell']}></div>
    </div>
  );
}
