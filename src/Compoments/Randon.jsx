import React, { useState } from "react";

function Randon() {
  const [selectedNumber, setSelectedNumber] = useState(null);
  const [randomNumber, setRandomNumber] = useState(null);
  const [result, setResult] = useState("");
//   const [display, setDisplay] = useState(second)

//   const handleClick = (value) => {
//     setDisplay(display + value);
//   };


  const handleNumberChange = (event) => {
    setSelectedNumber(Number(event.target.value));
  };

  const generateRandomNumber = () => {
    const number = Math.floor(Math.random() * 4) + 1; // Generates a random number between 1 and 10
    setRandomNumber(number);
    if (number === selectedNumber) {
      setResult("Congratulations! You guessed the correct number.");
    } else {
      setResult(`Sorry, you guessed wrong. The correct number was ${number}.`);
    }
  };

  return (
    <div>
      <label>Select a number between 1 and 4:</label>
      <select value={selectedNumber || ""} onChange={handleNumberChange}>
        <option value="" disabled>
          Select a number
        </option>
        {Array.from({ length: 4 }, (_, i) => i + 1).map((number) => (
          <option key={number} value={number}>
            {number}
          </option>
        ))}
      </select>
      <br></br>
      <hr />
      <button onClick={generateRandomNumber} disabled={selectedNumber === null}>
        Generate Random Number
      </button>
      {result && <p>{result}</p>}
    </div>
  );
}

export default Randon;
