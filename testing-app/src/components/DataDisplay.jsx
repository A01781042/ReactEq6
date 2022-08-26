import '../App.css';
import DataTable from './DataTable'

function DataDisplay(props) {

  return (
    <table className="Data-table" data-testid='contents'>
      <tbody>
        <tr>
          <td>
            <h2>Original</h2>
            {/* Contents table */}
            <DataTable
              tableRows={props.tableRows}
              values={props.values}
              id='tableOriginal'
            />
          </td>
          <td>
            <h2>Result</h2>
            {/* Contents table */}
            <DataTable
              tableRows={props.tableRows}
              values={props.newValues}
              id='tableResults'
            />
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default DataDisplay;
