import './results.scss';
import JSONPretty from 'react-json-pretty';
import 'react-json-pretty/themes/monikai.css';

function Results(props) {
  return (
    <>
      <section className="results">
        <div data-testid="results">
          {props.data ? (
            <JSONPretty id="json-pretty" data={props.data}></JSONPretty>
          ) : null}
        </div>
        {/* <pre data-testid="results">
          {props.data ? JSON.stringify(props.data, undefined, 2) : null}
        </pre> */}
        {!props.data && (
          <div data-testid="loading" className="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        )}
      </section>
    </>
  );
}

export default Results;
