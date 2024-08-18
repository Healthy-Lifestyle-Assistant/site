import { FC } from 'react';
import './BurgerMenuModal.scss';
import { motion } from 'framer-motion';
import { BurgerMenuModalItem } from '@components/BurgerMenuModal/BurgerMenuModalItem';
import { Languages } from '@/types/Languages';
import closeIcon from '@assets/icons/close.png';
import { useTranslation } from 'react-i18next';

interface BurgerMenuModalProps {
  title: string;
  currentValue: string;
  variables: string[];
  onClose: () => void;
  onSelect: (value: string) => void;
}

export const BurgerMenuModal: FC<BurgerMenuModalProps> = ({ variables, title, currentValue, onClose, onSelect }) => {
  const { t } = useTranslation('home');
  const modalNames = {
    [Languages.EN]: t(`header.langs.names.${Languages.EN}`),
    [Languages.RU]: t(`header.langs.names.${Languages.RU}`),
    [Languages.UK]: t(`header.langs.names.${Languages.UK}`),
  };

  const handleSubmit = (value: string) => {
    onSelect(value);
    onClose();
  };

  return (
    <section className="BurgerMenuModal">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="BurgerMenuModal__background"
        onClick={onClose}
      />
      <motion.div
        initial={{ transform: 'translateY(100%)' }}
        animate={{ transform: 'translateY(0%)' }}
        exit={{ transform: 'translateY(100%)' }}
        className="BurgerMenuModal__content"
      >
        <div className="BurgerMenuModal__header">
          <p className="BurgerMenuModal__title">{title}</p>
          <button className="BurgerMenuModal__close" onClick={onClose}>
            <img className="BurgerMenuModal__icon" src={closeIcon} alt="close" />
          </button>
        </div>
        <div className="BurgerMenuModal__options">
          {variables.map((item) => (
            <BurgerMenuModalItem
              key={item}
              item={modalNames[item as Languages] || item}
              isSelected={currentValue === item}
              onClick={() => handleSubmit(item)}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};
