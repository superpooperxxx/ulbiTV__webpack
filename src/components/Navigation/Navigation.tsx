import React from 'react'
import cn from '../../helpers/classnames';
import { Link } from 'react-router-dom';

import styles from './Navigation.module.scss';
import { useTheme } from '../../hooks/useTheme';

export const Navigation = () => {
  const { theme } = useTheme();

  return (
    <nav className={cn(`${styles['navigation']}`, theme, [], () => {}, {
      'conditional': true,
    })}>
      <Link to="/" className={styles['navigation__link']}>Home</Link>
      <Link to="/about" className={styles['navigation__link']}>About</Link>
    </nav>
  )
}
