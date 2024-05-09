import { useShared } from '@sepoina/useshared';
const ChildComponentD = () => {
  const [inesistente] = useShared('chiaveinesistente',"Chiave inesistente");
  return (
    <div>
      <p> Volutamente inesistente <br/> &#34;{inesistente}&#34;</p>
    </div>
  );
};

export default ChildComponentD;