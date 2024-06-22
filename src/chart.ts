import {
    Chart,
    LineController,
    LineElement,
    PointElement,
    CategoryScale,
    LinearScale
} from "chart.js";
import { IPlotData } from "./IPlotData";

Chart.register(LineController, LineElement, PointElement, CategoryScale, LinearScale);

export function drawChart(plotData: IPlotData[]) {
    console.log(`Drawing chart`)

    const chartElement = document.getElementById("chart") as HTMLCanvasElement | null;
    if (chartElement !== null) {
        new Chart(chartElement, {
            type: "line",
            data: {
                labels: plotData.map((dataPoint) => dataPoint.age),
                datasets: [
                    {
                        data: plotData.map((dataPoint) => dataPoint.investmentsValue),
                        borderColor: "dodgerblue"
                    }
                ]
            }
        });
    }
}
