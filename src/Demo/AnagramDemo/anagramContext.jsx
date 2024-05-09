/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { sharedCreateContext, SharedContext } from '@sepoina/useshared';

const anagramContext = sharedCreateContext(); // create new store 

export { SharedContext, anagramContext }; 