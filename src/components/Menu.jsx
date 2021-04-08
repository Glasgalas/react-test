import React from 'react';
import { Router, Link } from '@reach/router';

import Phonebook from '../components/Phonebook';
import Statistics from './old_files/Statistics';
import Game from './Game';
import Search from './Search';
import Loading from './Loading/Loading';

import statisticalData from './old_files/stats.json';
import styles from '../App.css';

const Menu = () => {
  return (
    <>
      <nav className={styles.menu}>
        <Link to="/">Задание 1 - Телефонная книга</Link>
        <Link to="task2">Задание 2 - Секция статистики</Link>
        <Link to="task3">Задание 3 - Крестики Нолики</Link>
        <Link to="task4">Задание 4 - Поиск</Link>
        <Link to="task5">Задание 5 - Загрузка</Link>
      </nav>
      <Router>
        <Task1 path="/" />
        <Task2 path="/task2" />
        <Task3 path="/task3" />
        <Task4 path="/task4" />
        <Task5 path="/task5" />
      </Router>
    </>
  );
};

const Task1 = () => <Phonebook />;
const Task2 = () => <Statistics stats={statisticalData} />;
const Task3 = () => <Game />;
const Task4 = () => <Search />;
const Task5 = () => <Loading />;

export default Menu;
