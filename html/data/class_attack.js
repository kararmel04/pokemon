class Attack {

    static all_attacks = new Array();

    constructor(id, name, type, power, duration){
        this.id = id;
        this.name = name;
        this.type = type;
        this.power = power;
        this.duration = duration;
    }


    toString() {
        return `${this.name} : #${this.id}, ${this.type}, ${this.power}, ${this.duration}ms`;
    }

    fill_attacks(){
        
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