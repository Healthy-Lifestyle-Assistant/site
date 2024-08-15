import { FC } from 'react';
import './ValidationMessage.scss';

interface ValidationMessageProps {
  message: string;
}

export const ValidationMessage: FC<ValidationMessageProps> = ({ message }) => {
  return (
    <p className="ValidationMessage">{message}</p>
  );
};