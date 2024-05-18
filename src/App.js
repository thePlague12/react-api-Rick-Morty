import "./App.css";
import image1 from "./assents/rick-morty.png";
import { useState } from "react";
import Character from "./Character.js";

async function restAPI() {}

function App() {
  const [character, setCharacter] = useState(null);

  const api = async () => {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const characterApi = await response.json();
    setCharacter(characterApi.results);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title"> Rick and Morty</h1>

        <Character />

        <img src={image1} className="img-home" alt="logo" />
        <button className="btn-search" onClick={restAPI}>
          Buscar Personajes
        </button>
      </header>
    </div>
  );
}

export default App;
