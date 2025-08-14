import React from 'react';
import {useParams} from 'react-router-dom';

const data ={
  ujs : {
    name : '유지성',
    description : '집가서 뭐하지?',
  },
  ujs2 : {
    name : '유지성2',
    description : '게임하고 싶다',
  },
}

const Profile = () => {
  // App.jsx에서 설정한 :username( 파라미터 객체)의 키 값을 이용하여 정보를 가져옴
  // params : 키 값
  const params = useParams();
  const profile = data[params.username];

  return (
    <div>
      <h1>사용자 프로필</h1>
      {profile ? (
        <div>
          <h2>{profile.name}</h2>
          <p>{profile.description}</p>
        </div>
      ) : (
        <p>존재하지 않는 프로필입니다.</p>
      )
      }
    </div>
  );
};

export default Profile;