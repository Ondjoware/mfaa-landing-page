import { strapiGet } from "../client";
import type { StrapiResponse } from "../types/common";
import type { HeroSection } from "../types/museum-info";

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
export async function getHeroSectionData(): Promise<StrapiResponse<HeroSection>> {
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
