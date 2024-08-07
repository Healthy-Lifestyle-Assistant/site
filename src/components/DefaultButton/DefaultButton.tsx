import { FC } from 'react';
import './DefaultButton.scss';

interface DefaultButtonProps {
  title: string;
  style?: object;
  otherProps?: object;
  onClick?: () => void;
}

export const DefaultButton: FC<DefaultButtonProps> = ({ title, style, onClick, ...otherProps }) => {
  return (
    <button
      className="DefaultButton"
      onClick={onClick}
      style={style}
      {...otherProps}
    >
      {title}
    </button>
  );
};