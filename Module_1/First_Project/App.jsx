function App(props) {
  const currDate = new Date();

  return (
    <div>
      <h1>Henry P</h1>
      <h2>The date now is {currDate.toLocaleDateString()} and the time now is {currDate.toLocaleTimeString()}.</h2>
    </div>
  );
}

export default App;