import { forwardRef } from 'react';
import './TextareaField.scss';
import classNames from 'classnames';
import { ValidationMessage } from '@components/ContactUs/ValidationMessage';

interface TextareaFieldProps {
  name: string;
  placeholder: string;
  isNotValid: boolean;
  validationMessage: string;
}

export const TextareaField = forwardRef<HTMLTextAreaElement, TextareaFieldProps>(
  ({ name, placeholder, isNotValid, validationMessage, ...rest }, ref) => {
    return (
      <div className="TextareaField" key={name}>
        <textarea
          className={classNames('TextareaField__input', {
            'TextareaField__input--error': isNotValid,
          })}
          name={name}
          placeholder={placeholder}
          ref={ref}
          {...rest}
        ></textarea>
        {isNotValid && <ValidationMessage message={validationMessage} />}
      </div>
    );
  }
);
