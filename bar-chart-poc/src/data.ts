export const transformer = (data: typeof barChartData) => {
  return data.map((item) => ({
    ...item,
    createdCountInverted: -item.createdCount, //negative value
  }));
};

export const barChartData = [
  {
    timestamp: '2025-02-19T00:00:00.000000+00:00',
    createdCount: 23,
    resolvedCount: 24,
    createdCountResult: {
      critical: 0,
      high: 1,
      medium: 0,
      low: 22,
    },
    resolvedCountResult: {
      critical: 0,
      high: 1,
      medium: 1,
      low: 22,
    },
  },
  {
    timestamp: '2025-02-18T00:00:00.000000+00:00',
    createdCount: 25,
    resolvedCount: 23,
    createdCountResult: {
      critical: 0,
      high: 0,
      medium: 2,
      low: 23,
    },
    resolvedCountResult: {
      critical: 0,
      high: 0,
      medium: 1,
      low: 22,
    },
  },
  {
    timestamp: '2025-02-17T00:00:00.000000+00:00',
    createdCount: 24,
    resolvedCount: 26,
    createdCountResult: {
      critical: 0,
      high: 1,
      medium: 1,
      low: 22,
    },
    resolvedCountResult: {
      critical: 0,
      high: 1,
      medium: 2,
      low: 23,
    },
  },
  {
    timestamp: '2025-02-16T00:00:00.000000+00:00',
    createdCount: 26,
    resolvedCount: 25,
    createdCountResult: {
      critical: 0,
      high: 0,
      medium: 2,
      low: 24,
    },
    resolvedCountResult: {
      critical: 0,
      high: 1,
      medium: 0,
      low: 24,
    },
  },
  {
    timestamp: '2025-02-15T00:00:00.000000+00:00',
    createdCount: 22,
    resolvedCount: 23,
    createdCountResult: {
      critical: 0,
      high: 1,
      medium: 1,
      low: 20,
    },
    resolvedCountResult: {
      critical: 0,
      high: 0,
      medium: 2,
      low: 21,
    },
  },
  {
    timestamp: '2025-02-14T00:00:00.000000+00:00',
    createdCount: 16,
    resolvedCount: 17,
    createdCountResult: {
      critical: 0,
      high: 0,
      medium: 0,
      low: 16,
    },
    resolvedCountResult: {
      critical: 0,
      high: 0,
      medium: 0,
      low: 17,
    },
  },
  {
    timestamp: '2025-02-13T00:00:00.000000+00:00',
    createdCount: 27,
    resolvedCount: 24,
    createdCountResult: {
      critical: 0,
      high: 0,
      medium: 3,
      low: 24,
    },
    resolvedCountResult: {
      critical: 0,
      high: 1,
      medium: 0,
      low: 23,
    },
  },
  {
    timestamp: '2025-02-12T00:00:00.000000+00:00',
    createdCount: 25,
    resolvedCount: 25,
    createdCountResult: {
      critical: 0,
      high: 0,
      medium: 1,
      low: 24,
    },
    resolvedCountResult: {
      critical: 0,
      high: 1,
      medium: 0,
      low: 24,
    },
  },
  {
    timestamp: '2025-02-11T00:00:00.000000+00:00',
    createdCount: 26,
    resolvedCount: 26,
    createdCountResult: {
      critical: 0,
      high: 0,
      medium: 1,
      low: 25,
    },
    resolvedCountResult: {
      critical: 0,
      high: 1,
      medium: 1,
      low: 24,
    },
  },
  {
    timestamp: '2025-02-10T00:00:00.000000+00:00',
    createdCount: 25,
    resolvedCount: 26,
    createdCountResult: {
      critical: 0,
      high: 0,
      medium: 1,
      low: 24,
    },
    resolvedCountResult: {
      critical: 0,
      high: 2,
      medium: 0,
      low: 24,
    },
  },
  {
    timestamp: '2025-02-09T00:00:00.000000+00:00',
    createdCount: 25,
    resolvedCount: 25,
    createdCountResult: {
      critical: 0,
      high: 1,
      medium: 0,
      low: 24,
    },
    resolvedCountResult: {
      critical: 0,
      high: 0,
      medium: 1,
      low: 24,
    },
  },
  {
    timestamp: '2025-02-08T00:00:00.000000+00:00',
    createdCount: 24,
    resolvedCount: 24,
    createdCountResult: {
      critical: 0,
      high: 1,
      medium: 0,
      low: 23,
    },
    resolvedCountResult: {
      critical: 0,
      high: 0,
      medium: 1,
      low: 23,
    },
  },
  {
    timestamp: '2025-02-07T00:00:00.000000+00:00',
    createdCount: 24,
    resolvedCount: 25,
    createdCountResult: {
      critical: 0,
      high: 0,
      medium: 0,
      low: 24,
    },
    resolvedCountResult: {
      critical: 0,
      high: 1,
      medium: 0,
      low: 24,
    },
  },
  {
    timestamp: '2025-02-06T00:00:00.000000+00:00',
    createdCount: 25,
    resolvedCount: 24,
    createdCountResult: {
      critical: 0,
      high: 0,
      medium: 0,
      low: 25,
    },
    resolvedCountResult: {
      critical: 0,
      high: 0,
      medium: 0,
      low: 24,
    },
  },
  {
    timestamp: '2025-02-05T00:00:00.000000+00:00',
    createdCount: 24,
    resolvedCount: 17,
    createdCountResult: {
      critical: 0,
      high: 0,
      medium: 1,
      low: 23,
    },
    resolvedCountResult: {
      critical: 0,
      high: 0,
      medium: 1,
      low: 16,
    },
  },
  {
    timestamp: '2025-02-04T00:00:00.000000+00:00',
    createdCount: 1,
    resolvedCount: 1,
    createdCountResult: {
      critical: 0,
      high: 0,
      medium: 0,
      low: 1,
    },
  },
];
