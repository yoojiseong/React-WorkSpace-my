import './App.css'
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Profile from './pages/Profile.jsx';
import Articles from './pages/Articles.jsx';
import Article from './pages/Article.jsx';
function App() {


  return (
    <>
      <h1 className="react">ch13, 리액트 라우팅</h1>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/profile/:username" element={<Profile />} />
      {/* :username => <Profile />로 파라미터 정보 전달*/}

      {/*기본 라우팅*/}
      {/*<Route path="/articles" element={<Articles />} />*/}
      {/*<Route path="/article/:id" element={<Article />} />*/}

      {/*중첩 라우팅 => 라우팅 안에 라우팅 추가하기*/}
      <Route path="/articles" element={<Articles />} >
        {/*children자리에 중첩 라우팅 위치하고 있음*/}
        <Route path=":id" element={<Article />} />
      </Route>
    </Routes>
    </>
  )
}

export default App
