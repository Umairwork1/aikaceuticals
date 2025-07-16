import classes from './used-machine.module.css';
import Heading from '../../components/Heading/Heading';
import { useTranslation } from 'react-i18next';
import used_machine from '../../assets/machine.png';
import used_banner from '../../assets/used_banner.png';
import { useState } from 'react';

export default function UsedMachines() {
  const { t } = useTranslation();
  const images = [
    [used_machine, '90%', undefined],
    [used_banner, '100%', '100%'],
  ];
  const [img, setImg] = useState(0);

  const handleNextImagePreview = () => {
    const currentIndex = img;
    if (currentIndex < images.length - 1) {
      setImg((i) => i + 1);
    }
  };

  const handlePreviousImagePreview = () => {
    const currentIndex = img;
    if (currentIndex > 0) {
      setImg((i) => i - 1);
    }
  };
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
      <div className={classes['img-cell']}>
        <button onClick={handlePreviousImagePreview} type="button">
          &laquo;
        </button>
        <div
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
            border: '0px solid black',
            borderRadius: '5px',
            overflow: 'hidden',
            height: '100%',
            width: '100%',
          }}
        >
          <img
            height={images[img][1]}
            width={images[img][2]}
            src={images[img][0]}
          />
        </div>
        <button onClick={handleNextImagePreview} type="button">
          &raquo;
        </button>
      </div>
    </div>
  );
}
