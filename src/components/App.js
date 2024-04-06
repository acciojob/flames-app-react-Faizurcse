import React, { useState } from "react";
import "../styles/App.css";

const App = () => {
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [relationship, setRelationship] = useState("");

  const handleName1Change = (e) => {
    setName1(e.target.value);
  };

  const handleName2Change = (e) => {
    setName2(e.target.value);
  };

  const calculateRelationship = () => {
    let name1Letters = name1.split("");
    let name2Letters = name2.split("");

    // Remove common letters
    name1Letters = name1Letters.filter(
      (letter) => !name2Letters.includes(letter)
    );
    name2Letters = name2Letters.filter(
      (letter) => !name1Letters.includes(letter)
    );

    // Calculate sum of remaining letters' lengths
    const sum = name1Letters.length + name2Letters.length;

    // Determine relationship status based on sum modulus 6
    const relationshipStatus = sum % 6;

    switch (relationshipStatus) {
      case 1:
        setRelationship("Friends");
        break;
      case 2:
        setRelationship("Love");
        break;
      case 3:
        setRelationship("Affection");
        break;
      case 4:
        setRelationship("Marriage");
        break;
      case 5:
        setRelationship("Enemy");
        break;
      case 0:
        setRelationship("Siblings");
        break;
      default:
        setRelationship("Please enter valid input");
    }
  };

  const clearForm = () => {
    setName1("");
    setName2("");
    setRelationship("");
  };

  return (
    <div id="main">
      <input
        type="text"
        value={name1}
        onChange={handleName1Change}
        data-testid="input1"
      />
      <input
        type="text"
        value={name2}
        onChange={handleName2Change}
        data-testid="input2"
      />
      <button onClick={calculateRelationship} data-testid="calculate_relationship">
        Calculate
      </button>
      <button onClick={clearForm} data-testid="clear">
        Clear
      </button>
      <h3 data-testid="answer">{relationship}</h3>
    </div>
  );
};

export default App;
