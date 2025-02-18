const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];
// create a transform function that will transform the insightData a data array where name is the severity and value is the count of results by severity
// so critical should be [{name: 'critical', value: 2}]

export const transformInsightData = (data: any) => {
  const severityMap = data.results.reduce((acc: Record<string, number>, item: any) => {
    const total = Object.values(item.totalByStatus).reduce((sum: number, count: number) => sum + count, 0);
    if (acc[item.severity]) acc[item.severity] += total;
    else acc[item.severity] = total;
    return acc;
  }, {});

  return Object.entries(severityMap).map(([severity, count]) => ({
    name: severity.toLocaleUpperCase(),
    severity: severity,
    value: count,
  }));
};

// ok now create a transform where the data looks like this:
// {
//   name: 'Open',
//   key: 'critical',
//   value: 2,
//   color: '#E73E51',
// }

export const transformInsightDataByStatus = (data: any) => {
  const severityMap = data.results.reduce((acc: Record<string, number>, item: any) => {
    Object.entries(item.totalByStatus).forEach(([status, count]) => {
      const key = `${item.severity}-${status}`;
      acc[key] = (acc[key] || 0) + Number(count);
    });
    return acc;
  }, {});

  return Object.entries(severityMap).map(([key, count]) => {
    const [severity, status] = key.split('-');
    return {
      name: status.toLocaleUpperCase(),
      status,
      severity,
      value: count,
    };
  });
};

export const insightData = {
  results: [
    {
      severity: 'critical',
      ruleId: 'd1aa7810-1204-42a1-91ce-afb60f50e7e6',
      ruleName: 'Privileged Account Without Multi-Factor Authentication',
      totalByStatus: {
        open: 1,
        pending: 0,
        deferred: 0,
        exception: 0,
        resolved: 4,
      },
    },
    {
      severity: 'critical',
      ruleId: '8f7cdcd9-607c-4bf7-b2eb-14deccbcfc04',
      ruleName: 'Active Account For Terminated Person',
      totalByStatus: {
        open: 3,
        pending: 0,
        deferred: 0,
        exception: 0,
        resolved: 0,
      },
    },
    {
      severity: 'high',
      ruleId: '073f2548-30bf-4733-9450-9f653376a93f',
      ruleName: 'Unused 3rd Party Account',
      totalByStatus: {
        open: 17,
        pending: 0,
        deferred: 0,
        exception: 0,
        resolved: 0,
      },
    },
    {
      severity: 'high',
      ruleId: '2e6b4293-844c-4a0f-a40e-34d98d9cf612',
      ruleName: 'Account With Unused Directly Assigned Application',
      totalByStatus: {
        open: 3,
        pending: 0,
        deferred: 0,
        exception: 0,
        resolved: 3,
      },
    },
    {
      severity: 'high',
      ruleId: 'e15ca5c2-c23b-4d07-b018-3f314555efa5',
      ruleName: 'Group With Unused Application',
      totalByStatus: {
        open: 0,
        pending: 0,
        deferred: 0,
        exception: 0,
        resolved: 1,
      },
    },
    {
      severity: 'low',
      ruleId: '87e3585b-0d27-4a1b-ac11-0bb0a7cc951a',
      ruleName: 'Unused Application Accounts',
      totalByStatus: {
        open: 10,
        pending: 0,
        deferred: 0,
        exception: 0,
        resolved: 0,
      },
    },
    {
      severity: 'low',
      ruleId: '54d2085f-452a-434e-91b2-d8ce2f83ffa3',
      ruleName: 'Group With No Members',
      totalByStatus: {
        open: 1,
        pending: 0,
        deferred: 0,
        exception: 0,
        resolved: 0,
      },
    },
    {
      severity: 'low',
      ruleId: 'f1d05dcd-947d-404e-9f0d-961e667db3e5',
      ruleName: 'Duplicate Roles',
      totalByStatus: {
        open: 1,
        pending: 0,
        deferred: 0,
        exception: 0,
        resolved: 0,
      },
    },
  ],
  averageResolutionTimeInMillisecondsBySeverity: {
    medium: 726943551,
    high: 677724812.467,
    low: 3331362.326,
  },
};
