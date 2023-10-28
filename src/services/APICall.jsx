export async function pokemonDetailsAPI(nameOfPokemon){
    try{
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${nameOfPokemon}`, {mode: 'cors'})
        const data = await response.json()
        return data;
    }catch(error){
        console.error(error)
    }
}

//https://pokeres.bastionbot.org/images/pokemon/${pokeID}.png

