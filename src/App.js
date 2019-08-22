import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [users, setUsers] = useState();
  const handleFetchUsers = () => {
    const fetchUsers = async () =>
      await (await fetch("/.netlify/functions/getusers")).json();

    fetchUsers().then(data => {
      setUsers(data);
    });
  };

  useEffect(() => {
    handleFetchUsers();
  });

  console.log(users);

  return (
    <div className="App">
      {users.map(item => (
        <p>{item}</p>
      ))}
    </div>
  );
}

export default App;
