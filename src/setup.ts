import { drawChart } from "./chart";
import { createProjection } from "./projection";
import { inputs, settings } from "./settings";

export function setupEventListeners() {
    inputs.forEach((input) =>
        document.getElementById(input.id)!.addEventListener("change", (event) => {
            const element = event.target as HTMLInputElement;
            // console.log(element);

            (settings as any)[input.settingsKey] = input.isPercentage
                ? element.valueAsNumber / 100
                : element.valueAsNumber;
            // console.log(settings);

            window.localStorage.setItem("settings", JSON.stringify(settings));
            const data = createProjection();
            drawChart(data);
        })
    );
}
