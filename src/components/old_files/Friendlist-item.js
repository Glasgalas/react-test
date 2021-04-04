import React from 'react';
import PropTypes from 'prop-types';
import styles from './Friendlist-item.module.css';

const defaultImage =
  'https://cdn.pixabay.com/photo/2016/08/31/11/55/user-1633250_1280.png';

const FriendListItem = ({ avatar, name, isOnline }) => (
  <li className={styles.friendItem}>
    <span className={isOnline ? styles.online : styles.offline}></span>
    <img className={styles.avatar} src={avatar} alt="avatar" width="48" />
    <p className={styles.name}>{name}</p>
  </li>
);

const FriendList = ({ friends }) => (
  <ul className={styles.friendList}>
    {friends.map(friend => (
      <FriendListItem key={friend.id} {...friend} />
    ))}
  </ul>
);

FriendListItem.defaultProps = {
  avatar: defaultImage,
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
};

FriendList.propTypes = {
  friends: PropTypes.object.isRequired,
};

export default FriendList;
