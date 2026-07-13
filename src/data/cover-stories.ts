export interface CoverStoryEntry {
  rank: number;
  nameCn: string;
  nameEn: string;
  categoryCn: string;
  categoryEn: string;
  headlineCn: string;
  headlineEn: string;
  /** Short summary used on cards and as the SEO meta description. */
  excerptCn: string;
  excerptEn: string;
  /** Full multi-paragraph article body, rendered on the article detail page. */
  bodyCn: string[];
  bodyEn: string[];
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
    bodyCn: [
      "在智能手机市场增长趋缓的背景下，苹果凭借软硬件深度整合与服务生态的持续扩张，维持了同行业中罕见的高利润率与用户粘性。2024 财年服务业务营收突破 960 亿美元，印证了这条护城河的深度与持久性。",
      "App Store、Apple Music、iCloud 与 AppleCare 共同构成了一个类订阅式的收入基础，其表现模式与依赖出货量驱动的硬件销售截然不同。投资者对这一转变的评价日益积极，认为服务业务收入相较单纯依赖 iPhone 销售，波动性更低、利润率更高，而后者在成熟智能手机市场仍面临周期性需求压力。",
      "苹果在未来十年面临的战略性问题，是这一生态护城河能否延伸至空间计算、健康科技等新兴产品品类，并复制其在移动端已实现的防御力。编辑委员会将在后续报道中持续关注这一转型进程。",
    ],
    bodyEn: [
      "As smartphone market growth decelerates, Apple has sustained exceptional margins and user retention through deep hardware-software integration and the continued expansion of its services ecosystem. Services revenue surpassing $96 billion in FY2024 underscores the depth and durability of this competitive moat.",
      "The App Store, Apple Music, iCloud, and AppleCare together now represent a subscription-like revenue base that behaves very differently from unit-driven hardware sales. Investors have increasingly rewarded this shift, viewing services revenue as lower-volatility and higher-margin than iPhone sales alone, which still face cyclical demand pressure in mature smartphone markets.",
      "The strategic question facing Apple's next decade is whether this ecosystem moat can extend into emerging product categories, from spatial computing to health technology, with the same defensibility it has achieved in mobile. Our editorial committee will be watching this transition closely in future coverage.",
    ],
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
    bodyCn: [
      "沙特阿美在维持全球最低原油生产成本优势的同时，正以每年超过 40 亿美元的投入推进低碳与清洁能源转型项目。这一双轨策略，反映出传统能源巨头在能源格局重塑周期中的生存逻辑。",
      "这笔投资的很大一部分投向碳捕集、氢能生产与石化业务多元化，这些领域使阿美能够依托其现有基础设施与技术积累，而非从零开始与成熟的可再生能源专业企业竞争。这种资本高效的路径，使阿美的转型策略有别于选择全面重塑业务的同行。",
      "分析人士对这种循序渐进的转型节奏究竟是审慎的风险管理，还是代价高昂的延迟，仍存在分歧。但编辑委员会的数据显示，这一策略迄今为止在保住阿美现金创造能力的同时，也建立起了可信的低碳信誉，这种平衡是多数国有背景能源巨头难以企及的。",
    ],
    bodyEn: [
      "While maintaining its global advantage as the lowest-cost crude oil producer, Saudi Aramco is committing over $4 billion annually to low-carbon and clean energy transition initiatives. This dual-track strategy reflects the survival logic of traditional energy majors during a fundamental reshaping of the global energy landscape.",
      "Much of this investment is directed toward carbon capture, hydrogen production, and petrochemical diversification, areas where Aramco can leverage its existing infrastructure and technical expertise rather than competing from scratch against established renewable-energy specialists. This capital-efficient approach distinguishes Aramco's transition strategy from peers pursuing wholesale reinvention.",
      "Analysts remain divided on whether this measured pace of transition is prudent risk management or a costly delay, but our editorial committee's data shows the strategy has so far preserved Aramco's cash-generation capacity while building credible low-carbon credentials, a balance few state-linked energy majors have managed to strike.",
    ],
    date: "2025.05.15",
    href: "/insights/saudi-aramco-low-carbon",
    domain: "saudiaramco.com",
  },
  {
    rank: 9,
    nameCn: "台湾积体电路制造公司",
    nameEn: "Taiwan Semiconductor Manufacturing Co.",
    categoryCn: "半导体",
    categoryEn: "Semiconductors",
    headlineCn: "不可替代的节点：台积电与全球供应链的核心张力",
    headlineEn: "The Indispensable Node: TSMC and the Core Tensions of Global Supply Chains",
    excerptCn:
      "台积电以约 60% 的全球晶圆代工市占率，成为全球先进半导体制造的事实核心。随着地缘政治压力推动各国建立本地产能，台积电同时在美国、日本与欧洲推进海外建厂，这一布局将深刻影响未来十年的全球科技供应链格局。",
    excerptEn:
      "With approximately 60% of global foundry market share, TSMC has become the de facto core of advanced semiconductor manufacturing worldwide. As geopolitical pressure drives nations to build domestic capacity, TSMC is simultaneously advancing overseas fabs in the United States, Japan, and Europe, a strategic shift that will profoundly reshape global technology supply chains over the coming decade.",
    bodyCn: [
      "台积电以约 60% 的全球晶圆代工市占率，成为全球先进半导体制造的事实核心。随着地缘政治压力推动各国建立本地产能，台积电同时在美国、日本与欧洲推进海外建厂，这一布局将深刻影响未来十年的全球科技供应链格局。",
      "海外扩张伴随着实实在在的成本：台湾以外的晶圆厂在投产初期通常运营支出更高、良率爬坡更慢，短期内会对利润率构成压力，即便这有助于降低长期地缘政治风险。编辑委员会在行业影响力评分中已纳入这一权衡，将长期供应链韧性与短期财务表现共同纳入考量。",
      "台积电的地位也印证了本期榜单的一个更广泛主题：获得最高行业影响力的企业，未必是利润率最高的企业，而往往是其基础设施已真正难以被替代的企业。这种结构性不可替代性，而非短期盈利能力，正日益成为半导体行业评分方法论所重视的核心。",
    ],
    bodyEn: [
      "With approximately 60% of global foundry market share, TSMC has become the de facto core of advanced semiconductor manufacturing worldwide. As geopolitical pressure drives nations to build domestic capacity, TSMC is simultaneously advancing overseas fabs in the United States, Japan, and Europe, a strategic shift that will profoundly reshape global technology supply chains over the coming decade.",
      "The overseas expansion carries a real cost: fabs built outside Taiwan typically run at higher operating expense and slower yield ramp-up in their early years, pressuring near-term margins even as they reduce long-term geopolitical risk. Our editorial committee's industry-influence scoring accounts for this trade-off by weighting long-term supply-chain resilience alongside near-term financial performance.",
      "TSMC's position also illustrates a broader theme in this year's ranking: the companies gaining the most industry influence are not always those with the highest margins, but those whose infrastructure has become genuinely difficult to replace. That structural indispensability, more than short-term profitability, is what our methodology increasingly rewards in the semiconductor sector.",
    ],
    date: "2025.05.28",
    href: "/insights/tsmc-supply-chain",
    domain: "tsmc.com",
  },
];
