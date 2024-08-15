import { forwardRef } from 'react';
import './InputField.scss';
import classNames from 'classnames';
import { ValidationMessage } from '@components/ContactUs/ValidationMessage';

interface InputFieldProps {
  name: string;
  placeholder: string;
  isNotValid: boolean;
  validationMessage: string;
}

export const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  ({ name, placeholder, isNotValid, validationMessage, ...rest }, ref) => {
    return (
      <div className="InputField" key={name}>
        <input
          type="text"
          className={classNames('InputField__input', {
            'InputField__input--error': isNotValid,
          })}
          name={name}
          placeholder={placeholder}
          ref={ref}
          {...rest}
        />
        {isNotValid && <ValidationMessage message={validationMessage} />}
      </div>
    );
  }
);
