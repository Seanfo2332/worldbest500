// "YYYY.MM.DD" -- matches the date format the site's curated insights use
// (src/data/insights.ts, e.g. "2025.05.01"). World Best 500 is a Chinese-perspective global
// publication with no single home market; Asia/Shanghai is used as the reference clock.
export function todayWB() {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Shanghai",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(new Date());
  const get = (type) => parts.find((p) => p.type === type)?.value ?? "";
  return `${get("year")}.${get("month")}.${get("day")}`;
}
