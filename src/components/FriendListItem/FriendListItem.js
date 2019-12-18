import React from 'react';
import css from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => (
  <li className={css.item}>
    <span className={isOnline ? css.green : css.red}></span>
    <img className={css.avatar} src={avatar} alt="" width="48" />
    <p className={css.name}>{name}</p>
  </li>
);

export default FriendListItem;
