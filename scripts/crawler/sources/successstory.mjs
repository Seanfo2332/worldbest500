// successstory.com -- long biographical profiles of notable companies and business leaders
// ("/people/<slug>" and "/companies/<slug>"). English; the rewrite localizes each into a
// Chinese 寰球 500 analytical piece. These are evergreen profiles, not dated news, so there is
// no publish date to sort or freshness-gate on -- the DB's unique source_url constraint is what
// stops a profile being re-crawled.
import { discoverArticleLinks, scrapeArticle } from "../firecrawl-client.mjs";

const LISTING_URL = "https://successstory.com/stories";

// https://successstory.com/people/lisa-tzwu-fang-su  |  https://successstory.com/companies/lucid-motors
const ARTICLE_URL_PATTERN = /^https:\/\/successstory\.com\/(?:people|companies)\/[a-z0-9-]+$/i;

/** @type {import("../types.mjs").NewsSource} */
export const successStorySource = {
  id: "successstory",
  name: "SuccessStory",

  async listRecent(limit) {
    const links = await discoverArticleLinks(LISTING_URL);
    // The listing has no recency order and the profiles are evergreen; take the page order.
    return links.filter((url) => ARTICLE_URL_PATTERN.test(url)).slice(0, limit);
  },

  async fetchArticle(sourceUrl) {
    return scrapeArticle(sourceUrl);
  },
};
