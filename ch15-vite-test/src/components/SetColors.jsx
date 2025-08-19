import React from 'react';
import { ColorConsumer } from '../contexts/color.jsx';

const colors=['red', 'green', 'blue', 'yellow','orange','indigo','purple','pink','violet'];

const SetColors = () => {
  return (
    <div>
      <h2>색상을 선택하세요</h2>
      <ColorConsumer>
        {({ actions }) => (
          <div style={{ display:'flex'}}>
            {colors.map((color) => (
              <div
                key={color}
                style={{
                background: color,
                width: '30px',
                height: '30px',
                cursor: 'pointer',
              }}
                //좌클릭
                onClick={() => actions.setColor(color)}
                // 우클릭
                onContextMenu={e =>
                {
                  e.preventDefault();
                  actions.setSubColor(color)}
                }
              />
            ))}
          </div>
        )}
      </ColorConsumer>
    </div>
  );
};

export default SetColors;