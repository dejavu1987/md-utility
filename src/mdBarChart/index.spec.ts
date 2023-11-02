import { generateMDBarChart } from ".";

describe("generateMDBarChart", () => {
  test("generates Markdown bar chart with valid CSV data", () => {
    const csvDataValid = `Feature,Progress
Icon management,70
General and Wifi Settings,80
Menu management,50`;

    const expectedOutputValid = `| Feature | Progress |
| ------- | -------- |
| Icon management | ███████ 70% |
| General and Wifi Settings | ████████ 80% |
| Menu management | █████ 50% |\n`;

    const result = generateMDBarChart(csvDataValid);
    console.log("🪵 \x1b[1m result \x1b[0m");
    console.log(result);

    expect(result).toBe(expectedOutputValid);
  });

  test("generates Markdown bar chart with empty CSV data", () => {
    const csvDataEmpty = "";

    const expectedOutputEmpty = "";

    const result = generateMDBarChart(csvDataEmpty);
    expect(result).toBe(expectedOutputEmpty);
  });

  test("generates Markdown bar chart with invalid CSV data (missing progress values)", () => {
    const csvDataInvalid = `Feature,Progress
Icon management,
General and Wifi Settings,80
Menu management,50`;

    const expectedOutputInvalid = `| Feature | Progress |
| ------- | -------- |
| General and Wifi Settings | ████████ 80% |
| Menu management | █████ 50% |\n`;
    console.log("🪵 \x1b[1m result \x1b[0m");
    console.log(expectedOutputInvalid);

    const result = generateMDBarChart(csvDataInvalid);
    expect(result).toBe(expectedOutputInvalid);
  });
});
