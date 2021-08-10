import './results.scss';

function Results(props) {
  return (
    <>
      <section className="results">
        <pre data-testid="results">
          {props.data ? JSON.stringify(props.data, undefined, 2) : null}
        </pre>
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
