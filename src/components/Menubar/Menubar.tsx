import classes from './menubar.module.css';
import { Link } from '@tanstack/react-router';
import { MenuProps } from './menubar.types';
import Logo from '../Logo/Logo';

export default function Menubar(props: MenuProps) {
  return (
    <div className={classes['container']}>
      <div className={classes['logo-container']}>
        <Logo />
      </div>
      <div className={classes['menu-container']}>
        {props.menus.map(({ title, url }) => (
          <Link to={url} className={classes['menu']}>
            {title}
          </Link>
        ))}
        <hr className={classes['divider']} />
        <span className={classes['lang-button']}>EN</span>
      </div>
    </div>
  );
}
