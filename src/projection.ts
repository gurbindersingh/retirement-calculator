import { IPlotData as PlotData } from "./IPlotData";
import { settings } from "./settings";

/**
 * Calculate the projections.
 *
 * @param plotData An array containing the initial values on which the
 *                 calculations will be based.
 */
export function createProjection(plotData: PlotData[]) {
    const { livingCosts } = calculateDataPoints(
        settings.retirementAge - settings.currentAge,
        settings.netSalary,
        settings.salaryIncrease,
        settings.livingCosts,
        settings.averageInflation,
        plotData
    );
    calculateDataPoints(
        settings.lifeExpectancy - settings.currentAge,
        settings.retirementIncome,
        settings.retirementIncomeIncrease,
        livingCosts,
        settings.averageInflation,
        plotData
    );
    console.log("Calculated Projections:", plotData);
}

/**
 * Calculates the data points from plotData.length to endIndex.
 *
 * @param endIndex End index
 * @param income Starting income
 * @param incomeIncrease Annual income increase
 * @param livingCosts Starting living costs
 * @param inflation Average annual inflation
 * @param plotData Array containing at least the initial data point
 * @returns The last calculate living cost, income and the array of all data points.
 */
function calculateDataPoints(
    endIndex: number,
    income: number,
    incomeIncrease: number,
    livingCosts: number,
    inflation: number,
    plotData: PlotData[]
) {
    console.log(
        `Calculating data points from index ${plotData.length} to ${endIndex - 1}`
    );

    for (let i = plotData.length; i < endIndex; i++) {
        livingCosts *= inflation;
        income *= incomeIncrease;
        const previous = plotData[i - 1];
        const savings = income - livingCosts;

        const newEntry: PlotData = {
            age: previous.age + 1,
            investmentsValue: calculateAssetValue(previous),
            savings,
            investedAmount: previous.investedAmount + savings,
            livingCosts,
            income
        };
        console.log(newEntry);
        plotData.push(newEntry);
    }
    return {
        livingCosts,
        income,
        plotData
    };
}

function calculateAssetValue(data: PlotData) {
    return data.savings >= 0
                ? data.investmentsValue * settings.rateOfReturn + data.savings
                : sell(data, settings.rateOfReturn, settings.tax);
}

function sell(data: PlotData, rateOfReturn: number, tax: number) {
    const deficit = data.savings;
    const assetGrowth = data.investmentsValue / data.investedAmount;
    const grossValue = calculateGrossValue(Math.abs(deficit), assetGrowth, tax);
    console.log(`Deficit of ${deficit} -> ${grossValue} to sell`);
    return (data.investmentsValue - grossValue) * rateOfReturn;
}

function calculateGrossValue(netValue: number, growthFactor: number, tax: number) {
    const profitMargin = (growthFactor - 1) / growthFactor;
    return netValue / (1 - profitMargin * tax);
}
