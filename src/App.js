import React, { useState } from 'react';
import './App.css';
import Display from './components/display';
import Form from './components/form';

function App() {
  const [list, setList] = useState([
    {theList: "take trash out", isComplete: false},
    {theList: "take trash out", isComplete: true},
    {theList: "take trash out", isComplete: false}]);
  

  const addToList = (newItem) => {
    setList([...list, {theList: newItem, isComplete: false}]);
  }



  return (
    <div className="App">
      <Form addToList ={addToList}/>
      <Display list = {list} setList = {setList}/>
    </div>
  );
}

export default App;
