import {
    Chart,
    LineController,
    LineElement,
    PointElement,
    CategoryScale,
    LinearScale,
    Legend
} from "chart.js";
import { IPlotData } from "./IPlotData";

Chart.register(
    LineController,
    LineElement,
    PointElement,
    CategoryScale,
    LinearScale,
    Legend
);

export function drawChart(plotData: IPlotData[]) {
    console.log(`Drawing chart`);

    const chartElement = document.getElementById("chart") as HTMLCanvasElement | null;
    if (chartElement !== null) {
        new Chart(chartElement, {
            type: "line",
            data: {
                labels: plotData.map((dataPoint) => dataPoint.age),
                datasets: [
                    {
                        label: "Investments/Savings",
                        data: plotData.map((dataPoint) => dataPoint.investments),
                        borderColor: "dodgerblue",
                        borderWidth: 2,
                        pointRadius: 0
                    },
                    {
                        label: "Income",
                        data: plotData.map((dataPoint) => dataPoint.income),
                        borderColor: "mediumseagreen",
                        borderWidth: 2,
                        pointRadius: 0
                    },
                    {
                        label: "Living costs",
                        data: plotData.map((dataPoint) => dataPoint.livingCosts),
                        borderColor: "tomato",
                        borderWidth: 2,
                        pointRadius: 0
                    }
                ]
            }
        });
    }
}
