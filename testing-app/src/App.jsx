import './App.css';
import { useState } from 'react';
import FileForm from './components/FileForm'
import RecordForm from './components/RecordForm'
import DataDisplay from './components/DataDisplay'

function App() {
  // Storage for the CSV data
  //const [parseData, setParseData] = useState([]);
  // Storage for the table headers
  const [tableRows, setTableRows] = useState([]);
  // Storage for values
  const [values, setValues] = useState([]);
  // Storage for converted values
  const [newValues, setNewValues] = useState([]);

  return (
    <div className="App">
      {/* File uploader */}
      <FileForm
        setTableRows={setTableRows}
        setValues={setValues}
        setNewValues={setNewValues}
      />
      {/* Add new users */}
      <RecordForm
        values={values}
        newValues={newValues}
        setValues={setValues}
        setNewValues={setNewValues}
      />
      {/* Data containers */}
      <DataDisplay
        tableRows={tableRows}
        values={values}
        newValues={newValues}
      />
    </div>
  );
}

export default App;
