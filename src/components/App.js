import './../styles/App.css';

import React, { useState, useEffect } from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  const [count, setCount] = useState(0);
  const [inputText, setInputText] = useState('');

  // Function to handle adding a new todo
  const addTodo = () => {
    setTodos([...todos, 'New todo']);
  };

  // Function to handle incrementing the count
  const incrementCount = () => {
    setCount(count + 1);
  };

  // Function to handle adding an item to the memo list
  const addItem = () => {
    if (inputText.length > 5) {
      setTodos([...todos, inputText]);
      setInputText(''); // Clear the input field after adding
    }
  };

  useEffect(() => {
    // You can use the useEffect hook to perform side effects if needed
    // For example, you can log the state whenever it changes
    console.log('Updated todos:', todos);
  }, [todos]);

  return (
    <div className="memo-app">
      <h1>Memo</h1>

      <div className="actions">
        <button onClick={addTodo}>Add Todo</button>
        <button onClick={incrementCount}>Increment ({count})</button>
      </div>

      <div className="memo-input">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button onClick={addItem}>Submit</button>
      </div>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
