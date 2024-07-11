import "./style/main.css";
import { createProjection } from "./projection";
import { drawChart } from "./chart";
import { renderControls, renderFootnotes } from "./render";
import { setupEventListeners } from "./setup";
import { inputs, toggleInputErrorHints } from "./inputs";

const startTime = Date.now();
renderControls();
renderFootnotes();
setupEventListeners();
const data = createProjection();
drawChart(data);
inputs.forEach(input => toggleInputErrorHints(input.id, input.isValid()))
console.log(`Time to render: ${Date.now() - startTime} ms`);
