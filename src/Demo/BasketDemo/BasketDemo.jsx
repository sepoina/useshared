/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
// useSharedLibrary
import { SharedContext } from '@sepoina/useshared'; // hook per la gestione dello store
import { useShared } from '@sepoina/useshared';
import basketContext from './basketContext';
import BasketAddGoal from './BasketAddGoal';

const WhatIsPlayerName = () => {
    const [playerName] = useShared(basketContext, 'playerName');
    return <p>Player is {playerName}</p>
};

export default function BasketDemo(props) {
    return (
        <SharedContext
            context={basketContext}
            share={{ goals: 12, playerName: props.playerName }}
        >
            <WhatIsPlayerName />
            <BasketAddGoal />
        </SharedContext>
    )
}

