import React from "react";

const NumPad = ({ setPinInput}) => {
  return (
    <>
    <div className="numpad">
      <div class="button" onClick={() => setPinInput((prev) => prev + '1')}  accessKey="1">1</div>
      <div class="button" onClick={() => setPinInput((prev) => prev + '2')} accessKey="2">2</div>
      <div class="button" onClick={() => setPinInput((prev) => prev + '3')} accessKey="3">3</div>
      <div class="button" onClick={() => setPinInput((prev) => prev + '4')} accessKey="4">4</div>
      <div class="button" onClick={() => setPinInput((prev) => prev + '5')} accessKey="5">5</div>
      <div class="button" onClick={() => setPinInput((prev) => prev + '6')} accessKey="6">6</div>
      <div class="button" onClick={() => setPinInput((prev) => prev + '7')} accessKey="7">7</div>
      <div class="button" onClick={() => setPinInput((prev) => prev + '8')} accessKey="8">8</div>
      <div class="button" onClick={() => setPinInput((prev) => prev + '9')} accessKey="9">9</div>
      <div class="button" accessKey=""></div>
      <div class="button" onClick={() => setPinInput((prev) => prev + '0')} accessKey="0">0</div>
      <div class="button" onClick={() => setPinInput((prev) => prev.substring(0, prev.length-1))}><i class="angle left icon"></i></div>
    </div>
    </>
  );
};

export default NumPad;
