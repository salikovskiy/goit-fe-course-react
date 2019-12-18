import React from 'react';
import css from './Profile.module.css';

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
