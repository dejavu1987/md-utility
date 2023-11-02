export const generateMDBarChart = (csv: string): string => {
  const rows = csv.split("\n");
  const header = rows[0].split(",");
  const data: Record<string, number> = {};

  for (let i = 1; i < rows.length; i++) {
    const row = rows[i].split(",");
    if (row.length === header.length) {
      const feature = row[0].trim();
      const progress = parseFloat(row[1].trim());
      if (!isNaN(progress)) {
        data[feature] = progress;
      }
    }
  }

  let markdown = `| ${header[0]} | ${header[1]} |\n`;
  markdown += `| ${"-".repeat(header[0].length)} | ${"-".repeat(
    header[1].length
  )} |\n`;

  for (const feature in data) {
    if (data.hasOwnProperty(feature)) {
      const progress = data[feature];
      const progressBar =
        "█".repeat(Math.round(progress / 10)) + " " + progress + "%";
      markdown += `| ${feature} | ${progressBar} |\n`;
    }
  }

  return markdown;
};
