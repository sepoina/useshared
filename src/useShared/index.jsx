/* eslint-disable react-refresh/only-export-components */

import { createContext } from 'react';
import { useSharedHook, useSharedClass } from './useSharedHook';
import SharedContext from './SharedContext';
import sharedClassTemplate from './sharedClassTemplate';

const SharedGlobalContext = createContext();

export {
    createContext as sharedCreateContext,    // funzione per creare una nuova costante di store da importare nei sottocomponenti. E' un createContext
    SharedContext,                         // funzione per circondare i componenti e inserire l'inizializzazione dello store
    useSharedHook as useShared,               // funzione in uso ai componenti per i dati dello store
    useSharedClass,                                // hook che restituisce i metodi della classe;    
    SharedContext as GlobalSharedContext, // lo store globale
    SharedGlobalContext,                     // il context globale
    sharedClassTemplate,                             // la classe da estendere per lo store
};


