import { useShared } from '@sepoina/useshared'; // hook per la gestione dello store
import {anagramContext} from './../anagramContext'; // context


const TraditionalWriteAnagramName = () => {
    const [name, setName] = useShared(anagramContext, 'anagram');
    const handleInputChange = (event) => setName( event.target.value );
    return <input value={name} onChange={handleInputChange} />
};

export default TraditionalWriteAnagramName;