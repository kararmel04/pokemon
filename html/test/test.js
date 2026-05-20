function getPokemonsByType(typeName){
    let liste = new Array();
    Pokemon.fill_pokemons();
    // pour chaque pokémon
    Pokemon.all_pokemons.forEach(pokemon => {
        // si le pokémon parcouru possède le type voulu
        if( pokemon._types.includes(typeName) ) {
            // on l'ajoute
            liste.push(pokemon);
        }
    });
    // Affichage des pokémons
    console.log(`Liste des ${liste.length} pokémons ayant le type "${typeName}" : `);
    liste.forEach(pokemon => {
        console.log(` - ${pokemon.toString()}`);
    });
}

function getPokemonsByAttack(attackName){
    let liste = new Array();
    Pokemon.fill_pokemons();
    // pour chaque pokémon
    Pokemon.all_pokemons.forEach(pokemon => {
        // si le pokémon possède l'attaque voulu
        // on regarde dans les mvt rapides et mvt chargé
        if( pokemon._fastMoves.includes(attackName) || pokemon._chargedMoves.includes(attackName) ) {
            // on l'ajoute
            liste.push(pokemon);
        }
    });
    // Affichage
    console.log(`Liste des ${liste.length} pokémons ayant l'attaque "${attackName}" : `);
    liste.forEach(pokemon => {
        console.log(` - ${pokemon.toString()}`);
    });
}

function getAttacksByType(typeName){
    let liste = new Array();
    Attack.fill_attacks();
    // pour chaque attaques
    Attack.all_attacks.forEach(attack => {
        // si le type de l'attaque est celui voulu
        if( attack._type == typeName ) {
            // on l'ajoute
            liste.push(attack);
        }
    });
    // Affichage
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
        // on parcour tout les pokémon
        Pokemon.all_pokemons.forEach(pokemon => {
            // du type voulu
            if( pokemon._types.includes(typeName) ) {
                liste.push(pokemon);
            }
        });
        // on trie par ordre alphabetique
        liste.sort();
        // pour chaque pokémon
        liste.forEach(pokemon => {
            // on l'affiche
            console.log(` - ${pokemon.toString()}`);
        });
    }
    Pokemon.fill_pokemons();
    // Affichage
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