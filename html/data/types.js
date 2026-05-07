class Type {

    static all_types = new Array();

    constructor(newName) {
        this._name = newName;
        this._listEffectiveness = new Object();
        this.fill_effectiveness();
    }

    toString() {
        let string = this._name + " : ";
        for ( const [key, value] of Object.entries(this._listEffectiveness) ) {
            string += key + " = [" + value + "], ";
        };
        return string;
    }

    fill_effectiveness() {
        for ( const [key, value] of Object.entries(type_effectiveness[this._name]) ) {
            this._listEffectiveness[value] = new Array();
        }
        for ( const [key, value] of Object.entries(type_effectiveness[this._name]) ) {
            this._listEffectiveness[value].push(key);
        }
    }

}