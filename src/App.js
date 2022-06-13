import "./App.css";
import useRandomJoke from "./useRandomJoke";

function App() {
  const joke = useRandomJoke();

  //custom hook
  //const joke = useRandomJoke("sayam", "ajmal");

  
  return (
    <div>
      <center>
        <h1>The Joke Generator</h1>
        <h2>{joke}</h2>
        <button>Generate Joke</button>
      </center>
    </div>
  );
}

export default App;

// http://api.icndb.com/jokes/random


//8:39