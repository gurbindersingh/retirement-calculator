import { drawChart } from "./chart";
import { createProjection } from "./projection";
import { inputs, settings } from "./settings";

export function setupEventListeners() {
    inputs.forEach((input) =>
        document.getElementById(input.id)!.addEventListener("change", (event) => {
            const element = (event.target as HTMLInputElement)
            console.log(element.valueAsNumber);
            (settings as any)[input.settingsKey] = element.valueAsNumber;
            const data = createProjection();
            drawChart(data);
        })
    );
}
