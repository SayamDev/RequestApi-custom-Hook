import { useRef, useState } from "react";
import "./App.css";
import useRandomJoke from "./useRandomJoke";

function App() {
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);

  const [firstName, setFirstName] = useState("sayam");
  const [lastName, setLastName] = useState("ajmal");

  const joke = useRandomJoke(firstName, lastName);

  //custom hook
  //const joke = useRandomJoke("sayam", "ajmal");

  const generateJoke = (e) => {
    e.preventDefault();
    setFirstName(firstNameRef.current.value);
    setLastName(lastNameRef.current.value);
  };

  return (
    <div>
      <center>
        <h1>The Joke Generator</h1>
        <h2>{joke}</h2>

        <form>
          <input placeholder="first name" ref={firstNameRef} />
          <input placeholder="last name" ref={lastNameRef} />

          <button onClick={generateJoke}>Generate Joke</button>
        </form>
      </center>
    </div>
  );
}

export default App;

// http://api.icndb.com/jokes/random

//8:39
