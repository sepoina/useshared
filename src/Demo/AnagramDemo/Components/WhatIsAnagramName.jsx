import { useShared } from '@sepoina/useshared'; // hook per la gestione dello store
import {anagramContext} from '../anagramContext'; // context


const WhatIsAnagramName = () => {
    const [name] = useShared(anagramContext, 'anagram');
    return <p>Actual Name -&gt; &#34;<b>{name}</b>&#34; </p>

};

export default WhatIsAnagramName;