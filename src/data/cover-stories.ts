export interface CoverStoryEntry {
  rank: number;
  nameCn: string;
  nameEn: string;
  categoryCn: string;
  categoryEn: string;
  headlineCn: string;
  headlineEn: string;
  excerptCn: string;
  excerptEn: string;
  date: string;
  href: string;
  domain: string;
}

export const coverStories: CoverStoryEntry[] = [
  {
    rank: 1,
    nameCn: "苹果公司",
    nameEn: "Apple Inc.",
    categoryCn: "科技硬件与设备",
    categoryEn: "Technology Hardware & Equipment",
    headlineCn: "生态护城河：苹果如何在技术饱和时代保持绝对优势",
    headlineEn: "The Ecosystem Moat: How Apple Sustains Its Edge in a Saturated Technology Era",
    excerptCn:
      "在智能手机市场增长趋缓的背景下，苹果凭借软硬件深度整合与服务生态的持续扩张，维持了同行业中罕见的高利润率与用户粘性。2024 财年服务业务营收突破 960 亿美元，印证了这条护城河的深度与持久性。",
    excerptEn:
      "As smartphone market growth decelerates, Apple has sustained exceptional margins and user retention through deep hardware-software integration and the continued expansion of its services ecosystem. Services revenue surpassing $96 billion in FY2024 underscores the depth and durability of this competitive moat.",
    date: "2025.05.01",
    href: "/insights/apple-ecosystem-moat",
    domain: "apple.com",
  },
  {
    rank: 3,
    nameCn: "沙特阿美",
    nameEn: "Saudi Aramco",
    categoryCn: "能源",
    categoryEn: "Energy",
    headlineCn: "格局重塑：全球最大石油公司的低碳战略布局",
    headlineEn: "Reshaping the Landscape: The World's Largest Oil Company and Its Low-Carbon Strategy",
    excerptCn:
      "沙特阿美在维持全球最低原油生产成本优势的同时，正以每年超过 40 亿美元的投入推进低碳与清洁能源转型项目。这一双轨策略，反映出传统能源巨头在能源格局重塑周期中的生存逻辑。",
    excerptEn:
      "While maintaining its global advantage as the lowest-cost crude oil producer, Saudi Aramco is committing over $4 billion annually to low-carbon and clean energy transition initiatives. This dual-track strategy reflects the survival logic of traditional energy majors during a fundamental reshaping of the global energy landscape.",
    date: "2025.05.15",
    href: "/insights/saudi-aramco-low-carbon",
    domain: "saudiaramco.com",
  },
  {
    rank: 5,
    nameCn: "台湾积体电路制造公司",
    nameEn: "Taiwan Semiconductor Manufacturing Co.",
    categoryCn: "半导体",
    categoryEn: "Semiconductors",
    headlineCn: "不可替代的节点：台积电与全球供应链的核心张力",
    headlineEn: "The Indispensable Node: TSMC and the Core Tensions of Global Supply Chains",
    excerptCn:
      "台积电以约 60% 的全球晶圆代工市占率，成为全球先进半导体制造的事实核心。随着地缘政治压力推动各国建立本地产能，台积电同时在美国、日本与欧洲推进海外建厂，这一布局将深刻影响未来十年的全球科技供应链格局。",
    excerptEn:
      "With approximately 60% of global foundry market share, TSMC has become the de facto core of advanced semiconductor manufacturing worldwide. As geopolitical pressure drives nations to build domestic capacity, TSMC is simultaneously advancing overseas fabs in the United States, Japan, and Europe — a strategic shift that will profoundly reshape global technology supply chains over the coming decade.",
    date: "2025.05.28",
    href: "/insights/tsmc-supply-chain",
    domain: "tsmc.com",
  },
];
