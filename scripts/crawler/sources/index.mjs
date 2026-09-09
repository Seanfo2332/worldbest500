// Registry of configured sources, tried in order by the weekly pipeline (see ../pipeline.mjs)
// until one yields a fresh candidate the rewrite step accepts as on-topic (a notable company,
// founder, or business leader worth a 寰球 500 profile).
import { successStorySource } from "./successstory.mjs";

export const SOURCES = [successStorySource];
