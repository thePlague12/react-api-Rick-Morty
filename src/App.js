import "./App.css";
import image1 from "./assents/rick-morty.png";
import { useState } from "react";
import Character from "./character.js";

function App() {
  const [character, setCharacter] = useState(null);

  const api = async () => {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    console.log(response);
    const characterApi = await response.json();
    console.log(characterApi.results);
    setCharacter(characterApi.results);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title"> Rick and Morty</h1>
        {character ? (
          <Character characters={character} />
        ) : (
          <>
            <img src={image1} className="img-home" alt="logo" />
            <button className="btn-search" onClick={api}>
              Buscar Personajes
            </button>
          </>
        )}
      </header>
    </div>
  );
}

export default App;
