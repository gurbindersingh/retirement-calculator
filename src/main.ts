import "./style.css";
import { settings } from "./settings";
import { IPlotData as PlotData } from "./IPlotData";
import { createProjection } from "./projection";
import { drawChart } from "./chart";


const plotData: [PlotData] = [
    {
        age: settings.currentAge,
        investmentsValue: settings.previousSavings,
        savings: settings.netSalary * settings.savingsPercentage,
        investedAmount: settings.previousSavings,
        income: settings.netSalary,
        livingCosts: settings.livingCosts,
    }
];

createProjection(plotData);
drawChart(plotData)
