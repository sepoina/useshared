import { useShared } from '@sepoina/useshared';

const randcol = ["White", "Black", "Red", "Lime", "Blue", "Yellow", "Cyan", "Magenta", "Silver", "Gray", "Maroon", "Olive", "Green", "Purple", "Teal", "Navy", "AliceBlue", "AntiqueWhite", "Aqua", "Aquamarine", "Azure", "Beige", "Bisque", "BlanchedAlmond", "BurlyWood", "CadetBlue", "Chartreuse", "Chocolate", "Coral", "CornflowerBlue", "Cornsilk"];

const ChildComponentC = () => {
  const [colore, setColore] = useShared('colore');

  return (
    <div>
      <p>COLORE: <span style={{color: colore}}>{colore}</span></p>
      <button onClick={() => setColore(randcol[Math.floor(Math.random() * 18)])}>Colore di fantasia</button>
    </div>
  );
};

export default ChildComponentC;

