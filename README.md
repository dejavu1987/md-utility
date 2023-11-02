# md-utility [![npm version](https://badge.fury.io/js/md-utility.svg)](https://badge.fury.io/js/md-utility) ![](https://github.com/dejavu1987/md-utility/actions/workflows/build-publish.yml/badge.svg)

`md-utility` is a Markdown utility.

## Functions:

`generateMDBarChart()`

### Description

The `generateMDBarChart` function takes a CSV data string and generates a Markdown bar chart for visualizing progress or any other data.

### Usage

```javascript
const csvData = `Feature,Progress
Icon management,70
General and Wifi Settings,80
Menu management,50`;

generateMarkdown(csvData);
```

#### Output

![](./src/mdBarChart/screenshot.png)
