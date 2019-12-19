import React from 'react';
import css from './Profile.module.css';
import PropTypes from 'prop-types';

const Profile = ({ data }) => {
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img
          src={data.avatar}
          alt="user avatar"
          className={css.avatar}
          width="150"
        />
        <p className={css.name}>{data.name}</p>
        <p className={css.tag}>@{data.tag}</p>
        <p className={css.location}>{data.location}</p>
      </div>

      <ul className={css.stats}>
        <li>
          <span className={css.label}>Followers</span>
          <span className={css.quantitu}>{data.stats.followers}</span>
        </li>
        <li>
          <span className={css.label}>Views</span>
          <span className={css.quantitu}>{data.stats.views}</span>
        </li>
        <li>
          <span className={css.label}>Likes</span>
          <span className={css.quantitu}>{data.stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;

Profile.propTypes = {
  user: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }),
  }),
};
