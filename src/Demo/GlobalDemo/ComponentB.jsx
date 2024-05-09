import {  useShared } from '@sepoina/useshared';

const randomCountryName = () => {
  const letters = 'abcdefghijklmnopqrstuvwxyz'; // Lettere dell'alfabeto
  let countryName = '';
  for (let i = 0; i < 2; i++) {
    const randomIndex = Math.floor(Math.random() * letters.length); // Genera un indice casuale
    countryName += letters[randomIndex]; // Aggiunge una lettera casuale al nome della nazione
  }
  return countryName; // Restituisce il nome della nazione di fantasia
};

const ChildComponentB = () => {
    const [lingua, setLingua] = useShared('lingua');

    return (
      <div>
        <p>LINGUA: {lingua}</p>
        <button onClick={() => setLingua(randomCountryName())}>Lingua di fantasia</button>
      </div>
    );
};

export default ChildComponentB;
