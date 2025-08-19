import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Profile from './pages/Profile.jsx';
import Articles from './pages/Articles.jsx';
import Article from './pages/Article.jsx';
import Layout from './layout/Layout.jsx';
import NotFound from './pages/NonFound.jsx';
import MyPage from './pages/MyPage.jsx';
import Login from './pages/Login.jsx';
function App() {
  return (
    <>
      <h1 className="react">ch13, 리액트 라우팅</h1>
      <Routes>
        {/*Layout 컴포넌트로 감싸기*/}
        <Route path="/" element={<Layout />}>
          {/*<Route path="/" element={<Home />} />*/}
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile/:username" element={<Profile />} />
          {/* :username => <Profile />로 파라미터 정보 전달*/}
          {/*기본 라우팅*/}
          {/*<Route path="/articles" element={<Articles />} />*/}
          {/*<Route path="/article/:id" element={<Article />} />*/}
          {/*중첩 라우팅 => 라우팅 안에 라우팅 추가하기*/}
          {/*Layout 컴포넌트로 감싸기*/}
        </Route>
        <Route path="/articles" element={<Articles />}>
          {/*children자리에 중첩 라우팅 위치하고 있음*/}
          <Route path=":id" element={<Article />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/mypage" element={<MyPage />} />
        {/** =>  아무 텍스트나 매칭하고, 이 라우트에서 맨 마지막에 위치함*/}
        {/*상위 모든 경로를 찾다가 없으면 이 구문으로 온다*/}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
