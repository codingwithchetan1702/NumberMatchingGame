import React, { useState } from "react";

function Second() {
    const [selectedNumber, setSelectedNumber] = useState(null);
    const [randomNumber, setRandomNumber] = useState(null);
    const [result, setResult] = useState('');
    const [alert, setAlert] = useState('');

    const handleNumberClick = (number) => {
      setSelectedNumber(number);
    };

    const handleClear = () => {
        setSelectedNumber('');
        setResult('');
    };
  
    const generateRandomNumber = () => {
      const number = Math.floor(Math.random() * 4) + 1; // Generates a random number between 1 and 10
      setRandomNumber(number);
      if (number === selectedNumber) {
        setResult('Congratulations! You guessed the correct number.');
        setAlert("alert alert-success m-2");
      } else {
        setResult(`Sorry, you guessed wrong. The correct number was ${number}.`);
        setSelectedNumber('');
        setAlert("alert alert-danger m-2");
      }
    };
  
    return (
      <div>
        {result && 
        <div class={alert} role="alert">
        <button onClick={handleClear} className="m-4 btn btn-secondary">Clear</button>
        {result}
        </div>
        }   
        <h2>You Select : {selectedNumber}</h2>
        <div className="card" style={{width: "32rem"}}>
          {Array.from({ length: 4 }, (_, i) => i + 1).map((number) => (
            <button
              key={number}
              onClick={() => handleNumberClick(number)}
              style={{
                margin: '5px',
                backgroundColor: selectedNumber === number ? 'lightblue' : 'white',
              }}
            >
              {number}
            </button>
          ))}
        <button className="btn btn-success" onClick={generateRandomNumber} disabled={selectedNumber === null}>
          Generate Random Number
        </button>
        </div>
      </div>
    );
  };
  

export default Second;
