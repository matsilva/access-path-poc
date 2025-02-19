# Bar Chart POC - Data Visualization

A proof of concept for visualizing time-series data using a stacked bar chart built with React, TypeScript, and Recharts. This visualization shows the relationship between created and resolved items over time.

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

## Core Components

### BarChart (`src/BarChart.tsx`)

The main visualization component that renders a stacked bar chart showing the relationship between created and resolved items over time. Features:

- Positive and negative stacking to show created vs resolved items
- Custom tooltips with percentage breakdowns
- Time-based x-axis with formatted dates

### Components

#### CustomTooltip

A custom tooltip component that displays:

- Formatted date
- Created and resolved counts
- Percentage distribution between created and resolved items
- Styled container with clear visual hierarchy

### Data Structure

```typescript
interface DataPoint {
  timestamp: number;
  resolvedCount: number;
  createdCountInverted: number;
}
```

Each data point represents a specific time period with:

- `timestamp`: The date/time of the measurement
- `resolvedCount`: Number of items resolved (displayed as positive values)
- `createdCountInverted`: Number of new items created (displayed as negative values for stacking)

## Recharts Documentation References

The following Recharts components are used in this project:

- [BarChart](https://recharts.org/en-US/api/BarChart) - The container component for bar charts
- [Bar](https://recharts.org/en-US/api/Bar) - The core bar component used for stacking
- [XAxis](https://recharts.org/en-US/api/XAxis) - Displays time-based horizontal axis
- [YAxis](https://recharts.org/en-US/api/YAxis) - Displays value-based vertical axis
- [Tooltip](https://recharts.org/en-US/api/Tooltip) - Base component for custom tooltips
