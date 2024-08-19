import { FC, useEffect, useRef, useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import './ContactUs.scss';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useForm, SubmitHandler } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import { sendFormData } from '@api/requests';
import { DefaultButton } from '@components/DefaultButton';
import { InputField } from '@components/ContactUs/InputField';
import { TextareaField } from '@components/ContactUs/TextareaField';
import { createValidationRules, validateEmail } from '@utils/validation';

interface IFormData {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

export const ContactUs: FC = () => {
  const { t } = useTranslation('home');
  const location = useLocation();
  const contactsRef = useRef<HTMLElement | null>(null);
  const [isLoading, setLoading] = useState<boolean>(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm<IFormData>();

  const onSubmit: SubmitHandler<IFormData> = async (data) => {
    const toastId = toast.loading(t('contact.request.loading'));
    setLoading(true);
    try {
      const { status, statusText } = await sendFormData(data);

      if (status === 200) {
        toast.update(toastId, {
          render: t('contact.request.success'),
          type: 'success',
          isLoading: false,
          autoClose: 3000,
        });
        reset();
      } else {
        toast.update(toastId, {
          render: `${t('contact.request.failed')}: ${statusText}`,
          type: 'error',
          isLoading: false,
          autoClose: 3000,
        });
      }
    } catch (error) {
      toast.update(toastId, {
        render: t('contact.request.error'),
        type: 'error',
        isLoading: false,
        autoClose: 3000,
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (location.pathname === '/contact-us') {
      contactsRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);

  const firstNameValidation = createValidationRules(
    2,
    30,
    t('contact.validation.firstname.required'),
    t('contact.validation.firstname.minLength', { count: 2 }),
    t('contact.validation.firstname.maxLength', { count: 30 }),
  );

  const lastNameValidation = createValidationRules(
    2,
    30,
    t('contact.validation.lastname.required'),
    t('contact.validation.lastname.minLength', { count: 2 }),
    t('contact.validation.lastname.maxLength', { count: 30 }),
  );

  const messageValidation = createValidationRules(
    10,
    1000,
    t('contact.validation.message.required'),
    t('contact.validation.message.minLength', { count: 10 }),
    t('contact.validation.message.maxLength', { count: 1000 }),
  );

  const emailValidation = {
    required: t('contact.validation.email.required'),
    maxLength: {
      value: 50,
      message: t('contact.validation.email.maxLength', { count: 50 }),
    },
    validate: (email: string) => validateEmail(email, t),
  };

  return (
    <section className="ContactUs" ref={contactsRef}>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
      />
      <div className="ContactUs__container">
        <h2 className="ContactUs__title">{t('contact.title')}</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="ContactUs__form">
          <div className="ContactUs__inputs">
            <InputField
              {...register('firstName', firstNameValidation)}
              placeholder={t('contact.firstname')}
              isNotValid={Boolean(errors.firstName)}
              validationMessage={errors.firstName?.message || ''}
            />
            <InputField
              {...register('lastName', lastNameValidation)}
              placeholder={t('contact.lastname')}
              isNotValid={Boolean(errors.lastName)}
              validationMessage={errors.lastName?.message || ''}
            />
            <InputField
              {...register('email', emailValidation)}
              placeholder={t('contact.email')}
              isNotValid={Boolean(errors.email)}
              validationMessage={errors.email?.message || ''}
            />
            <TextareaField
              {...register('message', messageValidation)}
              placeholder={t('contact.message')}
              isNotValid={Boolean(errors.message)}
              validationMessage={errors.message?.message || ''}
            />
          </div>
          <DefaultButton
            style={{ width: '100%', maxWidth: 300 }}
            disabled={isLoading}
            title={t('contact.button')}
          />
        </form>
      </div>
    </section>
  );
};
