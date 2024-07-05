import { inputs, settings } from "./settings";

export function renderInputs() {
    console.log("Rendering input elements");

    const settingsMap = new Map(Object.entries(settings));
    const inputElements = inputs
        .map(({ label, description, settingsKey, isPercentage, id }) => {
            const value = settingsMap.get(settingsKey)!;
            return `
        <div class="field cell">
            <label class="label">${label}</label>
            <input 
                value="${isPercentage ? (100 * value).toPrecision(3) : value}"
                step="${isPercentage ? 0.05 : 1}"
                aria-label="${label}"
                id="${id}"
                class="input"
                type="number"
                min="0"
            />
            <p class="help">${description}</p>
        </div>`;
        })
        .join("");

    document.getElementById("controls")!.innerHTML =
        `<h3 class="is-sr-only">Inputs</h3>` +
        inputElements +
        `<button id="reset" class="button is-ghost has-text-grey-light m-auto">
            Reset values
        </button>`;
}

// renderInputs();
