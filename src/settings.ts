const settings = {
    currentAge: 30,
    retirementAge: 65,
    lifeExpectancy: 90,
    netSalary: 2600 * 14,
    salaryIncrease: 1.0225,
    savingsPercentage: 0.14,
    currentSavings: 0,
    livingCosts: -100,
    averageInflation: 1.03,
    retirementIncome: 54345,
    retirementIncomeIncrease: 1.0225,
    rateOfReturn: 1.075,
    tax: 0.275
};

const inputs: {
    label: string;
    description: string;
    settingsKey: string;
    isPercentage: boolean;
    id: string
}[] = [
    {
        label: "Current Age",
        description: "",
        isPercentage: false,
        settingsKey: "currentAge",
        id: "current_age"
    },
    {
        label: "Retirement Age",
        description: "",
        isPercentage: false,
        settingsKey: "retirementAge",
        id: "retirement_age"
    },
    {
        label: "Life Expectancy",
        description: "",
        isPercentage: false,
        settingsKey: "lifeExpectancy",
        id: "life_expectancy"
    },
    {
        label: "Annual Net Salary",
        description: "",
        isPercentage: false,
        settingsKey: "netSalary",
        id: "net_salary"
    },
    {
        label: "Annual Salary Increase (in Percent)",
        description: "",
        isPercentage: true,
        settingsKey: "salaryIncrease",
        id: "salary_increase"
    },
    {
        label: "Current Savings Contributions (in Percent)",
        description: "",
        isPercentage: true,
        settingsKey: "savingsPercentage",
        id: "savings_percentage"
    },
    {
        label: "Previous Savings",
        description: "",
        isPercentage: false,
        settingsKey: "currentSavings",
        id: "current_savings"
    },
    {
        label: "Average Annual Inflation",
        description: "",
        isPercentage: true,
        settingsKey: "averageInflation",
        id: "average_inflation"
    },
    {
        label: "Annual Retirement Income",
        description: "",
        isPercentage: false,
        settingsKey: "retirementIncome",
        id: "retirement_income"
    },
    {
        label: "Annual Retirement Income Increase",
        description: "",
        isPercentage: true,
        settingsKey: "retirementIncomeIncrease",
        id: "retirement_income_increase"
    },
    {
        label: "Rate of Return",
        description: "",
        isPercentage: true,
        settingsKey: "rateOfReturn",
        id: "rate_of_return"
    },
    {
        label: "Tax",
        description: "",
        isPercentage: true,
        settingsKey: "tax",
        id: "tax"
    }
];

export { settings, inputs };
