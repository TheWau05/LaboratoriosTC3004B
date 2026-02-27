import '../ComponentsLAB3/Estilo_humano.css'
import React, { useState } from "react";

export function Form_Humano() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [shakeUser, setShakeUser] = useState(false);
  const [shakePass, setShakePass] = useState(false);
  const [clicked, setClicked] = useState(false);

  const validate = () => {
    let valid = true;

    if (!username) {
      setShakeUser(true);
      valid = false;
      setTimeout(() => setShakeUser(false), 600);
    }

    if (!password) {
      setShakePass(true);
      valid = false;
      setTimeout(() => setShakePass(false), 600);
    }

    return valid;
  };

  const handleClick = () => {
    setClicked(true);
    setTimeout(() => setClicked(false), 200);

    validate();
  };

  return (
    <div className="pagewrap">
      <form className="form">
        <h3 className="form__title">Login</h3>

        <div className="container">
          <input
            className="container__input"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <label
            className={`container__label ${shakeUser ? "shakeit" : ""}`}
          >
            Username
          </label>
        </div>

        <div className="container">
          <input
            className="container__input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <label
            className={`container__label ${shakePass ? "shakeit" : ""}`}
          >
            Password
          </label>
        </div>

        <button
          type="button"
          className={`form__submit ${clicked ? "clicked" : ""}`}
          onClick={handleClick}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
