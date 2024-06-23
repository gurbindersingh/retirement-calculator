import { IPlotData as PlotData } from "./IPlotData";
import { settings } from "./settings";

/**
 * Initialize the necessary data points for creating the projection.
 *
 * @returns An array containing the initialized data points.
 */
function initializeDataStructure(): PlotData[] {
    const data: PlotData[] = Array(settings.lifeExpectancy - settings.currentAge)
        .fill(0)
        .map((_, index: number) => ({
            year: index,
            age: settings.currentAge + index,
            inflation: Math.pow(settings.averageInflation, index)
        }))
        .map((value: { year: number; age: number; inflation: number }) => ({
            ...value,
            income:
                value.age < settings.retirementAge
                    ? settings.netSalary
                    : settings.retirementIncome,
            incomeIncrease:
                value.age < settings.retirementAge
                    ? Math.pow(settings.salaryIncrease, value.year)
                    : Math.pow(
                          settings.retirementIncomeIncrease,
                          value.age - settings.retirementAge
                      )
        }))
        .map(
            (value: {
                year: number;
                age: number;
                inflation: number;
                income: number;
                incomeIncrease: number;
            }) => ({
                ...value,
                income: value.income * value.incomeIncrease,
                livingCosts: settings.livingCosts * value.inflation
            })
        )
        .map(
            (value: {
                year: number;
                age: number;
                inflation: number;
                income: number;
                incomeIncrease: number;
                livingCosts: number;
            }) => ({
                ...value,
                savings: value.income - value.livingCosts,
                investments: 0,
                investedAmount: 0
            })
        );
    data[0].savings += settings.currentSavings;
    console.log(data);
    return data;
}

/**
 * Given the net value of an asset. Calculate the gross value.
 *
 * @param netValue Net value of asset (after tax)
 * @param growthFactor Growth of the asset
 * @param tax Capital gains tax when selling asset.
 * @returns The gross value of the asset.
 */
function calculateGrossValue(netValue: number, growthFactor: number, tax: number) {
    const profitMargin = (growthFactor - 1) / growthFactor;
    return netValue / (1 - profitMargin * tax);
}

/**
 * Calculate the projections.
 *
 * @param plotData An array containing the initial values on which the
 *                 calculations will be based.
 */
export function createProjection() {
    const projections = initializeDataStructure();

    for (let i = 1; i < projections.length; i++) {
        const previous = projections[i - 1];
        const current = projections[i];

        if (current.savings >= 0) {
            console.log("Investing");
            current.investedAmount = previous.investedAmount + current.savings;
            current.investments =
                previous.investments * settings.rateOfReturn + current.savings;
        } else if (previous.investments > 0) {
            const deficit = Math.abs(current.savings);
            const growth = previous.investments / previous.investedAmount;
            const toSell = calculateGrossValue(deficit, growth, settings.tax);
            console.log(`Selling ${toSell}. Net ${deficit}`);

            current.investments = Math.max(
                0,
                (previous.investments - toSell) * settings.rateOfReturn
            );
            current.investedAmount = Math.max(
                0,
                previous.investedAmount - toSell / growth
            );
        }
    }
    console.log(projections);
    return projections;
}
