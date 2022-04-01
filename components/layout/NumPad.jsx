import React from "react";

const NumPad = () => {
  return (
    <>
      <div className="container">
        <div>
          <input className="password" type="password" name="Clock-in" id="ClockIn" />
        </div>
        <div className="numpad">
          <div class="button">1</div>
          <div class="button">2</div>
          <div class="button">3</div>
          <div class="button">4</div>
          <div class="button">5</div>
          <div class="button">6</div>
          <div class="button">7</div>
          <div class="button">8</div>
          <div class="button">9</div>
          <div id="disabled" class="button"></div>
          <div class="button">0</div>
          <div class="button"><i class="angle left icon"></i></div>
        </div>
      </div>
    </>
  );
};

export default NumPad;
