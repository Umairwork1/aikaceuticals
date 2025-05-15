import classes from './menubar.module.css';
import { Link } from '@tanstack/react-router';
import { MenuProps } from './menubar.types';
import Logo from '../Logo/Logo';
import { useTranslation } from 'react-i18next';
import { supportedLangues, handleLangClick } from '../../i18n';

export default function Menubar(props: MenuProps) {
  const { t, i18n } = useTranslation();
  return (
    <div className={classes['container']}>
      <div className={classes['logo-container']}>
        <Logo />
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
        {i18n.language.toUpperCase()}
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
