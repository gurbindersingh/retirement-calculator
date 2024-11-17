interface Settings {
    currentAge: number;
    retirementAge: number;
    lifeExpectancy: number;
    netSalary: number;
    salaryIncrease: number;
    monthlySavings: number;
    currentSavings: number;
    livingCosts: number;
    averageInflation: number;
    retirementIncome: number;
    retirementIncomeIncrease: number;
    rateOfReturn: number;
    tax: number;
}

const defaults = {
    currentAge: 30,
    retirementAge: 65,
    lifeExpectancy: 80,
    netSalary: 30000,
    salaryIncrease: 0.02,
    monthlySavings: 375,
    currentSavings: 0,
    livingCosts: 0,
    averageInflation: 0.03,
    retirementIncome: 50000,
    retirementIncomeIncrease: 0,
    rateOfReturn: 0.05,
    tax: 0.275
};

let settings: Settings = window.localStorage.getItem("settings")
    ? JSON.parse(window.localStorage.getItem("settings")!)
    : defaults;

function resetSettings() {
    settings = defaults;
    saveSettings();
}

function saveSettings() {
    window.localStorage.setItem("settings", JSON.stringify(settings));
}

export { settings, resetSettings, saveSettings };
