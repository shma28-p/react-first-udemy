import React, { useEffect, useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  const [num, setNum] = useState(0);
  const [faceShowFlag, setShowFlag] = useState(true);

  const onClickButton = () => {
    setNum(num + 1);
  };
  const switchFlag = () => {
    setShowFlag(!faceShowFlag);
  };

  useEffect(() => {
    if (num % 3 == 0) {
      faceShowFlag || setShowFlag(true);
    } else {
      faceShowFlag && setShowFlag(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [num]);

  return (
    <>
      <h1>hello</h1>
      <ColorfulMessage color="blue">nice to meet you?</ColorfulMessage>
      <ColorfulMessage color="pink">i'm fine</ColorfulMessage>
      <button onClick={onClickButton}>push</button>
      <button onClick={switchFlag}>ONOFF</button>
      <p>{num}</p>
      <p>{faceShowFlag && "(/・ω・)/"}</p>
    </>
  );
};

export default App;
