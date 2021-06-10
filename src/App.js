import './App.css';

function App() {
  return (
  <div className={'background'}>
    <div className={'container'}>
      <h1>Jeopardy Score Tracker</h1>
    </div>
    <div className={'scores_container'}>
      <div className={'ian'}>
        <p>Ian Cook: $1,000</p>
      </div>
      <div className={'kendra'}>
        <p>Kendra Cook: -$200</p>
      </div>
    </div>
  </div>
  );
}

export default App;
