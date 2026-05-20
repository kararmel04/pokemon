function getPokemonsByType(typeName){
    let liste = new Array();
    Pokemon.fill_pokemons();
    Pokemon.all_pokemons.forEach(pokemon => {
        if( pokemon._types.includes(typeName) ) {
            liste.push(pokemon);
        }
    });
    console.log(`Liste des ${liste.length} pokémons ayant le type "${typeName}" : `);
    liste.forEach(pokemon => {
        console.log(` - ${pokemon.toString()}`);
    });
}

function getPokemonsByAttack(attackName){
    let liste = new Array();
    Pokemon.fill_pokemons();
    Pokemon.all_pokemons.forEach(pokemon => {
        if( pokemon._fastMoves.includes(attackName) || pokemon._chargedMoves.includes(attackName) ) {
            liste.push(pokemon);
        }
    });
    console.log(`Liste des ${liste.length} pokémons ayant l'attaque "${attackName}" : `);
    liste.forEach(pokemon => {
        console.log(` - ${pokemon.toString()}`);
    });
}

function getAttacksByType(typeName){
    let liste = new Array();
    Attack.fill_attacks();
    Attack.all_attacks.forEach(attack => {
        if( attack._type == typeName ) {
            liste.push(attack);
        }
    });
    console.log(`Liste des ${liste.length} attaques ayant le type "${typeName}" : `);
    liste.forEach(attack => {
        console.log(` - ${attack.toString()}`);
    });
}

function sortPokemonsByTypeThenName(){
    let liste = new Array();
    // lambda fonction qui reproduit le comportement
    // de la fonction getPokemonByType 
    let gPbT = (typeName) => {
        let liste = new Array();
        Pokemon.fill_pokemons();
        Pokemon.all_pokemons.forEach(pokemon => {
            if( pokemon._types.includes(typeName) ) {
                liste.push(pokemon);
            }
        });
        liste.sort();
        liste.forEach(pokemon => {
            console.log(` - ${pokemon.toString()}`);
        });
    }
    Pokemon.fill_pokemons();
    console.log(`Liste des ${Pokemon.all_pokemons.length} pokémons triés par type puis par ordre alphabetique : `);
    Pokemon.getAllTypes().forEach(type => {
        // pour chaque type on affiche tous les pokémon de ce type par ordre alphabetic
        gPbT(type._name);
    });
}

function getWeakestEnemies(attackName){

}

function getBestFastAttacksForEnemy(print, pokemonName){

}

function fastFight(pokemonNameA, pokemonNameB){
    
}