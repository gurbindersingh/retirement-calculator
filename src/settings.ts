const settings = {
    currentAge: 30,
    retirementAge: 65,
    lifeExpectancy: 90,
    netSalary: 2600 * 14,
    salaryIncrease: 0.0225,
    savingsPercentage: 0.15,
    currentSavings: 0,
    livingCosts: 0,
    averageInflation: 0.03,
    retirementIncome: 54345,
    retirementIncomeIncrease: 0.0225,
    rateOfReturn: 0.075,
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
        label: "Salary Increase",
        description: "",
        isPercentage: true,
        settingsKey: "salaryIncrease",
        id: "salary_increase"
    },
    {
        label: "Previous Savings",
        description: "",
        isPercentage: false,
        settingsKey: "currentSavings",
        id: "current_savings"
    },
    {
        label: "Current Savings Contributions",
        description: "",
        isPercentage: true,
        settingsKey: "savingsPercentage",
        id: "savings_percentage"
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
        label: "Retirement Income Increase",
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
