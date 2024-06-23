import "./style.css";
import { createProjection } from "./projection";
import { drawChart } from "./chart";

const data = createProjection();
drawChart(data)
