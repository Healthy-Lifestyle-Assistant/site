import { FC, useState } from 'react';
import './BurgerMenu.scss';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { AnimatePresence, motion } from 'framer-motion';
import { BurgerMenuModal } from '@components/BurgerMenuModal';
import { BurgerMenuItem } from '@components/BurgerMenu/BurgerMenuItem';
import { BurgerMenuOption } from '@components/BurgerMenu/BurgerMenuOption';
import { Languages } from '@/types/Languages';

interface BurgerMenuProps {
  onClick: () => void;
}

export const BurgerMenu: FC<BurgerMenuProps> = ({ onClick }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { t, i18n } = useTranslation('home');
  const { pathname } = useLocation();

  const navigation = [
    { title: t('header.navigation.home'), to: '/' },
    { title: t('header.navigation.about'), to: '/about' },
    { title: t('header.navigation.services'), to: '/services' },
    { title: t('header.navigation.team'), to: '/team' },
    { title: t('header.navigation.contact'), to: '/contact-us' }
  ];

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
        {navigation.map(({ title, to }) => (
          <BurgerMenuItem
            key={title}
            title={title}
            to={to}
            isSelected={to === pathname}
            onClick={onClick}
          />
        ))}
        <BurgerMenuOption
          title={t('header.navigation.languages')}
          isOpen={isOpen}
          onClick={handleToggleModal}
        />
      </ul>
      <AnimatePresence>
        {isOpen && (
          <BurgerMenuModal
            title={t('header.langs.names.frame')}
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