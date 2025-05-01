import classes from './footer.module.css';
import Logo from '../Logo/Logo';
import instagram from '../../assets/instagram.svg';
import x from '../../assets/x.svg';
import facebook from '../../assets/facebook.svg';
import whatsapp from '../../assets/whatsapp.svg';

export default function Footer() {
  return (
    <div className={classes['container']}>
      <div className={classes['logo-container']}>
        <Logo width="200px" height="200px" />
        <div className={classes['lang-container']}>
          <span className={classes['lang-head']}>Languages</span>
          <ul className={classes['lang-list']}>
            <li>English</li>
            <li>Türkçe</li>
            <li>Spanish</li>
            <li>عربي</li>
          </ul>
        </div>
      </div>
      <div className={classes['desc-container']}>
        <div className={classes['contact-container']}>
          <div className={classes['contact']}>
            <a href="mailto:info@aikaceuticals.com">info@aikaceuticals.com</a>
            <a href="tel:03001234567">+90 300 1234567</a>
          </div>
          <div className={classes['social']}>
            <img width="50px" height="50px" src={instagram} />
            <img width="50px" height="50px" src={x} />
            <img width="50px" height="50px" src={facebook} />
            <img width="50px" height="50px" src={whatsapp} />
          </div>
        </div>
        <div className={classes['desc']}>
          <p>
            Our company Aikaceuticals, has been dedicated to serving our
            partners in the field of hemodialysis equipment manufacturing,
            distribution, and services since 2015. Drawing upon years of
            accumulated experience and extensive R.D. efforts, our company has
            proudly established its brand.
          </p>
          <p>
            © Copyright 2025 <span>Aikaceuticals.</span> All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
