import {Link} from 'react-router-dom'
import React from 'react';

const Home = () => {
  return (
    <div>
      <h1>홈 화면</h1>
      <ul>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to="/profile/ujs">ujs의 프로필</Link>
        </li>
        <li>
          <Link to="/profile/ujs2">ujs2의 프로필</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;