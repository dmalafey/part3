import React, { useState } from 'react';

import './App.css';
import Person from './components/Person';

const App = () => {
  const [personsState, setPerson] = useState({
    persons:
          [
            { name: 'Max', age: 28 },
            { name: 'Manu', age: 29 },
            { name: 'Stephanie', age: 26 },
          ],
  });
  const switchNameHandler = (newName) => {
    setPerson({
      persons:
      [
        { name: newName, age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 },
      ],
    });
  };
  const nameChangedHandler = (event) => {
    setPerson({
      persons:
      [
        { name: 'Max', age: 28 },
        { name: event.target.value, age: 29 },
        { name: 'Stephanie', age: 26 },
      ],
    });
  };
  const style = {
    backgroundColor: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer',
  };

  return (
    <div className="App">
      <h1>Hi, I&#39;m a React App</h1>
      <p>This is really working!</p>
      <button
        type="button"
        style={style}
        onClick={() => switchNameHandler('Maximilian!!')}
      >
                Switch Name
      </button>
      <Person
        {...personsState.persons[0]}
      />
      <Person
        {...personsState.persons[1]}
        click={() => { switchNameHandler('Max!'); }}
        changed={nameChangedHandler}
      >
My Hobbies: Racing
      </Person>
      <Person
        {...personsState.persons[2]}
      />
    </div>
  );
};

export default App;
