class Pokemon {

    constructor(id, name, stamina, attack, defense){
        this.id = id;
        this.name = name;
        this.sta = stamina;
        this.atk = attack;
        this.def = defense;
    }

    toString(){
        return `${name} :  #${id}, ${types}, ${sta}, ${atk}, ${def}, Rapides = ${fast}, Chargées = ${charged}`;
    }
}