import React from 'react';

import Profile from './Profile';
import Statistics from './Statistics';
import FriendList from './Friendlist-item';
import TransactionTable from './Transaction';

import user from '../user.json';
import statisticalData from '../statistical-data.json';
import friends from '../friends.json';
import transaction from '../transactions.json';

const Content = () => {
  const { pathname } = window.location;

  return (
    <div className="content">
      {pathname === '/task1' && <Profile {...user} />}
      {pathname === '/task2' && <Statistics stats={statisticalData} />}
      {pathname === '/task3' && <FriendList friends={friends} />}
      {pathname === '/task4' && <TransactionTable transaction={transaction} />}
    </div>
  );
};

export default Content;
