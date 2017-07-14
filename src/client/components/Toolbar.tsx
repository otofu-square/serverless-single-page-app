import * as React from 'react';

const Toolbar = () =>
  <div className="nav-container no-select fixed-top u-full-width">
    <ul className="inline-list hover-links nav-list six columns">
      <li>
        <a href="#" className="text-lg">
          LearnJS
        </a>
      </li>
      <li>
        <a href="#/problem/1">Start</a>
      </li>
    </ul>
  </div>;

export default Toolbar;
