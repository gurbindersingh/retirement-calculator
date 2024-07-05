import { drawChart } from "./chart";
import { createProjection } from "./projection";
import { renderInputs } from "./render";
import { inputs, resetSettings, settings } from "./settings";

export function setupEventListeners() {
    inputs.forEach((input) =>
        document.getElementById(input.id)!.addEventListener("change", (event) => {
            const element = event.target as HTMLInputElement;
            // console.log(element);

            (settings as any)[input.settingsKey] = input.isPercentage
                ? element.valueAsNumber / 100
                : element.valueAsNumber;
            // console.log(settings);

            const data = createProjection();
            drawChart(data);
        })
    );
    document.getElementById("reset")!.addEventListener("click", () => {
        resetSettings();
        renderInputs();
        const data = createProjection();
        drawChart(data);
    });
}
