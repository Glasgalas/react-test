import React from "react";

const FriendListItem = ({ avatar, name, isOnline }) => (
  <li className="item">
    <span className={"online" + `${isOnline}`}></span>
    <img
      className="avatar"
      src={avatar}
      alt={"avatar " + `${name}`}
      width="48"
    />
    <p className="name">{name}</p>
  </li>
);

const FriendList = ({ friends }) => (
  <ul className="friend-list">
    {friends.map((friend) => (
      <FriendListItem key={friend.id} {...friend} />
    ))}
  </ul>
);

export default FriendList;
