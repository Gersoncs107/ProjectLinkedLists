// index.js
import "./styles.css";
import { greeting } from "./greeting.js";
import raidenImage from "./raiden.jpg";

document.body.innerHTML = `
  <h1>${greeting}</h1>
  <img src="${raidenImage}" alt="Raiden">
`;

