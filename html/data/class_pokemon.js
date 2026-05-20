class Pokemon {

    static all_pokemons = new Array();

    constructor(id){
        this._id = id;
        this._name = pokemons.find( (element) => element["pokemon_id"] == id )["pokemon_name"];
        this._sta = pokemons.find( (element) => element["pokemon_id"] == id )["base_stamina"];
        this._atk = pokemons.find( (element) => element["pokemon_id"] == id )["base_attack"];
        this._def = pokemons.find( (element) => element["pokemon_id"] == id )["base_defense"];
        this._types = pokemon_types.find( (element) => element["pokemon_id"] == id )["type"];
        this._fastMoves = pokemon_moves.find( (element) => element["pokemon_id"] == id )["fast_moves"];
        this._chargedMoves = pokemon_moves.find( (element) => element["pokemon_id"] == id )["charged_moves"];
    }

    toString(){
        return `${this._name} :  #${this._id}, [${this._types}], [STA: ${this._sta}, ATK: ${this._atk}, DEF: ${this._def}], Rapides = [${this._fastMoves}], Chargées = [${this._chargedMoves}]`;
    }

    static fill_pokemons() {
        Pokemon.all_pokemons = new Array();
        for ( const [key, value] of Object.entries(pokemons) ) {
            // si la forme du pokemon n'est pas normale on ne l'ajoute pas
            if( value['form'] == "Normal" ) {
                Pokemon.all_pokemons.push(new Pokemon(value['pokemon_id']));
            }
        }
    }

    static getAllTypes() {
        Type.fill_types()
        return Type.all_types;
    }

    getTypes() {
        return this._types;
    }

    static getAllAttacks() {
        Attack.fill_attacks()
        return Attack.all_attacks;
    }

    getAttacks() {
        return this._fastMoves, this._chargedMoves;
    }
}