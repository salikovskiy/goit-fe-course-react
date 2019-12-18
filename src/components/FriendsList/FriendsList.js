import React from 'react';
import FriendListItem from '../FriendListItem/FriendListItem';
import css from './FriendsList.module.css';

const FriendsList = ({ friends }) => (
  <ul className={css.friendList}>
    {friends.map(elem => (
      <FriendListItem
        key={elem.id}
        avatar={elem.avatar}
        name={elem.name}
        isOnline={elem.isOnline}
      />
    ))}
  </ul>
);

export default FriendsList;
