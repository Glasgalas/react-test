import React from 'react';
import { Router, Link } from '@reach/router';

import Phonebook from '../components/Phonebook';

import styles from '../App.css';

const Menu = () => {
  return (
    <>
      <nav className={styles.menu}>
        <Link to="/">Задание 2 - Телефонная книга</Link>
      </nav>
      <Router>
        <Task1 path="/" />
      </Router>
    </>
  );
};

const Task1 = () => <Phonebook />;

export default Menu;
