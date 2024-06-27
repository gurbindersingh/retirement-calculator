import { IPlotData as PlotData } from "./IPlotData";
import { settings } from "./settings";

/**
 * Initialize the necessary data points for creating the projection.
 *
 * @returns An array containing the initialized data points.
 */
function initializeDataStructure(): PlotData[] {
    console.log("Settings before initialization:", settings);
    
    settings.livingCosts = settings.netSalary * (1 - settings.savingsPercentage);
    settings.salaryIncrease += 1;
    settings.retirementIncomeIncrease += 1;
    settings.averageInflation += 1;
    settings.rateOfReturn += 1;

    console.log("Initializing data with settings:", settings);    

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
    data[0].investments += settings.currentSavings;
    data[0].investedAmount += settings.currentSavings;
    console.log("Initialized data:", data);
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
    console.log("Creating projections");
    console.log(settings);
    
    
    for (let i = 1; i < projections.length; i++) {
        const previous = projections[i - 1];
        const current = projections[i];

        if (current.savings >= 0) {
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
    console.log("Created projections:", projections);
    return projections;
}
