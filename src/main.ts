import "./style/main.css";
import { createProjection } from "./projection";
import { drawChart } from "./chart";
import { renderControls, renderFootnotes } from "./render";
import { setupEventListeners } from "./setup";

const startTime = Date.now();
renderControls();
renderFootnotes();
setupEventListeners();
const data = createProjection();
drawChart(data);
console.log(`Time to render: ${Date.now() - startTime} ms`);
