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
    console.log(`Calculating data points from index ${plotData.length} to ${endIndex - 1}`)

    for (let i = plotData.length; i < endIndex; i++) {
        livingCosts *= inflation;
        income *= incomeIncrease;
        const previous = plotData[i - 1];
        const age = previous.age + 1;
        const savings = income - livingCosts;
        const investedAmount = previous.investedAmount + savings;
        const assetValue =
            previous.savings >= 0
                ? previous.assetValue * settings.rateOfReturn + previous.savings
                : sell(
                      previous.assetValue,
                      previous.assetValue / previous.investedAmount,
                      settings.rateOfReturn,
                      previous.savings,
                      settings.tax
                  );

        plotData.push({
            age,
            assetValue,
            savings,
            investedAmount,
            livingCosts,
            income
        });
    }
    return {
        livingCosts,
        income,
        plotData
    };
}

function sell(
    assetValue: number,
    assetGrowth: number,
    rateOfReturn: number,
    deficit: number,
    tax: number
) {
    return (
        (assetValue - calculateGrossValue(Math.abs(deficit), assetGrowth, tax)) *
        rateOfReturn
    );
}

function calculateGrossValue(netValue: number, growthFactor: number, tax: number) {
    const profitMargin = (growthFactor - 1) / growthFactor;
    return netValue / (1 - profitMargin * tax);
}
