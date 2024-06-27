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

function createDatasets(plotData: IPlotData[]) {
    return [
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
    ];
}

function createChart(plotData: IPlotData[]) {
    console.log("Creating chart object");

    const chartElement = document.getElementById("chart") as HTMLCanvasElement;
    return new Chart(chartElement, {
        type: "line",
        data: {
            labels: plotData.map((dataPoint) => dataPoint.age),
            datasets: createDatasets([])
        }
    });
}

export function drawChart(plotData: IPlotData[]) {
    console.log(
        `Drawing chart with values`,
        plotData.map(({ investments, income, livingCosts }) => ({
            investments,
            income,
            livingCosts
        }))
    );
    chart.data.labels = plotData.map((dataPoint) => dataPoint.age); 
    chart.data.datasets = createDatasets(plotData)
    chart.update()
}

let chart = createChart([]);
