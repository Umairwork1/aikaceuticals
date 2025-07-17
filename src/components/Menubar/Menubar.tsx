import en_flag from '../../assets/flags/en.png';
import es_flag from '../../assets/flags/es.png';
import ar_flag from '../../assets/flags/ar.png';
import ur_flag from '../../assets/flags/ur.png';
import tr_flag from '../../assets/flags/tr.png';
import classes from './menubar.module.css';
import { Link } from '@tanstack/react-router';
import { MenuProps } from './menubar.types';
import Logo from '../Logo/Logo';
import { useTranslation } from 'react-i18next';
import { supportedLangues, handleLangClick } from '../../i18n';

const flags = {
  en: en_flag,
  tr: tr_flag,
  ur: ur_flag,
  ar: ar_flag,
  es: es_flag,
};

export default function Menubar(props: MenuProps) {
  const { t, i18n } = useTranslation();

  return (
    <div className={classes['container']}>
      <div className={classes['logo-container']}>
        <a href="/">
          <Logo />
        </a>
      </div>
      <div className={classes['menu-container']}>
        {props.menus.map(({ title, url }, i) => (
          <Link key={i} to={url} className={classes['menu']}>
            {t(title)}
          </Link>
        ))}
        {/* <hr className={classes['divider']} /> */}
      </div>
      <span className={classes['lang-button']}>
        <img
          src={flags[i18n.language as keyof typeof flags]}
          width={30}
          height={30}
        />
        <div className={classes['lang-popup']}>
          <ul>
            {supportedLangues.map((lang, i) => (
              <li key={i} onClick={() => handleLangClick(lang.value)}>
                {lang.title}
              </li>
            ))}
          </ul>
        </div>
      </span>
    </div>
  );
}
