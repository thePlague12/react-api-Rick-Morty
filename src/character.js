import React from "react";

export default function Characters(props) {
  const characters = props.characters;
  console.log(props.Characters);
  return (
    <div className="characters">
      <h1>Personajes</h1>
      <span className="back-home">Home</span>
      <div className="container-characters">
        {characters.map((character, index) => (
          <div className="character-container" key={index}>
            <p>{character.name}</p>

            <img src={character.image}></img>
            <div>
              <h3>{character.name}</h3>
              <h6>
                {character.status === "Alive" ? (
                  <>
                    <span className="alive">Vivo</span>
                  </>
                ) : (
                  <>
                    <span className="dead">Muerto</span>
                  </>
                )}
              </h6>
              <p>
                <span className="text-grey">Episodios:</span>
                <span>{character.episode.length}</span>
              </p>
              <p>
                <span className="text-grey">Especie:</span>
                <span>{character.species}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
