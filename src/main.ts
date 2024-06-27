import "./style/main.css";
import { createProjection } from "./projection";
import { drawChart } from "./chart";
import { renderInputs } from "./render";

renderInputs()
const data = createProjection();
drawChart(data);
