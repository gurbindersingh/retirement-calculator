import { settings } from "./settings";

interface Inputs {
    label: string;
    description: string;
    settingsKey: string;
    isPercentage: boolean;
    id: string;
    footnote?: string;
    isValid?: () => boolean;
    min: number;
    max: number;
}

const inputs: Inputs[] = [
    {
        label: "Current Age",
        description: "",
        isPercentage: false,
        settingsKey: "currentAge",
        id: "current-age",
        isValid: () => settings.currentAge < settings.retirementAge,
        min: 0,
        max: 150
    },
    {
        label: "Retirement Age",
        description: "",
        isPercentage: false,
        settingsKey: "retirementAge",
        id: "retirement-age",
        isValid: () => settings.retirementAge < settings.lifeExpectancy,
        min: 0,
        max: 150
    },
    {
        label: "Life Expectancy",
        description: "",
        isPercentage: false,
        settingsKey: "lifeExpectancy",
        id: "life-expectancy",
        min: 0,
        max: 150
    },
    {
        label: "Annual Net Salary",
        description: "This is your take home salary after taxes",
        isPercentage: false,
        settingsKey: "netSalary",
        id: "net-salary",
        min: 0,
        max: 1_000_000_000
    },
    {
        label: "Salary Increase (in %)",
        description: `The average salary increase you expect per year`,
        isPercentage: true,
        settingsKey: "salaryIncrease",
        id: "salary-increase",
        footnote: `If your salary does not increase every year, you can easily
                    calculate the yearly value by taking the n-th root of the total
                    increase, where n is the number of years. For example, if you started
                    your job in 2024 with an annual net salary of 50,000 and then in 2027
                    you switch jobs and have a salary of 55,000, this is an increase of
                    10% (a factor of <code>1.10</code>). To find the annual increase,
                    calculate <code>nth_root(3, 1.10) or 1.10^(1/3) = ~1.03228...</code>,
                    which is approximately 3.23%.`,
        min: 0,
        max: 100
    },
    {
        label: "Current Savings",
        description: `The total sum of your current savings`,
        isPercentage: false,
        settingsKey: "currentSavings",
        id: "current-savings",
        footnote: `This amount is also assumed to be invested with the same rate of
                    return as specified above.`,
        min: 0,
        max: 1_000_000_000
    },
    {
        label: "Current Savings Contributions (in %)",
        description: `The percentage of your salary that goes towards savings`,
        isPercentage: true,
        settingsKey: "savingsPercentage",
        id: "savings-percentage",
        footnote: `This is what you currently contribute towards your savings or
                    investments. It is also used to determine the current living costs by
                    subtracting the amount from your salary. Any further saving
                    contributions are calculated by subtracting the living costs from the
                    salary.`,
        min: -100,
        max: 100
    },
    {
        label: "Average Annual Inflation (in %)",
        description: "",
        isPercentage: true,
        settingsKey: "averageInflation",
        id: "average-inflation",
        min: -100,
        max: 100
    },
    {
        label: "Annual Retirement Income",
        description: "A retirement income like a pension",
        isPercentage: false,
        settingsKey: "retirementIncome",
        id: "retirement-income",
        min: 0,
        max: 1_000_000_000
    },
    {
        label: "Retirement Income Increase (in %)",
        description: `The annual increase of your retirement income`,
        isPercentage: true,
        settingsKey: "retirementIncomeIncrease",
        id: "retirement-income-increase",
        footnote: `In some places, the pension you receive is increased each year to
                    account for inflation. If this is not the case where you are, just
                    leave this value at 0.`,
        min: 0,
        max: 100
    },
    {
        label: "Rate of Return (in %)",
        description: "The average rate of return on your savings or investments",
        isPercentage: true,
        settingsKey: "rateOfReturn",
        id: "rate-of-return",
        min: 0,
        max: 100
    },
    {
        label: "Tax on Investments (in %)",
        description: "How much tax you pay on your investments when sold",
        isPercentage: true,
        settingsKey: "tax",
        id: "tax",
        min: 0,
        max: 100
    }
];

export { inputs };
