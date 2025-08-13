import React , {useEffect , useState} from 'react';
// 1. 커스텀 훅스 불러오기
import useInputs from './useInputs';
const InfoCustomHookSample = () => {
  // useState형식
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');

  // 2. 커스텀 훅스를 이용한 같은 기능 구현
  const[state, onChange] = useInputs({
    name : "",
    email : "",
  });

  // 3.
  const {name , email} = state;


  // useEffect {}-> 실행할 함수
  // useEffect(() => {
  //   console.log("렌더링 완료");
  //   console.log({name, email});
  //   // 뒷정리 함수 추가
  //   return () => {
  //     console.log("뒷정리 함수 호출 되었습니다.");
  //     console.log(name);
  //   }
  // } , [email]);

  // 화면의 input 태그에서 값의 변경이 일어날때마다 state의 값을 변경해주는
  // onChangeXXX 이벤트 핸들러 추가하기
  // const onChangeName = e => {
  //   setName(e.target.value);
  // }
  //
  // const onChangeEmail = e => {
  //   setEmail(e.target.value);
  // }

  return (
    <div>
      <div>
        <input name = "name" value={name} onChange={onChange} type="text" />
        <input name = "email" value={email} onChange={onChange} type="text" />
      </div>
      <div>
        <b>이름 : </b> {name}

        <b>이메일 : </b>{email}
      </div>
    </div>
  );
};

export default InfoCustomHookSample;