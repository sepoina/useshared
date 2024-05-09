class sharedClassTemplate {
    #state = {};
    constructor() {
        this.__isStoreClass = true;
    }
    get state() {
        // console.log("getter!");
        return this.#state;
    }

    set state(newState) {
        // console.log("setter!");
        if (this.#state === newState) return; // niente da updatare
        // aggiorna lo state
        this.#state = newState;
        // se presente la funzione di notifica ai subscriber (dovrebbe) effettuala
        this.__handleNotifyUpdate && this.__handleNotifyUpdate(this.__key, newState);
        if (this._stateObserver) this._stateObserver(); // notifica ogni variazione
    }

    /**
     * Setta una chiave della stessa collezione
     * @param {*} key 
     * @param {*} newSubState 
     * @returns 
     */
    setShared(key, newSubState) {
        return (this.__setter && this.__setter(key, newSubState));
    }

    /**
     * Recupera una chiave della stessa collezione
     * @param {*} key 
     * @returns 
     */
    getShared(key) {
        return (this.__getter && this.__getter(key));
    }
}

export default sharedClassTemplate;