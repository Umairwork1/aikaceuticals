import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useTranslation } from 'react-i18next';
import Heading from '../../components/Heading/Heading';
import Input from '../../components/Input/Input';
import Textarea from '../../components/Textarea/Textarea';
import classes from './contact.module.css';

export default function Contact() {
  const { t } = useTranslation();
  const form = useRef<HTMLFormElement>();
  const [formState, setFormState] = useState({
    message: '',
    loading: false,
    status: 'idle',
  });

  const sendEmail = async (e) => {
    e.preventDefault();
    setFormState((st) => ({ ...st, loading: true }));
    try {
      await emailjs.sendForm(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        form.current,
        {
          publicKey: 'YOUR_PUBLIC_KEY',
        }
      );
      setFormState((st) => ({
        ...st,
        status: 'success',
        message: t('message_sent_success_message'),
      }));
    } catch (error) {
      console.log(error);
      setFormState((st) => ({
        ...st,
        status: 'error',
        message: t('message_sent_error_message'),
      }));
    }
    setFormState((st) => ({ ...st, loading: false }));
  };
  return (
    <>
      <div className={classes['container']}>
        <Heading text="Contact Us" />
        <div className={classes['form-container']}>
          <div className={classes['form-cell']}>
            <Heading text={t('contact_us_heading')} color="black" />
            <p>
              {t('contact_us_description1')}
              <br />
              {t('contact_us_description2')}
            </p>
          </div>
          <form ref={form} onSubmit={sendEmail}>
            <div className={classes['form-cell']}>
              {!formState.loading && formState.message && (
                <div
                  className={
                    formState.status === 'error'
                      ? classes['error']
                      : classes['success']
                  }
                >
                  {formState.message}
                </div>
              )}
              <div className={classes['row']}>
                <Input
                  required
                  placeholder={t('Full Name')}
                  onChange={(e) => console.log(e)}
                />
                <Input
                  required
                  type="email"
                  placeholder={t('Email')}
                  onChange={(e) => console.log(e)}
                />
              </div>
              <div className={classes['row']}>
                <Input
                  required
                  type="tel"
                  placeholder={t('Phone')}
                  onChange={(e) => console.log(e)}
                />
                <Input
                  required
                  placeholder={t('Country')}
                  onChange={(e) => console.log(e)}
                />
              </div>
              <div className={classes['row']}>
                <Input
                  required
                  placeholder={t('Subject')}
                  onChange={(e) => console.log(e)}
                />
              </div>
              <div className={classes['row']}>
                <Textarea
                  required
                  placeholder={t('Your Message')}
                  onChange={(e) => console.log(e)}
                />
              </div>
              <div className={classes['row']}>
                <button className={classes['submit-button']}>
                  {t(formState.loading ? 'Sending' : 'Submit')}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <iframe
        className={classes['map']}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6809.649114258874!2d73.0739596970358!3d31.41895949704219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x392242a2f5be33f3%3A0x6a214e1f73edd114!2sClock%20Tower%20Faisalabad!5e0!3m2!1sen!2s!4v1746010396198!5m2!1sen!2s"
        loading="lazy"
      ></iframe>
    </>
  );
}
