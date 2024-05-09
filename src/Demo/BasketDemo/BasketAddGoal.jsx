import basketContext from './basketContext';
import { useShared } from '@sepoina/useshared';

export default function BasketAddGoal() {
    const [colore] = useShared('colore'); // from global
    const [goals, setGoals] = useShared(basketContext, 'goals'); // from basket
    return (
        <div>
            <p>
                <span style={{ color: colore }}>&#10040;</span>
                &nbsp;Goals: {goals}
            </p>
            <button onClick={() => setGoals(goals + 1)}>Add one goal</button>
        </div>
    );
}