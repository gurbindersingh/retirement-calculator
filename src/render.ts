import { inputs, settings } from "./settings";

export function renderInputs() {
    const settingsMap = new Map(Object.entries(settings));

    document.getElementById("controls")!.innerHTML = inputs
        .map(({ label, description, settingsKey, isPercentage, id }) => {
            const value = settingsMap.get(settingsKey)!;
            return `
            <div class="field">
                <label class="label">${label}</label>
                <input 
                    value="${isPercentage ? (100 * (value - 1)).toPrecision(3) : value}"
                    aria-label="${label}"
                    id="${id}"
                    class="input"
                    type="number"
                />
                <p class="help">${description}</p>
            </div>`;
        })
        .join("");
}

// renderInputs();
