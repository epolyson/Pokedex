import "./App.css";
import { useEffect, useState } from "react";
import { getAllPokemon, getPokemon } from "./utils/pokemon";
import Card from "./components/Card/Card";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const initialURL = "https://pokeapi.co/api/v2/pokemon";
  const [loading, setLoading] = useState(true);
  const [pokemonData, setPokemonData] = useState([]);
  useEffect(() => {
    const fetchPokemonData = async () => {
      // すべてのポケモンデータを取得
      let res = await getAllPokemon(initialURL);
      // 詳細データを取得
      loadPokemon(res.results);
      setLoading(false);
    };
    fetchPokemonData();
    console.log(pokemonData);
  }, []);

  const loadPokemon = async (data) => {
    // 20種類のポケモン詳細データの取得が終わるまで Promise.all
    let _pokemonData = await Promise.all(
      data.map((pokemon) => {
        let pokemonRecord = getPokemon(pokemon.url);
        return pokemonRecord;
      })
    );
    setPokemonData(_pokemonData);
  };

  console.log(pokemonData);

  return (
    <>
      <Navbar />
      <div className="App">
        {loading ? (
          <h1>now loading ...</h1>
        ) : (
          <>
            <div className="pokemonCardContainer">
              {pokemonData.map((pokemon, i) => {
                return <Card key={i} pokemon={pokemon}></Card>;
              })}
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default App;
