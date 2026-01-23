import classes from './ro-system.module.css';
import Heading from '../../components/Heading/Heading';
import { useTranslation } from 'react-i18next';
import RO_1 from '../../assets/RO_1.png';
import RO_2 from '../../assets/RO_2.png';
import { useState } from 'react';

export default function ROSystem() {
  const { t } = useTranslation();

  const images = [
    [RO_1, '90%', undefined],
    [RO_2, '100%', '100%'],
  ];

  const [img, setImg] = useState(0);

  const handleNextImagePreview = () => {
    if (img < images.length - 1) {
      setImg((i) => i + 1);
    }
  };

  const handlePreviousImagePreview = () => {
    if (img > 0) {
      setImg((i) => i - 1);
    }
  };

  return (
    <div className={classes['container']}>
      <div className={classes['desc-cell']}>
        <Heading text={t('ro_system_heading')} />

        <p>{t('ro_system_description1')}</p>

        <ul className={classes['list']}>
          <li>✅ {t('ro_system_description2')}</li>
          <li>✅ {t('ro_system_description3')}</li>
          <li>✅ {t('ro_system_description4')}</li>
          <li>✅ {t('ro_system_description5')}</li>
        </ul>

        <p>{t('ro_system_description6')}</p>
      </div>

      <div className={classes['img-cell']}>
        <button
          className={classes['button']}
          onClick={handlePreviousImagePreview}
          type="button"
        >
          &laquo;
        </button>

        <div className={classes['img-container']}>
          <img
            src={images[img][0]}
            height={images[img][1]}
            width={images[img][2]}
            alt="Dialysis RO System"
          />
        </div>

        <button
          className={classes['button']}
          onClick={handleNextImagePreview}
          type="button"
        >
          &raquo;
        </button>
      </div>
    </div>
  );
}
