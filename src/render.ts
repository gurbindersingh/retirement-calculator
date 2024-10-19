import { settings } from "./settings";
import { inputs } from "./inputs";
import { setupEventListeners } from "./setup";
import { PlotData } from "./IPlotData";

function renderControls() {
    let footnoteCounter = 1;
    const settingsMap = new Map(Object.entries(settings));

    const inputElements = inputs
        .map((input) => {
            const {
                label,
                description,
                errorMessage,
                settingsKey,
                isPercentage,
                id,
                footnote,
                min,
                max
            } = input;
            const value = settingsMap.get(settingsKey)!;

            const footnoteLink = footnote
                ? `<a href="#${id}-footnote">[${footnoteCounter++}]</a>`
                : "";
            const helpText = `<p id="${id}-help" class="help">
                                ${description} ${footnoteLink}
                              </p>`;
            const errorText = `<p id="${id}-error" class="help is-danger is-hidden">
                                ${errorMessage ? errorMessage : ""}
                              </p>`;

            return `<div class="field cell">
                        <label class="label" for="${id}">${label}</label>
                        <input 
                            value="${isPercentage ? (100 * value).toPrecision(3) : value}"
                            step="${isPercentage ? 0.1 : 1}"
                            aria-label="${label}"
                            id="${id}"
                            class="input"
                            type="number"
                            min="${min}"
                            max="${max}"
                        />
                        ${helpText}
                        ${errorText}
                    </div>`;
        })
        .join("");

    const resetButton = `<button id="reset" class="button is-ghost has-text-grey-light m-auto">
                             Reset values
                         </button>`;

    document.getElementById("controls")!.innerHTML = inputElements + resetButton;

    setupEventListeners();
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

function renderTable(data: PlotData[]) {
    const rows = data
        .map(
            (row: PlotData) =>
                `<tr>
                    <td>${row.year}</td>
                    <td>${Math.round(row.investments)}</td>
                    <td>${Math.round(row.income)}</td>
                    <td>${Math.round(row.livingCosts)}</td>
                </tr>`
        )
        .join("");
    document.getElementById("data-table")!.innerHTML = rows;
}

export { renderControls, renderFootnotes, renderTable };
