import { createContext, useState } from 'react';
import React from 'react';

// const ColorContext = createContext({color: 'red'})
const ColorContext = createContext({
  state: { color: 'red', subcolor: 'blue' },
  actions: {
    setColor: () => {},
    seySubcolor: () => {},
  },
});

const ColorProvider = ({ children }) => {
  const [color, setColor] = useState('black');
  const [subColor, setSubColor] = useState('red');

  const value = {
    state: { color, subColor },
    actions: { setColor, setSubColor },
  };
  return (
    <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
  );
};
const {Consumer: ColorConsumer} = ColorContext;

export {ColorProvider, ColorConsumer};
export default ColorContext;
