import { inputs, settings } from "./settings";

export function renderInputs() {
    console.log("Rendering input elements");

    const settingsMap = new Map(Object.entries(settings));

    document.getElementById("controls")!.innerHTML =
        `<h3 class="is-sr-only">Inputs</h3>` +
        inputs
            .map(({ label, description, settingsKey, isPercentage, id }) => {
                const value = settingsMap.get(settingsKey)!;
                return `
            <div class="field cell">
                <label class="label">${label}</label>
                <input 
                    value="${isPercentage ? (100 * value).toPrecision(3) : value}"
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
}

// renderInputs();
