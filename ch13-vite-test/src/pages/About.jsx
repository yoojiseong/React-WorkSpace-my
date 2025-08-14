// import React from 'react';
// import { useLocation } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';

const About = () => {
  // const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const detail = searchParams.get('detail');
  const mode = searchParams.get('mode');

  const onToggleDetails = () => {
    setSearchParams({
      name, detail: detail === 'true' ? false : true
    })
  }


  const onIncreaseMod = () => {
    const nextMode = mode === null ? 1 : parseInt(mode) +1;
    setSearchParams({mode: nextMode, detail});
  }
  return (
    <div>
      <h1>About 화면</h1>
      {/*<p>쿼리스트링 : {location.search}</p>*/}
      <p>detail : {detail}</p>
      <p>mode : {mode}</p>
      <button onClick={onToggleDetails}>Toggle Details</button>
      <button onClick={onIncreaseMod}>Increase Mode</button>

    </div>
  );
};

export default About;
