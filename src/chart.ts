import {
    Chart,
    LineController,
    LineElement,
    PointElement,
    CategoryScale,
    LinearScale,
    Legend,
    Title,
    Tooltip
} from "chart.js";
import { PlotData } from "./IPlotData";

Chart.register(
    LineController,
    LineElement,
    PointElement,
    CategoryScale,
    LinearScale,
    Legend,
    Title,
    Tooltip
);

function createDatasets(plotData: PlotData[]) {
    return [
        {
            label: "Investments/Savings",
            data: plotData.map((dataPoint) => dataPoint.investments),
            borderColor: "dodgerblue"
        },
        {
            label: "Income",
            data: plotData.map((dataPoint) => dataPoint.income),
            borderColor: "mediumseagreen"
        },
        {
            label: "Living costs",
            data: plotData.map((dataPoint) => dataPoint.livingCosts),
            borderColor: "tomato"
        }
    ];
}

function createChart(plotData: PlotData[]) {
    console.log("Creating chart");

    document.getElementById("chart-container")!.innerHTML = `
        <h3 class="is-sr-only">Chart</h3>
        <canvas id="chart" height="${
            window.innerWidth > window.innerHeight ? 100 : 200
        }"></canvas>`;

    const chartElement = document.getElementById("chart") as HTMLCanvasElement;
    return new Chart(chartElement, {
        type: "line",
        data: {
            labels: plotData.map((dataPoint) => dataPoint.age),
            datasets: createDatasets([])
        },
        options: {
            datasets: {
                line: {
                    borderWidth: 2,
                    pointRadius: 0,
                    pointHitRadius: 5
                }
            }
        }
    });
}

export function drawChart(plotData: PlotData[]) {
    console.log(
        `Drawing chart with values`,
        plotData.map(({ investments, income, livingCosts }) => ({
            investments,
            income,
            livingCosts
        }))
    );
    chart.data.labels = plotData.map((dataPoint) => dataPoint.age);
    chart.data.datasets = createDatasets(plotData);
    chart.update();
}

let chart = createChart([]);
