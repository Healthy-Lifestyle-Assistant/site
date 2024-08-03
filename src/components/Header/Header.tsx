import { FC, useEffect, useState } from 'react';
import './Header.scss';
import { AnimatePresence } from 'framer-motion';
import { NavbarList } from '@components/Header/NavbarList';
import { MenuToggler } from '@components/Header/MenuToggler';
import { LanguagesList } from '@components/LanguagesList';
import { BurgerMenu } from '@components/BurgerMenu';

export const Header: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleToggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const bodyEl = document.querySelector('body') as HTMLElement;
    if (isOpen) {
      bodyEl.style.overflow = 'hidden';
    } else {
      bodyEl.style.overflow = 'visible';
    }
  }, [isOpen]);

  return (
    <>
      <header className="Header">
        <h2 className="Header__title">NovaServe</h2>
        <NavbarList />
        <MenuToggler isOpen={isOpen} onClick={handleToggleMenu} />
        <LanguagesList />
      </header>
      <AnimatePresence>
        {isOpen && (<BurgerMenu onClick={handleToggleMenu} />)}
      </AnimatePresence>
    </>
  );
};