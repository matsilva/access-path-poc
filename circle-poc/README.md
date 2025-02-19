# Circle POC - Data Visualization

A proof of concept for visualizing hierarchical data using a multi-layered circular chart built with React, TypeScript, and Recharts.

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

## Core Components

### RainbowChart (`src/RainbowChart.tsx`)

The main visualization component that renders a multi-layered pie chart showing severity and status distribution of issues. Features:

### Components

#### InsightTooltip (`src/components/InsightTooltip.tsx`)

A custom tooltip component that displays detailed information when hovering over chart segments

#### ActiveShape (`src/components/ActiveShape.tsx`)

Handles the active/hover state visualization for chart segments.

### Data Layer (`src/data.ts`)

Includes dummy data and two main transformation functions:

1. `transformInsightData`: Transforms raw insight data into severity-based aggregates for the outer ring
2. `transformInsightDataByStatus`: Creates status-based breakdowns per severity level for inner rings and tooltips

## Data Structure

```typescript
interface InsightData {
  results: InsightResult[];
  averageResolutionTimeInMillisecondsBySeverity: Record<string, number>;
}
```

Each `InsightResult` contains severity, rule info, status counts, and resolution metrics.

## Recharts Documentation References

The following Recharts components are used in this project:

- [PieChart](https://recharts.org/en-US/api/PieChart) - The container component for pie charts
- [Pie](https://recharts.org/en-US/api/Pie) - The core pie chart component used for each layer
- [Cell](https://recharts.org/en-US/api/Cell) - Used for individual segment styling
- [Tooltip](https://recharts.org/en-US/api/Tooltip) - Base component for custom tooltips
