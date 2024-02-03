import { BetaAnalyticsDataClient } from "@google-analytics/data";

const analyticsDataClient = new BetaAnalyticsDataClient();

const propertyId = process.env.PROPERTY_ID;

export async function getVisitorStatistic() {
  const [response] = await analyticsDataClient.runReport({
    property: `properties/${propertyId}`,
    dateRanges: [
      {
        startDate: "30daysAgo",
        endDate: "today",
      },
    ],
    dimensions: [
      {
        name: "date",
      },
    ],
    metrics: [
      {
        name: "activeUsers",
      },
      {
        name: "newUsers",
      },
    ],
  });

  return response;
}
