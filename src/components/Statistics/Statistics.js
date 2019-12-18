import React from 'react';
import css from './Statistics.module.css';

const Statistics = ({ title, stats }) => (
  <section className={css.statistics}>
    {title ? <h2 className={css.title}>{title}</h2> : ''}

    <ul className={css.statList}>
      {stats.map(elem => (
        <li className={css.item} key={elem.id}>
          <span className={css.label}>{elem.label}</span>
          <span className={css.percentage}>{elem.percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);

export default Statistics;
