import './history.scss';

function History({ history }) {
  return (
    <div className="history">
      <h2>history</h2>
      <ul>
        {history &&
          history.map((item) => {
            return (
              <li>
                <b>{item.method}</b> {item.url}
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default History;
