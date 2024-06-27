import "./style/main.css";
import { createProjection } from "./projection";
import { drawChart } from "./chart";
import { renderInputs } from "./render";
import { setupEventListeners } from "./setup";

renderInputs()
setupEventListeners()
const data = createProjection();
drawChart(data);
