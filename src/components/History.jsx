import './history.scss';

function History({ history, handleApiCall }) {
  return (
    <div className="history">
      <h2>history</h2>
      <ul>
        {history &&
          history.map((item, idx) => {
            {
              console.log('item', item);
            }
            return (
              <li key={idx}>
                <b>{item.method}</b> {item.url}
                <b onClick={() => handleApiCall(item)}> show result</b>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default History;
