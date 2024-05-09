import { useSharedClass } from '@sepoina/useshared'; // hook per la gestione dello store
import {anagramContext} from './../anagramContext'; // context


const RandomizeAnagramName = () => {
    const anagram = useSharedClass(anagramContext, 'anagram');
    return (
        <div>
            <button onClick={() => anagram.remix(1)}>Remix 1</button>
            <button onClick={() => anagram.remix(8)}>Remix 8</button>
            <br />
            <button onClick={() => anagram.restore()}>Restore OldName</button>
        </div>
    );
};

export default RandomizeAnagramName;