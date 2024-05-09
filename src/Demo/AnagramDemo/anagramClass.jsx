/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { sharedClassTemplate } from '@sepoina/useshared';

class anagramClass extends sharedClassTemplate {
    //
    // sharedClassTemplate exposes: ----------------------------------------------
    //
    // this.state       -  the general state of the class
    // _stateObserver   -  a function called upon any change in state
    // setShared        -  a function to set variables in the sharedContext
    // getShared        -  a function to read variables from the sharedContext
    // ---------------------------------------------------------------------------
    //
    constructor(originalName) {
        super();
        this.originalName = originalName;
        this.state = originalName;
    }

    _stateObserver() {
        if (this.state === this.originalName) this.setShared("flagWin", true);
        else this.setShared("flagWin", false);
    }

    remix(iteration) {
        // inside function
        function remixUnaVolta(str) {
            const arr = str.split('');
            const index1 = Math.floor(Math.random() * arr.length);
            let index2 = Math.floor(Math.random() * arr.length);
            // Assicurati che index2 sia diverso da index1
            while (index2 === index1) {
                index2 = Math.floor(Math.random() * arr.length);
            }
            // Scambia i due caratteri
            [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
            return arr.join('');
        }
        //
        // Verifica se la stringa è valida e l'iterazione è un numero positivo
        if (typeof this.state !== 'string' || typeof iteration !== 'number' || iteration < 0) {
            throw new Error('Input non valido');
        }
        // Esegue l'remix il numero specificato di volte
        let risultato = this.state;
        for (let i = 0; i < iteration; i++) {
            risultato = remixUnaVolta(risultato);
        }
        this.state = risultato;
    }

    restore() {
        this.state = this.originalName;
    }
}


export default anagramClass;
