import { strapiGet } from "../client";
import type { StrapiListResponse, StrapiResponse } from "../types/common";
import type {
  Contact,
  HeroSection,
  ImportantInfo,
  OpeningHours,
} from "../types/museum-info";

// Single types in Strapi have a dedicated endpoint that always returns
// one object — no /id needed, no pagination, no data array.

/**
 * Fetches the hero section data from Strapi.
 *
 * This function fetches the hero section data from Strapi
 *
 * The populate option is set to `backgroundImage` to include the background image
 * data in the response.
 *
 * The tags option is set to `["hero-section"]` to include the hero section data
 * in the response.
 *
 * @returns {Promise<StrapiResponse<HeroSection>>}
 */
export async function getHeroSectionData(): Promise<
  StrapiResponse<HeroSection>
> {
  return strapiGet<StrapiResponse<HeroSection>>(
    "/hero-section",
    {
      populate: "backgroundImage",
    },
    {
      tags: ["hero-section"],
    },
  );
}

/**
 * Fetches the contact information from Strapi.
 *
 * This function fetches the contact information from Strapi.
 *
 * The tags option is set to `["contact"]` to include the contact information
 * in the response.
 *
 * @returns {Promise<StrapiResponse<Contact>>}
 */
export async function getContact(): Promise<StrapiResponse<Contact>> {
  return strapiGet<StrapiResponse<Contact>>("/contact", undefined, {
    tags: ["contact"],
  });
}

/**
 * Fetches the important information from Strapi.
 *
 * This function fetches the important information from Strapi.
 *
 * The sort option is set to `createdAt` to sort the important information by
 * creation date.
 *
 * The tags option is set to `["important-info"]` to include the important
 * information in the response.
 *
 * @returns {Promise<StrapiListResponse<ImportantInfo>>}
 */
export async function getImportantInfo(): Promise<
  StrapiListResponse<ImportantInfo>
> {
  return strapiGet<StrapiListResponse<ImportantInfo>>(
    "/important-infos",
    {
      sort: "createdAt",
    },
    {
      tags: ["important-info"],
    },
  );
}
export async function getOpeningHours(): Promise<
  StrapiListResponse<OpeningHours>
> {
  return strapiGet<StrapiListResponse<OpeningHours>>(
    "/openning-hours",
    undefined,
    {
      tags: ["opening-hours"],
    },
  );
}
