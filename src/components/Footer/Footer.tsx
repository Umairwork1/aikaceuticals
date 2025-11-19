import classes from './footer.module.css';
import Logo from '../Logo/Logo';
import whatsapp from '../../assets/whatsapp.svg';
import { useTranslation } from 'react-i18next';
import { supportedLangues, handleLangClick } from '../../i18n';

export default function Footer() {
  const { t } = useTranslation();
  return (
    <div className={classes['container']}>
      <div className={classes['logo-container']}>
        <Logo width='200px' height='200px' />
        <div className={classes['lang-container']}>
          <span className={classes['lang-head']}>{t('Languages')}</span>
          <ul className={classes['lang-list']}>
            {supportedLangues.map((lang, i) => (
              <li key={i} onClick={() => handleLangClick(lang.value)}>
                {lang.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={classes['desc-container']}>
        <div className={classes['contact-container']}>
          <div className={classes['contact']}>
            <a href='mailto:info@aikaceuticals.com'>info@aikaceuticals.com</a>
            <a href='tel:+923044441301'>+92 304 4441301</a>
          </div>
          <div className={classes['social']}>
            {/* <img width="50px" height="50px" src={instagram} />
            <img width="50px" height="50px" src={x} />
            <img width="50px" height="50px" src={facebook} /> */}
            <a href='https://wa.me/923044441301'>
              <img width='50px' height='50px' src={whatsapp} />
            </a>
          </div>
        </div>
        <div className={classes['desc']}>
          <p>{t('footer_company_description')}</p>
          <p>
            © {t('footer_copyright')} {new Date().getFullYear()} <span>Aikaceuticals.</span>{''}
            {t('footer_rights')}.
          </p>
        </div>
      </div>
    </div>
  );
}
