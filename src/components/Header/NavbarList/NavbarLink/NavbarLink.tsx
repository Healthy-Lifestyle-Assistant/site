import { FC } from 'react';
import './NavbarLink.scss';
import { NavLink, useLocation } from 'react-router-dom';
import classNames from 'classnames';
import { motion } from 'framer-motion';

interface NavbarLinkProps {
  title: string;
  to: string;
}

export const NavbarLink: FC<NavbarLinkProps> = ({ title, to }) => {
  const { pathname } = useLocation();
  return (
    <NavLink
      className={({ isActive }) => classNames(
        'NavbarLink',
        { 'NavbarLink--active': isActive }
      )}
      to={to}
    >
      {title}
      {pathname === to && (<motion.div className="NavbarLink__background" layoutId="NavbarLink_underline" />)}
    </NavLink>
  );
};