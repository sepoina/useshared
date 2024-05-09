/* eslint-disable react/prop-types */
import { useRef, useMemo } from 'react';
import { SharedGlobalContext } from '.';

const SharedContext = (props) => {
  //
  // deposito dei dati condivisi
  const shared = useRef(0);
  //
  // lista dei sottoscrittori
  const subscribers = useRef({});


  /** aggiornamento dello state, richiama tutte le callback dei sottoscrittori */
  const setter = (key, newSubState) => {
    if (!(key in (shared.current || {}))) return undefined; // error chiave inesistente 
    const data=shared.current[key];
    //
    //
    // aggiorna il valore se si tratta di sharedClassTemplate
    if (data.__isStoreClass) {
      if (data.state === newSubState) return true; // no update
      data.state = newSubState;
      return; // nessuna notifica ci penserà il "set state" di sharedClassTemplate a richiamare notifyUpdate
    }
    //
    //
    // aggiorna il valore se è normale
    if (data === newSubState) return; // no update
    shared.current[key] = newSubState;
    notifyUpdate(key, newSubState); // notifica diretta
  };

  const getter= (key) => {
    if (!(key in (shared.current || {}))) return undefined; // error chiave inesistente 
    // se è una classe torna il suo state
    if (shared.current[key].__isStoreClass) return shared.current[key].state;
    // altrimenti è lo state
    return shared.current[key];
  }

  /** 
   * Notifica l'update a tutti i sottoscrittori 
   */
  const notifyUpdate = (key, newSubState) => {
    // trasmetti l'update
    console.log(`${key} updated to ${newSubState}`);
    // console.log(JSON.stringify(state.current));
    // console.log(JSON.stringify(subscribers.current));
    // Notificare i sottoscrittori solo se il valore è cambiato
    if (subscribers.current[key]) {
      Object.values(subscribers.current[key]).forEach((callback) => {
        callback(newSubState);
      });
    }
  }

  /** consente agli useShared di sottoscrivere con il loro uuid le variazioni di questo store. 
   * Viene richiamata la loro funzione di callback che serve per trasmettere il refresh. 
   * La funzione torna la de-sottoscrizione come funzione di ritorno */
  const subscribe = (uuid, key, callback) => {
    // Sottoscrivere solo per la chiave specificata
    if (!subscribers.current[key]) subscribers.current[key] = {}; // crea spazio per i sottoscriventi
    console.log(`subscribing to ${key}`);
    subscribers.current[key][uuid] = callback;

    // Ritornare una funzione di "unsubscribe"
    return (uuid, key) => {
      console.log(`unsubscribing to ${key}`);
      if (subscribers.current?.[key]?.[uuid]) delete subscribers.current[key][uuid];
    };
  };





  // ▧▧▧▧▧▧▧▧▧▧▧▧▧▧▧▧▧▧▧▧▧▧▧▧▧▧▧▧▧▧▧▧▧▧▧▧▧▧▧▧▧▧▧▧▧▧▧▧▧▧▧▧▧▧▧▧▧▧▧▧▧▧▧▧▧▧▧▧▧▧▧▧▧▧▧▧▧
  //
  //                         Inizializza lo store
  //
  // ▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨

  shared.current = useMemo(() => {
    if (!props.share || !(props.share instanceof Object)) return {}; // se non c'è inizializzatore o non è un oggetto
    //
    // guarda tutte le variabili di share
    // per ogni __isStoreClass salva in essa la funzione di notifica e la chiave della variabile
    //
    for (const entry in props.share) {
      if (props.share?.[entry]) {
        if (props.share?.[entry] && props.share[entry] instanceof Object && props.share[entry].__isStoreClass !== undefined) {
          props.share[entry].__key = entry; // il nome della propria chiave
          props.share[entry].__handleNotifyUpdate = notifyUpdate; // la funzione di notifica
          props.share[entry].__setter = setter; // la funzione di setting per uso setShared
          props.share[entry].__getter = getter; // la funzione di getting per uso getShared
        }
      }
    }
    return props.share;
  }, [props]);

  // se tra i parametri c'è il context
  if (props.context) return (
    <props.context.Provider value={{ shared: shared.current, setter, subscribe }}>
      {props.children}
    </props.context.Provider>
  )
  return (
    <SharedGlobalContext.Provider value={{ shared: shared.current, setter, subscribe }}>
      {props.children}
    </SharedGlobalContext.Provider>
  );
};

export default SharedContext;