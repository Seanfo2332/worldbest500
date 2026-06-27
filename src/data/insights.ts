export interface InsightEntry {
  category: string;
  categoryEn: string;
  title: string;
  titleEn: string;
  date: string;
  href: string;
  image: string;
}

export const insights: InsightEntry[] = [
  {
    category: "榜单解读",
    categoryEn: "Ranking Analysis",
    title: "2025 寰球 500 发布:全球企业格局的五大趋势",
    titleEn: "World Best 500 2025: Five Major Trends in Global Corporate Landscape",
    date: "2025.05.01",
    href: "/insights/2025-trends",
    image: "/insights/trends.png",
  },
  {
    category: "行业洞察",
    categoryEn: "Industry Insights",
    title: "人工智能重塑产业版图:科技企业的新一轮竞赛",
    titleEn: "AI Reshapes Industry Landscape: A New Round of Competition Among Tech Giants",
    date: "2025.05.12",
    href: "/insights/ai-reshapes-industry",
    image: "/insights/ai-industry.png",
  },
  {
    category: "企业聚焦",
    categoryEn: "Company Focus",
    title: "苹果:在创新与生态中保持长期护城河",
    titleEn: "Apple: Maintaining a Long-Term Moat Through Innovation and Ecosystem",
    date: "2025.05.21",
    href: "/insights/apple-moat",
    image: "/insights/apple-moat.png",
  },
  {
    category: "宏观视野",
    categoryEn: "Macro View",
    title: "能源转型加速:全球能源巨头的战略布局",
    titleEn: "Accelerating Energy Transition: Strategic Positioning of Global Energy Giants",
    date: "2025.05.28",
    href: "/insights/energy-transition",
    image: "/insights/energy.svg",
  },
];
