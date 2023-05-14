import React, { useState, useEffect } from 'react';

function Dashboard() {
  const [lastLogin, setLastLogin] = useState('');
  const [walletAmount, setWalletAmount] = useState(0);
  const [username, setUsername] = useState('');

  useEffect(() => {
    // fetch user data from API and update state
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
      const data = await response.json();
      setLastLogin(new Date().toLocaleString());
      setWalletAmount(1000);
      setUsername(data.username);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChangePassword = () => {
    // logic to handle change password functionality
  };

  return (
    <div>
      <h1>Welcome back, {username}!</h1>
      <p>Last login: {lastLogin}</p>
      <p>Wallet amount: {walletAmount}</p>
      <button onClick={handleChangePassword}>Change Password</button>
    </div>
  );
}

export default Dashboard;
