/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { pokemonDetailsAPI } from "../services/APICall";
import '../styles/pokecard.css';

function PokeCard({name}){
    const[pokemonType, setPokemonType] = useState();//Complete JSON response
    const[pokemonName, setPokemonName] = useState();//Pokemon Name
    const[pokemonIdData, setPokemonIdData] = useState();//Pokemon Id
    const[pokemonAttack, setPokemonAttack] = useState();//Pokemon Attack
    const[pokemonDefense, setPokemonDefense] = useState();//Pokemon Defense
    const[pokemonHp, setPokemonHp] = useState();//Pokemon HP
    const[pokemonSpecialAttack, setPokemonSpecialAttack] = useState();//Pokemon Special Attack
    const[pokemonSpecialDefense, setPokemonSpecialDefense] = useState();//Pokemon Special Defense
    const[pokemonSpeed, setPokemonSpeed] = useState();

    useEffect(() => {
        const fetchingData = async () => {
            try{
                const response = await pokemonDetailsAPI(name);
                setPokemonType(response.types.map((type) => type.type.name));//type of pokemon
                setPokemonIdData(response.id);//id of pokemon
                setPokemonName(response.name);//name of pokemon
                setPokemonHp(response.stats[0]["base_stat"]);//HP of pokemon
                setPokemonAttack(response.stats[1]["base_stat"])//Attack Power of Pokemon
                setPokemonDefense(response.stats[2]["base_stat"])//Defense Power of pokemon
                setPokemonSpecialAttack(response.stats[3]["base_stat"])//Special Attack Power of Pokemon
                setPokemonSpecialDefense(response.stats[4]["base_stat"])//Special Defense Power of pokemon
                setPokemonSpeed(response.stats[5]["base_stat"])//Speed of Pokemon
                //setPokeMoves(response.moves.map((attack) => <p key={attack.move.name}>attack.move.name</p>));//attacks of the pokemon

            }catch(error){
                console.error(error);
            }
        }

        if(name){
            fetchingData();
        }
    }, [name])

    return (
        <>
        <div className="container">
            <div className="firstHalf">
                <div id="name">{pokemonName}</div>
                <div id="id">ID : {JSON.stringify(pokemonIdData)}</div>
            </div>
            <div className="secondHalf">
                <div id="type">Type : {pokemonType}</div>
                <div id="statSection">
                    <div>HP : {JSON.stringify(pokemonHp)}</div>
                    <div>Attack : {JSON.stringify(pokemonAttack)}</div>
                    <div>Defense : {JSON.stringify(pokemonDefense)}</div>
                    <div>Special Attack : {JSON.stringify(pokemonSpecialAttack)}</div>
                    <div>Special Defense : {JSON.stringify(pokemonSpecialDefense)}</div>
                    <div>Speed : {JSON.stringify(pokemonSpeed)}</div>
                </div>
            </div>
        </div>
        </>
    )
}

export default PokeCard;