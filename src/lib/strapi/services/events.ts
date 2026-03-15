import { strapiGet } from "../client";
import type { StrapiListResponse } from "../types/common";
import type { Event } from "../types/event";

export async function getNextEvents() {
  return strapiGet<StrapiListResponse<Event>>(
    "/events",
    {
      sort: "startDate",
      filters: {
        startDate: {
          $gt: new Date().toISOString(),
        },
      },
    },
    {
      tags: ["article"],
    },
  );
}
