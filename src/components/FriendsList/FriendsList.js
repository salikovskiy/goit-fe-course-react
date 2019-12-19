import React from 'react';
import FriendListItem from '../FriendListItem/FriendListItem';
import css from './FriendsList.module.css';

import PropTypes from 'prop-types';

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

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};

export default FriendsList;
