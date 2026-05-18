class Attack {

    static all_attacks = new Array();

    constructor(id, name, type, power, duration){
        this._id = id;
        this._name = name;
        this._type = type;
        this._power = power;
        this._duration = duration;
    }


    toString() {
        return `${this._name} : #${this._id}, ${this._type}, ${this._power}, ${this._duration}ms`;
    }

    static fill_attacks(){
        
        // Fast moves
        fast_moves.forEach(m => {
            const atk = new Attack(
                m.move_id, m.name, m.type, m.power, m.duration
            );
            Attack.all_attacks[m.move_id] = atk;
        });

        // Charged moves
        charged_moves.forEach(m => {
            const atk = new Attack(
                m.move_id, m.name, m.type, m.power, m.duration
            );
            Attack.all_attacks[m.move_id] = atk;
        });
    }
}