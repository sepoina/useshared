/* eslint-disable react/prop-types */
import {
  useContext,
  useEffect,
  useState,
  useId,
} from 'react';
import { SharedGlobalContext } from '.';

const useSharedHook = (...arg) => {
  //
  // un  parametro = nome della variabile del context globale
  // due parametri = context, nome della variabile del context 
  // tre parametri = context, nome della variabile del context, valore di default
  //
  const [context, key, defaultValue] = arg?.[0] instanceof Object ? [...arg] : [SharedGlobalContext, ...arg];
  const { shared, subscribe, setter } = useContext(context);
  const [, triggerRefresh] = useState(null); // () => state.current[key] fake for refresh
  const uuid = useId();


  useEffect(() => {
    const unsubscribe = subscribe(uuid, key, (/* newSubState */) => {
      // console.log(`local ${key} updated to ${newSubState}`);
      triggerRefresh(a => a + 1); // fake refresh per evitare il doppio store
    });

    // Pulisci l'iscrizione quando il componente viene smontato
    return () => {
      unsubscribe(uuid, key);
    };
  }); /* ,[key, callback, subscribe, uuid */

  // è una classe che contiene le azioni?
  const isStruct = shared[key]?.__isStoreClass;
  // distingue quando il valore è una struttura di azione (e allora sta in 'shared.state') o il valore sta direttamente nel shared[key]
  const dataPointer = isStruct ? shared[key].state : shared[key];
  // se arrivi qui da uno sharedClass, torna il valore
  if (arg?.[arg?.length - 1] === "useSharedClass") return shared[key];
  return [
    dataPointer === undefined ? defaultValue : dataPointer,
    (value) => setter(key, value), // espone la funzione di setter con il necessario valore di key
    shared[key] // torna un puntatore alla classe che contiene le azioni 
  ]; // Restituisci solo la parte specifica dello stato
};

const useSharedClass = (...arg) => {
  return useSharedHook(...arg, "useSharedClass");
}

export { useSharedHook, useSharedClass };