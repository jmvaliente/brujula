import React, { useState } from 'react'
import './App.css';
import List from './components/List'
import Controls from './components/Controls'

function App() {

  const [stateList, setstateList] = useState([])
  const [stateHistory, setstateHistory] = useState([])

  return (
    <div className="App">
      <header className="App-header">
        <div className="Component">
          {(stateList.length > 0) ? <List stateList={stateList} setList={setstateList} setstateHistory={setstateHistory} /> : null}
        </div>
        <div className="Component">
          <Controls setList={setstateList} list={stateList} setstateHistory={setstateHistory} stateHistory={stateHistory} />
        </div>
      </header>
    </div>
  );
}

export default App;
