import { FC, useMemo, useState } from 'react';
import './BurgerMenu.scss';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { AnimatePresence, motion } from 'framer-motion';
import { BurgerMenuModal } from '@components/BurgerMenuModal';
import { BurgerMenuItem } from '@components/BurgerMenu/BurgerMenuItem';
import { BurgerMenuOption } from '@components/BurgerMenu/BurgerMenuOption';
import { NavList } from '@/types/NavList';
import { Languages } from '@/types/Languages';

interface BurgerMenuProps {
  onClick: () => void;
}

export const BurgerMenu: FC<BurgerMenuProps> = ({ onClick }) => {
  const navigationList = useMemo(() => Object.entries(NavList), []);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { i18n } = useTranslation();
  const { pathname } = useLocation();

  const handleToggleModal = () => setIsOpen(!isOpen);
  const handleSelectLanguage = (value: string) => i18n.changeLanguage(value as Languages);

  const languagesItems = [Languages.EN, Languages.RU, Languages.UK];

  return (
    <motion.menu
      initial={{ transform: 'translateX(-100%)' }}
      animate={{ transform: 'translateX(0%)' }}
      exit={{ transform: 'translateX(100%)' }}
      className="BurgerMenu"
    >
      <ul className="BurgerMenu__list">
        {navigationList.map(([title, to]) => (
          <BurgerMenuItem
            key={title}
            title={title}
            to={to}
            isSelected={to === pathname}
            onClick={onClick}
          />
        ))}
        <BurgerMenuOption
          title="Languages"
          isOpen={isOpen}
          onClick={handleToggleModal}
        />
      </ul>
      <AnimatePresence>
        {isOpen && (
          <BurgerMenuModal
            title="Choose a website language"
            currentValue={i18n.language}
            variables={languagesItems}
            onClose={handleToggleModal}
            onSelect={handleSelectLanguage}
          />
        )}
      </AnimatePresence>
    </motion.menu>
  );
};