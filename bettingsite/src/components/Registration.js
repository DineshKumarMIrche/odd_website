import React, { useState } from "react";

const Registration = () => {
  const [username, setUsername] = useState("");
  const [requiredCoins, setRequiredCoins] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleRequiredCoinsChange = (event) => {
    setRequiredCoins(event.target.value);
  };


  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitting form with username:", username, "requiredCoins:", requiredCoins, "password:", password);
  };

  return (
    <div className="container">
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="Username">Username</label>
          <input
            type="Username"
            className="form-control"
            id="Username"
            placeholder="Enter Username"
            value={username}
            onChange={handleUsernameChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="requiredCoins">Required Coins</label>
          <input
            type="requiredCoins"
            className="form-control"
            id="requiredCoins"
            placeholder="Enter Required Coins"
            value={requiredCoins}
            onChange={handleRequiredCoinsChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Register
        </button>
      </form>
    </div>
  );
};

export default Registration;
