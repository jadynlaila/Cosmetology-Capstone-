import React, { useState } from "react";
import { Grid, Form, Divider, Button } from "semantic-ui-react";
import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/layout/Navbar";
import NumPad from "../components/layout/numpad";

const login = () => {
  const [pinInput, setPinInput] = useState('')
  return (
    <div id="login">
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
        <input maxlength="4" className="dottedPassword" type="password" value={pinInput} />
      </div>
      <NumPad pinInput={pinInput} setPinInput={setPinInput} />
      </div>
  );
};

export default login;
