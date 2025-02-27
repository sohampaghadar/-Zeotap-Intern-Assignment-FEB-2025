import React from 'react';
import Spreadsheet from './Spreadsheet';

function App() {
  return (
    <div className="App">
      <h1>Google Sheets Mimic</h1>
      <Spreadsheet rows={20} cols={10} />
    </div>
  );
}

export default App;
