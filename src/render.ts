import { settings } from "./settings";
import { inputs } from "./inputs";

function renderControls() {
    let footnoteCounter = 1;
    const settingsMap = new Map(Object.entries(settings));
    
    const inputElements = inputs
        .map((input) => {
            const { label, description, settingsKey, isPercentage, id, footnote } = input;
            const value = settingsMap.get(settingsKey)!;

            const footnoteLink = footnote
                ? `<a href="#${id}-footnote">[${footnoteCounter++}]</a>`
                : "";
            const helpText = `<p id="${id}-help" class="help">
                                ${description} ${footnoteLink}
                              </p>`;

            return `<div class="field cell">
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
                        ${helpText}
                    </div>`;
        })
        .join("");

    const resetButton = `<button id="reset" class="button is-ghost has-text-grey-light m-auto">
                             Reset values
                         </button>`;

    document.getElementById("controls")!.innerHTML =
        `<h3 class="is-sr-only">Inputs</h3>` + inputElements + resetButton;
}

function renderFootnotes() {
    const footnotes = inputs
        .filter((input) => input.footnote)
        .map((input, index) => {
            const { id, footnote } = input;
            return `<p id="${id}-footnote" class="has-text-grey">
                        [${index + 1}] ${footnote}
                    </p>`;
        })
        .join("");
    document.getElementById("footnotes")!.innerHTML = footnotes;
}

export { renderControls, renderFootnotes };
