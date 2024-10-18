import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Header } from './App';
import { Button } from './App';
import styled from 'styled-components';


// const elem = <h2 class="greetings">Hello World!</h2>;
const BigButton = styled(Button)`
  margin: 0 auto;
  width: 245px;
`
const text = 'Hello World!'


const elem = (
  <div>
    <h1>Text: {text}</h1>
    {/* <h1 class='testclass'>Text: {4+4}</h1>  error class*/}
    <h1 className='testclass'>Text: {4 + 4}</h1>
    <h1>Text: {['2314', '1234234', '398739']}</h1>
    <h1>Text: {['2314', '1234234', '398739', '{}']}</h1>
    <label htmlFor="testlabel">TestattributeFor</label><br />
    <input id='testlabel' type="text" />
    <button>button</button>
    <button />
  </div>
)



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // elem
  <StrictMode>
    <App />
    <BigButton as="a">+++</BigButton>
  </StrictMode>
);

