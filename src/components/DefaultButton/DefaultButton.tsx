import { FC } from 'react';
import './DefaultButton.scss';
import classNames from 'classnames';

interface DefaultButtonProps {
  title: string;
  style?: object;
  disabled?: boolean;
  otherProps?: object;
  onClick?: () => void;
}

export const DefaultButton: FC<DefaultButtonProps> = ({ title, style, disabled, onClick, ...otherProps }) => {
  return (
    <button
      className={classNames(
        'DefaultButton',
        { 'DefaultButton--disabled': disabled }
      )}
      onClick={onClick}
      disabled={disabled}
      style={style}
      {...otherProps}
    >
      {title}
    </button>
  );
};