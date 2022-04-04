import React, { useState } from "react";
import { Grid, Form, Divider, Button } from "semantic-ui-react";
import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/layout/Navbar";
import NumPad from "../components/layout/numpad";

const login = () => {
  const [pinInput, setPinInput] = useState('')
  return (
    <>
      <Navbar />
      {/* <Form>
      </Form> */}
      <div id="input-field">
        <div class="confirmation-dots">
          <svg>
            <g>
              <circle class="pin-circle" cx="10" cy="10" r="8"></circle>
              <circle class="pin-circle" cx="50" cy="10" r="8"></circle>
              <circle class="pin-circle" cx="90" cy="10" r="8"></circle>
              <circle class="pin-circle" cx="130" cy="10" r="8"></circle>
            </g>
          </svg>
        </div>
        <input className="dottedPassword" type="password" value={pinInput} />
        <div id="button-backspace" onClick={() => setPinInput((prev) => prev.substring(0, prev.length - 1))}><i class="angle left icon"></i></div>
      </div>
      <NumPad pinInput={pinInput} setPinInput={setPinInput} />
    </>
  );
};

export default login;
