import {Link} from 'react-router-dom'
import React from 'react';

const Home = () => {
  return (
    <div>
      <h1>홈 화면</h1>
      <Link to="/about">소개</Link>
    </div>
  );
};

export default Home;