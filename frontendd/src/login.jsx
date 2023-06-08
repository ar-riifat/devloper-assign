import React, { useState } from 'react';


const App = () => {
  const [FName, setFName] = useState('');
  const [LName, setLName] = useState('');
  const [fullName, setFullName] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'FName') {
      setFName(value);
    } else if (name === 'LName') {
      setLName(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // const fullName = FName + LName;
    setFullName(fullName);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            name="FName"
            value={FName}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Last Name:
          <input
            type="text"
            name="LName"
            value={LName}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      <div>
        <h2>Full Name: {fullName}</h2>
      </div>
    </div>
  );
};

export default App;
