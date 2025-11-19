import { FormEvent, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useTranslation } from 'react-i18next';
import Heading from '../../components/Heading/Heading';
import Input from '../../components/Input/Input';
import Textarea from '../../components/Textarea/Textarea';
import classes from './contact.module.css';

export default function Contact() {
  const { t } = useTranslation();
  const form = useRef<HTMLFormElement>(null);
  const [formState, setFormState] = useState({
    message: '',
    loading: false,
    status: 'idle',
  });

  const sendEmail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState((st) => ({ ...st, loading: true }));

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAIL_JS_SERVICE_KEY,
        import.meta.env.VITE_EMAIL_JS_TEMPLATE_KEY,
        form.current as HTMLFormElement,
        {
          publicKey: import.meta.env.VITE_EMAIL_JS_PUBLIC_KEY,
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
                  name="name"
                  placeholder={t('Full Name')}
                  onChange={(e) => console.log(e)}
                />
                <Input
                  required
                  name="email"
                  type="email"
                  placeholder={t('Email')}
                  onChange={(e) => console.log(e)}
                />
              </div>
              <div className={classes['row']}>
                <Input
                  required
                  name="phone"
                  type="tel"
                  placeholder={t('Phone')}
                  onChange={(e) => console.log(e)}
                />
                <Input
                  required
                  name="country"
                  placeholder={t('Country')}
                  onChange={(e) => console.log(e)}
                />
              </div>
              <div className={classes['row']}>
                <Input
                  required
                  name="subject"
                  placeholder={t('Subject')}
                  onChange={(e) => console.log(e)}
                />
              </div>
              <div className={classes['row']}>
                <Textarea
                  required
                  name="message"
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
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d850.7601555725646!2d74.29710386965289!3d31.468068698389857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190158784fc44d%3A0xd2b458dde58db286!2s2%2C%20Plot%20231%2C%20Block%20B%20Phase%201%20Johar%20Town%2C%20Lahore%2C%2054600%2C%20Pakistan!5e0!3m2!1sen!2s!4v1763540406347!5m2!1sen!2s"
        loading="lazy"
      ></iframe>
    </>
  );
}
