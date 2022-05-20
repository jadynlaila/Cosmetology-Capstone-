import { type } from "language-tags";
import React from "react";


const NumPad = ({ setPinInput }) => {
  // const typeChar = async () => {
  //   let typed = jsdom.getElementById('pinInput').textContent 
  //   character += typed
  //   console.log(typed, character);
  //   const character = await element.evaluate(el => el.textContent, element);
  // }
  return (
    <>






      <div className="container">
        <div className="numpad">
          <div className="button" onClick={() => setPinInput((prev) => prev + '1')} accessKey="1">1</div>
          <div className="button" onClick={() => setPinInput((prev) => prev + '2')} accessKey="2">2</div>
          <div className="button" onClick={() => setPinInput((prev) => prev + '3')} accessKey="3">3</div>
          <div className="button" onClick={() => setPinInput((prev) => prev + '4')} accessKey="4">4</div>
          <div className="button" onClick={() => setPinInput((prev) => prev + '5')} accessKey="5">5</div>
          <div className="button" onClick={() => setPinInput((prev) => prev + '6')} accessKey="6">6</div>
          <div className="button" onClick={() => setPinInput((prev) => prev + '7')} accessKey="7">7</div>
          <div className="button" onClick={() => setPinInput((prev) => prev + '8')} accessKey="8">8</div>
          <div className="button" onClick={() => setPinInput((prev) => prev + '9')} accessKey="9">9</div>
          <div id="disapear" className="button disapear" ></div>
          <div className="button" onClick={() => setPinInput((prev) => prev + '0')} accessKey="0">0</div>
          <div id="disapear" className="button disapear" ></div>
        </div>
      </div>
    </>
  );
};

export default NumPad;
