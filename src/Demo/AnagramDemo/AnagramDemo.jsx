/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */

// useSharedLibrary
import { anagramContext, SharedContext } from './anagramContext'; // Context
import anagramClass from './anagramClass'; // data & actions
// components
import WhatIsAnagramName from './Components/WhatIsAnagramName';
import RandomizeAnagramName from './Components/RandomizeAnagramName';
import TraditionalWriteAnagramName from './Components/TraditionalWriteAnagramName';
import Goal from './Components/Goal';

export default function BasketDemo() {
    return (
        <SharedContext
            context={anagramContext}
            share={{
                flagWin: true, // initial, dependant to anagram state
                anagram: new anagramClass("Jimmy") // initial state
            }}
        >
            <WhatIsAnagramName />
            <RandomizeAnagramName />
            <TraditionalWriteAnagramName />
            <Goal />
        </SharedContext>
    )
}

