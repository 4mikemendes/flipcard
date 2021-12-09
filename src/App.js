
import './App.css';
import Card from "./components/Card.js"
import React, {useState} from 'react';
import word from "./word.js"

function App() {

  const [word, setWord] = useState({
    kor: "",
    eng: ""
  })
  const wordElement = word.map(word => (
    <Card doYouKnow={word.kor} handleClick={toggle}/>
    ))
  function toggle () {
    setWord(prevWord => ({
      kor: prevWord.eng 
    }))
  }
  return (
    <div className="App">
    {wordElement}  
  </div>
  );
}

export default App;
