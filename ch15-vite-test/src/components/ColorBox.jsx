import React, { useContext } from 'react';
// 전역 저장소
import ColorContext, { ColorConsumer } from '../contexts/color.jsx';

const ColorBox = () => {

  // 방법3, 가져오기
  const {state}= useContext(ColorContext);

  return (
    // 전역 저장소에서 불러와 사용하기. <ColorContext.Consumer>
    <div>
      {/*<ColorContext.Consumer>*/}
      <ColorConsumer>
        {(value) => (
          <>
            <div
              style={{
                width: '64px',
                height: '64px',
                backgroundColor: value.state.color,
              }}
            />
            <div
              style={{
                width: '32px',
                height: '32px',
                backgroundColor: value.state.subColor,
              }}
            />
          </>
        )}
        {/*</ColorContext.Consumer>*/}
      </ColorConsumer>
    </div>
  );
};

export default ColorBox;
