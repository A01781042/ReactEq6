import '../App.css';
import Papa from 'papaparse';
import { new_format } from '../modules/conversions'

function FileForm(props) {

  const changeHandler = function(event) {
    // Read the contents of a CSV file
    Papa.parse(event.target.files[0], {
      header: true,
      skipEmptyLines: true,
      // Function to process the data read
      complete: (results) => {
        const rowsArray = [];
        const valuesArray = [];
        const newValuesArray = [];

        // Iterate over the data to separate the contents
        results.data.map((item) => {
          rowsArray.push(Object.keys(item));
          valuesArray.push(Object.values(item));
          newValuesArray.push(new_format(Object.values(item)));
          // Return a null to silence a warning.
          // The map result is not used in any case
          return null;
        });

        // Store the values in the state
        //setParseData(results.data);
        props.setTableRows(rowsArray[0]);
        props.setValues(valuesArray);
        props.setNewValues(newValuesArray);
      }
    });
  };

  return (
    <div className="Input">
      <h2>Select a CSV file</h2>
      <input
        type="file"
        name="file"
        accept=".csv"
        onChange={changeHandler}
        data-testid='inputForm'
      />
    </div>
  );
}

export default FileForm;
