import { useShared } from '@sepoina/useshared';

const ChildComponentA = () => {
  const [colore] = useShared('colore');
  return (
    <div style={{ backgroundColor: "rgb(160,160,161)", background: `linear-gradient(-45deg, rgba(160,160,161,1) 6%, ${colore} 6%, ${colore} 12%, rgba(160,160,161,1) 10%)`, opacity:0.3, borderRadius:12, padding:1}}>
      <p style={{ color: 'black' }}>COMPONENTA<br/> {colore}</p>
    </div>
  );
};

export default ChildComponentA;