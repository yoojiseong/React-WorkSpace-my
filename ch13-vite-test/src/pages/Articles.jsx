import React from 'react';
// 중첩 라우팅을 위해 => Outlet 컴포넌트 이용
// import { Link , Outlet } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import ArticleItem from './ArticleItem.jsx';

const Articles = () => {

  // 샘플 css
  const activeStyle = {
    color : 'green',
    fontSize: '21px',
  };
  return (
    <div>
      {/*중첩 라우팅 적용하기*/}
      <Outlet />

      <ul>
        <ArticleItem id={1}/>
        <ArticleItem id={2}/>
        <ArticleItem id={3}/>
      </ul>
    </div>
  );
};

export default Articles;