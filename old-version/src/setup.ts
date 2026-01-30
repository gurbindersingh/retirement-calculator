import { drawChart } from "./chart";
import { createProjection } from "./projection";
import { renderControls, renderTable } from "./render";
import { resetSettings, settings } from "./settings";
import { inputs, toggleInputErrorHints } from "./inputs";

export function setupEventListeners() {
    inputs.forEach((input) =>
        document.getElementById(input.id)!.addEventListener("change", (event) => {
            const element = event.target as HTMLInputElement;

            const newValue = input.isPercentage
                ? element.valueAsNumber / 100
                : element.valueAsNumber;

            (settings as any)[input.settingsKey] = newValue;
            window.localStorage.setItem("settings", JSON.stringify(settings));

            if (input.isValid()) {
                toggleInputErrorHints(input.id, input.isValid());
                const start = Date.now();
                const data = createProjection();
                drawChart(data);
                renderTable(data);
                console.log(`Time to render: ${Date.now() - start} ms`);
            } else {
                toggleInputErrorHints(input.id, input.isValid());
            }
            if (input.runOnChange) input.runOnChange();
        })
    );

    document.getElementById("reset")!.addEventListener("click", () => {
        resetSettings();
        renderControls();
        const data = createProjection();
        drawChart(data);
        renderTable(data);
    });
}
