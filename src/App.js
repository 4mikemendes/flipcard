import './App.css';
import Card from "./components/Card.js"
import React, {useState} from 'react';

function App() {
  const [kwestion, setKwestion] = useState({
    question: true
  })

  function toggle () {
    setKwestion(prevkwestion => ({
      question: !prevkwestion.question
    }))
  }
  return (
    <div className="App">
     <Card doYouKnow={kwestion.question} handleClick={toggle}/>
    </div>
  );
}

export default App;