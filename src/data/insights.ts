export interface InsightEntry {
  category: string;
  categoryEn: string;
  title: string;
  titleEn: string;
  date: string;
  href: string;
  image: string;
  /** Short summary used on cards and as the SEO meta description. */
  excerpt: string;
  excerptEn: string;
  /** Full multi-paragraph article body, rendered on the article detail page. */
  body: string[];
  bodyEn: string[];
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
    excerpt:
      "首期「寰球 500」榜单发布后,编辑委员会梳理出贯穿全年数据的五条主线:科技与能源两大板块持续主导综合得分前列;全球辐射能力正取代单一市场规模,成为影响力的核心变量;ESG 与可持续发展表现首次实质性影响企业排名;新兴市场企业的跨境并购活跃度显著上升;以及行业标准制定权正从传统巨头向技术先锋企业迁移。这些趋势共同勾勒出未来十年全球商业格局演变的基本轮廓。",
    excerptEn:
      "Following the inaugural World Best 500 release, our editorial committee identified five threads running through this year's data: technology and energy continue to dominate the top of the composite score; global reach is overtaking domestic market size as the defining variable of influence; ESG and sustainability performance materially affected rankings for the first time; cross-border M&A activity among emerging-market companies rose sharply; and the power to set industry standards is migrating from legacy incumbents toward technology pioneers. Together, these threads sketch the broad contours of how global commerce will evolve over the coming decade.",
    body: [
      "首期「寰球 500」榜单发布后,编辑委员会梳理出贯穿全年数据的五条主线:科技与能源两大板块持续主导综合得分前列;全球辐射能力正取代单一市场规模,成为影响力的核心变量;ESG 与可持续发展表现首次实质性影响企业排名;新兴市场企业的跨境并购活跃度显著上升;以及行业标准制定权正从传统巨头向技术先锋企业迁移。这些趋势共同勾勒出未来十年全球商业格局演变的基本轮廓。",
      "本次分析基于对入围企业过去三个财政年度的营收结构、海外收入占比及专利产出等公开数据的交叉比对,并结合编辑委员会对企业战略动向的持续追踪。相较于依赖单一年度数据的传统榜单,「寰球 500」更关注企业综合实力的持续性与稳定性,而非短期波动带来的排名跃升。",
      "对于投资者与企业决策者而言,这五大趋势提示的不仅是当前的行业格局,更是未来资本配置与战略布局的方向标。编辑委员会将在后续季度持续追踪这些趋势的演变,并在年度榜单更新时进行动态修正。",
    ],
    bodyEn: [
      "Following the inaugural World Best 500 release, our editorial committee identified five threads running through this year's data: technology and energy continue to dominate the top of the composite score; global reach is overtaking domestic market size as the defining variable of influence; ESG and sustainability performance materially affected rankings for the first time; cross-border M&A activity among emerging-market companies rose sharply; and the power to set industry standards is migrating from legacy incumbents toward technology pioneers. Together, these threads sketch the broad contours of how global commerce will evolve over the coming decade.",
      "This analysis draws on a cross-comparison of public data across ranked companies' revenue structure, overseas revenue share, and patent output over the past three fiscal years, combined with our editorial committee's ongoing tracking of strategic moves. Unlike rankings built on a single year of data, World Best 500 weighs the durability and consistency of a company's overall strength more heavily than short-term swings that can inflate a single year's placement.",
      "For investors and corporate decision makers, these five trends point beyond the current industry landscape toward where capital allocation and strategic positioning are likely headed next. Our editorial committee will continue tracking how these trends evolve each quarter, with adjustments reflected in future ranking updates.",
    ],
  },
  {
    category: "行业洞察",
    categoryEn: "Industry Insights",
    title: "人工智能重塑产业版图:科技企业的新一轮竞赛",
    titleEn: "AI Reshapes Industry Landscape: A New Round of Competition Among Tech Giants",
    date: "2025.05.12",
    href: "/insights/ai-reshapes-industry",
    image: "/insights/ai-industry.png",
    excerpt:
      "生成式人工智能的规模化落地,正在重新划定科技企业之间的竞争边界。算力基础设施的资本开支强度、专有模型的训练数据质量,以及企业级应用的落地速度,已取代传统的用户规模指标,成为衡量科技企业长期竞争力的新维度。本期榜单中,多家企业的行业影响力评分因人工智能相关业务的收入贡献而显著提升,这一趋势预计将在未来数个评选周期中持续加强。",
    excerptEn:
      "The large-scale deployment of generative AI is redrawing the competitive boundaries between technology companies. Capital-expenditure intensity in compute infrastructure, the quality of proprietary training data, and the speed of enterprise-grade deployment have overtaken traditional user-scale metrics as the defining measures of long-term competitiveness. Several companies in this year's ranking saw their industry-influence scores rise meaningfully on the strength of AI-related revenue contribution, a trend our committee expects to intensify over the coming evaluation cycles.",
    body: [
      "生成式人工智能的规模化落地,正在重新划定科技企业之间的竞争边界。算力基础设施的资本开支强度、专有模型的训练数据质量,以及企业级应用的落地速度,已取代传统的用户规模指标,成为衡量科技企业长期竞争力的新维度。本期榜单中,多家企业的行业影响力评分因人工智能相关业务的收入贡献而显著提升,这一趋势预计将在未来数个评选周期中持续加强。",
      "半导体与云基础设施供应商在本轮转型中占据了不成比例的优势份额,高性能算力的需求持续超过供给。与此同时,成功将人工智能能力嵌入现有企业级产品(而非另行推出独立人工智能工具)的软件企业,展现出更强的收入留存与客户扩张能力,这一模式在本期评选方法论中于行业影响力维度获得了更高权重。",
      "这一竞争差距并不局限于科技企业。从银行业到制造业,传统行业也开始报告因人工智能应用带来的可衡量生产力提升,编辑委员会预计这一跨行业渗透趋势将在未来榜单中成为独立追踪类别。",
    ],
    bodyEn: [
      "The large-scale deployment of generative AI is redrawing the competitive boundaries between technology companies. Capital-expenditure intensity in compute infrastructure, the quality of proprietary training data, and the speed of enterprise-grade deployment have overtaken traditional user-scale metrics as the defining measures of long-term competitiveness. Several companies in this year's ranking saw their industry-influence scores rise meaningfully on the strength of AI-related revenue contribution, a trend our committee expects to intensify over the coming evaluation cycles.",
      "Semiconductor and cloud infrastructure providers have captured a disproportionate share of this shift, as demand for high-performance compute continues to outpace supply. At the same time, software companies that have successfully embedded AI capabilities into existing enterprise products, rather than launching standalone AI tools, have shown stronger revenue retention and customer expansion, a pattern our methodology now weighs more heavily under the industry-influence dimension.",
      "The competitive gap is not limited to technology companies. Traditional industries from banking to manufacturing are beginning to report measurable productivity gains from AI adoption, and our editorial committee expects this cross-industry diffusion to become a distinct tracking category in future editions of the ranking.",
    ],
  },
  {
    category: "企业聚焦",
    categoryEn: "Company Focus",
    title: "苹果:在创新与生态中保持长期护城河",
    titleEn: "Apple: Maintaining a Long-Term Moat Through Innovation and Ecosystem",
    date: "2025.05.21",
    href: "/insights/apple-moat",
    image: "/insights/apple-moat.png",
    excerpt:
      "在硬件创新周期趋于平缓的当下,苹果公司凭借软硬件深度整合与服务生态的持续扩张,继续维持行业内罕见的高利润率与用户粘性。编辑委员会认为,苹果的护城河已从单一产品竞争力,演变为跨越硬件、软件、服务与内容的完整生态系统竞争力,这也是本期榜单中苹果综合得分持续领先的核心原因。",
    excerptEn:
      "As the hardware innovation cycle plateaus industry-wide, Apple continues to sustain exceptional margins and user retention through deep hardware-software integration and the ongoing expansion of its services ecosystem. Our editorial committee views Apple's moat as having evolved from single-product competitiveness into full-ecosystem competitiveness spanning hardware, software, services, and content: the core reason behind its continued lead in this year's composite score.",
    body: [
      "在硬件创新周期趋于平缓的当下,苹果公司凭借软硬件深度整合与服务生态的持续扩张,继续维持行业内罕见的高利润率与用户粘性。编辑委员会认为,苹果的护城河已从单一产品竞争力,演变为跨越硬件、软件、服务与内容的完整生态系统竞争力,这也是本期榜单中苹果综合得分持续领先的核心原因。",
      "服务业务营收在 2024 财年突破 960 亿美元,其利润率显著高于硬件销售,已成为苹果盈利增长的主要驱动力。这一转变对本刊的评分方法论具有重要意义,因为它体现了持久的收入多元化,而非依赖单一产品周期,这正是行业影响力维度所要衡量的核心特质。",
      "竞争对手难以在同等规模上复制这一模式,主要原因在于生态系统的锁定效应会随用户数据积累、已购内容与设备互联的持续加深而不断强化。编辑委员会预计,除非主要市场出现重大监管干预,苹果在这一维度的相对优势将至少延续未来数个评选周期。",
    ],
    bodyEn: [
      "As the hardware innovation cycle plateaus industry-wide, Apple continues to sustain exceptional margins and user retention through deep hardware-software integration and the ongoing expansion of its services ecosystem. Our editorial committee views Apple's moat as having evolved from single-product competitiveness into full-ecosystem competitiveness spanning hardware, software, services, and content: the core reason behind its continued lead in this year's composite score.",
      "Services revenue, which surpassed 96 billion US dollars in fiscal year 2024, now carries meaningfully higher margins than hardware sales and has become the primary driver of Apple's profitability growth. This shift matters for our scoring methodology because it demonstrates durable revenue diversification rather than dependence on any single product cycle, a quality our industry-influence dimension is specifically designed to capture.",
      "Competitors have struggled to replicate this model at comparable scale, largely because ecosystem lock-in compounds over years of accumulated user data, purchased content, and interconnected devices. Our editorial committee expects Apple's relative advantage in this dimension to persist through at least the next several ranking cycles, barring a significant regulatory intervention in major markets.",
    ],
  },
  {
    category: "宏观视野",
    categoryEn: "Macro View",
    title: "能源转型加速:全球能源巨头的战略布局",
    titleEn: "Accelerating Energy Transition: Strategic Positioning of Global Energy Giants",
    date: "2025.05.28",
    href: "/insights/energy-transition",
    image: "/insights/energy.svg",
    excerpt:
      "全球能源巨头正同步推进传统能源业务的效率优化与低碳转型的战略投入。这一双轨策略既是对气候政策与投资者压力的回应,也是对未来能源格局的前瞻布局。本期榜单显示,在维持传统业务盈利能力的同时加大清洁能源投入的企业,其全球辐射与行业影响力评分均显著优于单一业务模式的同行。",
    excerptEn:
      "Global energy majors are simultaneously pursuing efficiency gains in legacy operations and strategic investment in low-carbon transition. This dual-track approach is both a response to climate policy and investor pressure, and a forward-looking bet on the future shape of the energy landscape. This year's data shows that companies balancing legacy profitability with clean-energy investment scored meaningfully higher on global reach and industry influence than single-track peers.",
    body: [
      "全球能源巨头正同步推进传统能源业务的效率优化与低碳转型的战略投入。这一双轨策略既是对气候政策与投资者压力的回应,也是对未来能源格局的前瞻布局。本期榜单显示,在维持传统业务盈利能力的同时加大清洁能源投入的企业,其全球辐射与行业影响力评分均显著优于单一业务模式的同行。",
      "沙特阿美的策略正体现了这种双轨战略的规模化实践:在维持全球最低成本原油生产商地位的同时,每年投入超过 40 亿美元用于低碳与清洁能源项目。编辑委员会认为,相较于全面放弃传统业务的激进转型,这种组合策略在充满不确定性的数十年转型周期中更具财务韧性。",
      "那些为维持短期传统业务盈利而延后清洁能源投入的能源企业,本期在全球辐射维度的得分明显偏弱,反映出资本市场对企业长期转型准备度的审视日趋严格。编辑委员会预计,随着更多司法管辖区引入具有约束力的减排要求,这一评分差距将在未来榜单中进一步扩大。",
    ],
    bodyEn: [
      "Global energy majors are simultaneously pursuing efficiency gains in legacy operations and strategic investment in low-carbon transition. This dual-track approach is both a response to climate policy and investor pressure, and a forward-looking bet on the future shape of the energy landscape. This year's data shows that companies balancing legacy profitability with clean-energy investment scored meaningfully higher on global reach and industry influence than single-track peers.",
      "Saudi Aramco's approach illustrates the dual-track strategy at scale: maintaining its position as the world's lowest-cost crude producer while committing more than 4 billion US dollars annually to low-carbon and clean energy initiatives. Our editorial committee views this combination, rather than a wholesale pivot away from legacy operations, as the more financially resilient path through an uncertain multi-decade transition.",
      "Energy companies that have delayed clean-energy investment in favor of short-term legacy profitability showed weaker global-reach scores this cycle, reflecting growing capital-market scrutiny of long-term transition readiness. Our committee expects this scoring gap to widen in future editions as more jurisdictions introduce binding decarbonization requirements.",
    ],
  },
];
