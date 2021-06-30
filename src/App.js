import { useState, useEffect } from "react";
import Header1 from "./components/Header/Header1"; 
import Header2 from "./components/Header/Header2";

export default function App() {
  const [size, setSize] = useState({
    x: window.innerWidth,
    y: window.innerHeight
  });
  const updateSize = () =>
    setSize({
      x: window.innerWidth,
      y: window.innerHeight
    });
  useEffect(() => (window.onresize = updateSize), []);
  return (
    <>
      <p>width is : {size.x}</p>
      <p>height is : {size.y}</p>
      {
        size.x <= 500 && <h2>ami 500</h2> || size.x <= 700 && <h1>ani 700</h1> || size.x <= 1000 && <h1>ami 1000</h1>
      }
      {
        size.x <= 500 ?
      <Header2></Header2> :
      <Header1></Header1>
    }
    <h2>ljfsldjfklsdjflsdjfklsd </h2>
    </>
  );
}
