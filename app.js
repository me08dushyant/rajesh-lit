import { html, render } from 'https://unpkg.com/lit-html/lit-html.js';

let app = () => html`
<h1>some html goes here Yes</h1>
<h2> hi therer hi </h2>
`;

render(app(),document.getElementById('header'));
