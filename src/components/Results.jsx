import JSONPretty from 'react-json-pretty';
import './results.scss';
import 'react-json-pretty/themes/monikai.css';

function Results(props) {
  return (
    <>
      <section className="results">
        {/* <pre data-testid="results"> */}
        {/* {props.data ? JSON.stringify(props.data, undefined, 2) : null} */}
        {props.data ? (
          <JSONPretty id="json-pretty" data={props.data}></JSONPretty>
        ) : null}
        {/* </pre> */}

        {/* <JSONPretty id="json-pretty" data={props.data}></JSONPretty> */}

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
