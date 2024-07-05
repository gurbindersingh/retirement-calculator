interface Settings {
    currentAge: number;
    retirementAge: number;
    lifeExpectancy: number;
    netSalary: number;
    salaryIncrease: number;
    savingsPercentage: number;
    currentSavings: number;
    livingCosts: number;
    averageInflation: number;
    retirementIncome: number;
    retirementIncomeIncrease: number;
    rateOfReturn: number;
    tax: number;
}

interface Inputs {
    label: string;
    description: string;
    settingsKey: string;
    isPercentage: boolean;
    id: string;
}

const settings: Settings = window.localStorage.getItem("settings")
    ? JSON.parse(window.localStorage.getItem("settings")!)
    : {
          currentAge: 30,
          retirementAge: 65,
          lifeExpectancy: 90,
          netSalary: 30000,
          salaryIncrease: 0.02,
          savingsPercentage: 0.15,
          currentSavings: 0,
          livingCosts: 0,
          averageInflation: 0.03,
          retirementIncome: 50000,
          retirementIncomeIncrease: 0,
          rateOfReturn: 0.075,
          tax: 0.275
      };

const inputs: Inputs[] = [
    {
        label: "Current Age",
        description: "",
        isPercentage: false,
        settingsKey: "currentAge",
        id: "current-age"
    },
    {
        label: "Retirement Age",
        description: "",
        isPercentage: false,
        settingsKey: "retirementAge",
        id: "retirement-age"
    },
    {
        label: "Life Expectancy",
        description: "",
        isPercentage: false,
        settingsKey: "lifeExpectancy",
        id: "life-expectancy"
    },
    {
        label: "Annual Net Salary",
        description: "This is your take home salary after taxes",
        isPercentage: false,
        settingsKey: "netSalary",
        id: "net-salary"
    },
    {
        label: "Salary Increase",
        description: `The average salary increase you expect per year <a href="#first">[1]</a>`,
        isPercentage: true,
        settingsKey: "salaryIncrease",
        id: "salary-increase"
    },
    {
        label: "Current Savings",
        description: `The total sum of your current savings <a href="#second">[2]</a>`,
        isPercentage: false,
        settingsKey: "currentSavings",
        id: "current-savings"
    },
    {
        label: "Current Savings Contributions",
        description: "The percentage of your salary that goes towards savings",
        isPercentage: true,
        settingsKey: "savingsPercentage",
        id: "savings-percentage"
    },
    {
        label: "Average Annual Inflation",
        description: "",
        isPercentage: true,
        settingsKey: "averageInflation",
        id: "average-inflation"
    },
    {
        label: "Annual Retirement Income",
        description: "A retirement income like a pension",
        isPercentage: false,
        settingsKey: "retirementIncome",
        id: "retirement-income"
    },
    {
        label: "Retirement Income Increase",
        description: `The annual increase of your retirement income <a href="#third">[3]</a>`,
        isPercentage: true,
        settingsKey: "retirementIncomeIncrease",
        id: "retirement-income-increase"
    },
    {
        label: "Rate of Return",
        description: "The average rate of return on your savings or investments",
        isPercentage: true,
        settingsKey: "rateOfReturn",
        id: "rate-of-return"
    },
    {
        label: "Capital Gains Tax",
        description: "How much tax you pay on your investments when sold",
        isPercentage: true,
        settingsKey: "tax",
        id: "tax"
    }
];

export { settings, inputs };
