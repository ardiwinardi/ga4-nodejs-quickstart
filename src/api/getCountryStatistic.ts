import { BetaAnalyticsDataClient } from "@google-analytics/data";

const analyticsDataClient = new BetaAnalyticsDataClient();

const propertyId = process.env.PROPERTY_ID;

export async function getCountryStatistic() {
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
        name: "country",
      },
    ],
    metrics: [
      {
        name: "activeUsers",
      },
    ],
  });

  return response;
}
