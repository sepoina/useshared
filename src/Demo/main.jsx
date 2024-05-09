/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// useSharedLibrary
import { GlobalSharedContext } from '@sepoina/useshared';
// Demo global store
import GlobalDemo from './GlobalDemo/Global';
// Demo Basket Ball
import BasketDemo from './BasketDemo/BasketDemo';
// Demo Anagram Jimmy
import AnagramDemo from './AnagramDemo/AnagramDemo';
// css
import './main.css';


const root = createRoot(document.getElementById('root'));


root.render(
  <StrictMode>
    <GlobalSharedContext share={{ colore: 'Coral', lingua: 'it' }}>
      <table>
        <tr>
          <td style={{ backgroundColor: '#00003366' }}>
            <div>
              <h2>Global Shared</h2>
              <hr></hr>
              <GlobalDemo />
            </div>
          </td>
          <td style={{ backgroundColor: '#33000066' }}>
            <div>
              <h2>Basket Lanfranco</h2>
              <hr></hr>
              <BasketDemo playerName="Lanfranco" />
              <br/><br/><br/>
            </div>
            <div>
              <h2>Basket Pippolo</h2>
              <hr></hr>
              <BasketDemo playerName="Pippolo" />
            </div>
          </td>
          <td style={{ backgroundColor: '#00330066' }}>
            <div>
              <h2>Anagram Jimmy</h2>
              <hr></hr>
              <AnagramDemo />
            </div>
          </td>
        </tr>
      </table>
    </GlobalSharedContext>
  </StrictMode>
);
/*

<GlobalSharedContext share={{ colore: 'Coral', lingua: 'it' }}>
    </GlobalSharedContext>
<td>
            <div>
              <h2>Global Shared</h2>
              <hr></hr>
              <GlobalDemo />
            </div>
          </td>
          <td style={{backgroundColor:'#33000066'}}>
            <div>
              <h2>Basket Lanfranco</h2>
              <hr></hr>
              <BasketDemo playerName="Lanfranco"/>
            </div>
          </td>
          <td style={{backgroundColor:'#33000066'}}>
            <div>
              <h2>Basket Pippolo</h2>
              <hr></hr>
              <BasketDemo playerName="Pippolo"/>
            </div>
          </td>
          */