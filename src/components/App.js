import React, { useState } from 'react'

function App(){
  const[inp1,setInp1] = useState('')
  const[inp2,setInp2] = useState('')

  const[result,setResult] = useState()


  function myfun1(e){
    setInp1(e.target.value)
  }

  function myfun2(e){
    setInp2(e.target.value)
  }


  function myfunction(){
    const trimmedName1 = inp1.replace(/ /g, '').toUpperCase();
    const trimmedName2 = inp2.replace(/ /g, '').toUpperCase();

    console.log(trimmedName1)
    
    const uniqueCharsName1 = trimmedName1.split()
    
    const uniqueCharsName2 = trimmedName2.split()

    const remainingCharsName1 = uniqueCharsName1.filter(char => !uniqueCharsName2.includes(char));
    const remainingCharsName2 = uniqueCharsName2.filter(char => !uniqueCharsName1.includes(char));

    const combinedLength = remainingCharsName1.length + remainingCharsName2.length;
    const resultIndex = combinedLength % 6;

    const relationships = ["Siblings", "Friends", "Love", "Affection", "Marriage", "Enemy"];
    setResult(relationships[resultIndex]);
  }

  function Clear(){
    setInp1('')
    setInp2('')
    setResult('')
  }

  return(
    <div>
      <input data-testid="input1"  onChange={myfun1} value={inp1}  type="text" placeholder='Enter first name'/>
      <input data-testid="input2" onChange={myfun2} value={inp2} type="text" placeholder='Enter second name'/>
      <button data-testid="calculate_relationship" onClick={myfunction}>Calculate Realationship Future</button>
      <button data-testid="clear" onClick={Clear}>Clear</button>
      <h3 data-testid="answer">{result}</h3>
    </div>
  )
}

export default App;