import { FC, useEffect, useRef, useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import './ContactUs.scss';
import { useLocation } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import { sendFormData } from '@api/requests';
import { DefaultButton } from '@components/DefaultButton';
import { InputField } from '@components/ContactUs/InputField';
import { TextareaField } from '@components/ContactUs/TextareaField';
import { emailValidation, firstNameValidation, lastNameValidation, messageValidation } from '@utils/validation';

interface IFormData {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

export const ContactUs: FC = () => {
  const { pathname } = useLocation();
  const contactsRef = useRef<HTMLElement | null>(null);
  const [isLoading, setLoading] = useState<boolean>(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm<IFormData>();

  const onSubmit: SubmitHandler<IFormData> = async (data) => {
    const toastId = toast.loading('Sending your message...');
    setLoading(true);
    try {
      const { status, statusText } = await sendFormData(data);

      if (status === 200) {
        toast.update(toastId, {
          render: 'Your message has been sent successfully!',
          type: 'success',
          isLoading: false,
          autoClose: 3000,
        });
        reset();
      } else {
        toast.update(toastId, {
          render: `Something went wrong: ${statusText}`,
          type: 'error',
          isLoading: false,
          autoClose: 3000,
        });
      }
    } catch (error) {
      toast.update(toastId, {
        render: `Something went wrong. Try again.`,
        type: 'error',
        isLoading: false,
        autoClose: 3000,
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (pathname === '/contact-us') {
      contactsRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [pathname]);

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
        <h2 className="ContactUs__title">Contact Us</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="ContactUs__form">
          <div className="ContactUs__inputs">
            <InputField
              {...register('firstName', firstNameValidation)}
              placeholder="First Name"
              isNotValid={Boolean(errors.firstName)}
              validationMessage={errors.firstName?.message || ''}
            />
            <InputField
              {...register('lastName', lastNameValidation)}
              placeholder="Last Name"
              isNotValid={Boolean(errors.lastName)}
              validationMessage={errors.lastName?.message || ''}
            />
            <InputField
              {...register('email', emailValidation)}
              placeholder="Email"
              isNotValid={Boolean(errors.email)}
              validationMessage={errors.email?.message || ''}
            />
            <TextareaField
              {...register('message', messageValidation)}
              placeholder="Message"
              isNotValid={Boolean(errors.message)}
              validationMessage={errors.message?.message || ''}
            />
          </div>
          <DefaultButton
            style={{ width: '100%', maxWidth: 300 }}
            disabled={isLoading}
            title="Send"
          />
        </form>
      </div>
    </section>
  );
};
