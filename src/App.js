import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [joke, setJoke] = useState('')
  useEffect(() => {
    const fetchJoke = async () =>
      await fetch(
        `http://api.icndb.com/jokes/random?firstName=Sayam&lastName=Ajmal/`
      )
        .then((res) => res.json())
        .then((data) => {
          setJoke(data.value.joke)
        });
    fetchJoke();
  }, []);

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
