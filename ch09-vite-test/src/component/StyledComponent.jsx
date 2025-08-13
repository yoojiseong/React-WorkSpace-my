import React from 'react';
import styled, {css} from 'styled-components';
// 따로 css, scss 파일 없이 해당 컴포넌트 내부에서 한 번에 작업을 같이 할 수 잇다.

const Box = styled.div`
    // 부모로부터 전달 받은 props로 이용하기
  background: ${props=>props.color || 'red'};
  padding: 1rem;
  display: flex;
` ;

const Button = styled.button`
    
`


const StyledComponent = () => {
<Box color="black">
  <Button>Hello</Button>
  <Button>눌러주세요</Button>

</Box>
};

export default StyledComponent;