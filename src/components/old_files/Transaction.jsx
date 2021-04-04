import React from 'react';
import styles from './Transaction.module.css';

const TransactionTable = ({ transaction }) => (
  <table className={styles.transaction}>
    <thead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>

    <tbody>
      {transaction.map(item => (
        <TransactionItem key={item.id} {...item} />
      ))}
    </tbody>
  </table>
);

const TransactionItem = ({ type, amount, currency }) => (
  <tr>
    <td>{type}</td>
    <td>{amount}</td>
    <td>{currency}</td>
  </tr>
);

export default TransactionTable;
