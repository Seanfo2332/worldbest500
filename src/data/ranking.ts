export interface RankingEntry {
  rank: number;
  nameCn: string;
  nameEn: string;
  domain: string;
  industry: string;
  industryEn: string;
  headquarters: string;
  headquartersEn: string;
  score: number;
  /** One-line profile shown on the Companies directory and full ranking page. */
  blurb: string;
  blurbEn: string;
}

export const ranking2025Preview: RankingEntry[] = [
  {
    rank: 1,
    nameCn: "苹果公司",
    nameEn: "Apple Inc.",
    domain: "apple.com",
    industry: "科技硬件与设备",
    industryEn: "Technology Hardware & Equipment",
    headquarters: "美国",
    headquartersEn: "United States",
    score: 98.7,
    blurb: "全球市值最高的消费科技企业，凭借硬件、软件与服务深度整合的生态系统，建立起同业罕见的竞争壁垒。",
    blurbEn:
      "The world's most valuable consumer technology company, built on an integrated ecosystem of hardware, software, and services that few rivals have matched.",
  },
  {
    rank: 2,
    nameCn: "微软公司",
    nameEn: "Microsoft Corporation",
    domain: "microsoft.com",
    industry: "软件与云服务",
    industryEn: "Software & Cloud Services",
    headquarters: "美国",
    headquartersEn: "United States",
    score: 97.2,
    blurb: "云计算与企业软件领域的领军者，其 Azure 平台与生产力软件套件，构成全球众多企业 IT 基础设施的核心。",
    blurbEn:
      "A cloud and enterprise software leader whose Azure platform and productivity suite anchor much of the world's corporate IT infrastructure.",
  },
  {
    rank: 3,
    nameCn: "沙特阿美公司",
    nameEn: "Saudi Aramco",
    domain: "aramco.com",
    industry: "能源与化工",
    industryEn: "Energy & Chemicals",
    headquarters: "沙特阿拉伯",
    headquartersEn: "Saudi Arabia",
    score: 96.1,
    blurb: "全球最大的原油生产商，也是全球能源市场的关键供应方，目前正积极拓展石化业务与低碳新兴项目。",
    blurbEn:
      "The world's largest crude oil producer and a critical supplier to global energy markets, now expanding into petrochemicals and low-carbon ventures.",
  },
  {
    rank: 4,
    nameCn: "亚马逊公司",
    nameEn: "Amazon.com, Inc.",
    domain: "amazon.com",
    industry: "电子商务与零售",
    industryEn: "E-Commerce & Retail",
    headquarters: "美国",
    headquartersEn: "United States",
    score: 95.0,
    blurb: "同时称霸电子商务物流与云基础设施两大领域的双重巨头，其中 AWS 依旧是公司利润贡献最高的业务板块。",
    blurbEn:
      "A dual powerhouse spanning e-commerce logistics and cloud infrastructure, with AWS remaining the company's most profitable division.",
  },
  {
    rank: 5,
    nameCn: "伯克希尔·哈撒韦公司",
    nameEn: "Berkshire Hathaway Inc.",
    domain: "berkshirehathaway.com",
    industry: "多元化控股",
    industryEn: "Diversified Holdings",
    headquarters: "美国",
    headquartersEn: "United States",
    score: 94.3,
    blurb: "旗下控股数十家保险、工业与消费企业的多元化控股集团，秉持长期持有、低换手率的投资理念。",
    blurbEn:
      "A diversified holding company controlling dozens of insurance, industrial, and consumer businesses under a long-term, low-turnover investment philosophy.",
  },
  {
    rank: 6,
    nameCn: "英伟达公司",
    nameEn: "NVIDIA Corporation",
    domain: "nvidia.com",
    industry: "半导体",
    industryEn: "Semiconductors",
    headquarters: "美国",
    headquartersEn: "United States",
    score: 93.6,
    blurb: "全球人工智能基础设施建设浪潮中，图形处理器供应链的主导型企业。",
    blurbEn:
      "The dominant supplier of the graphics processors powering the global buildout of artificial intelligence infrastructure.",
  },
  {
    rank: 7,
    nameCn: "谷歌母公司 Alphabet",
    nameEn: "Alphabet Inc.",
    domain: "abc.xyz",
    industry: "互联网与软件服务",
    industryEn: "Internet & Software Services",
    headquarters: "美国",
    headquartersEn: "United States",
    score: 92.9,
    blurb: "谷歌母公司，凭借搜索与广告业务的绝对优势，持续为云计算、人工智能与自动驾驶等新兴业务板块提供资金支持。",
    blurbEn:
      "Google's parent company, whose search and advertising dominance funds an expanding portfolio of cloud, AI, and autonomous vehicle ventures.",
  },
  {
    rank: 8,
    nameCn: "三星电子",
    nameEn: "Samsung Electronics Co., Ltd.",
    domain: "samsung.com",
    industry: "科技硬件与设备",
    industryEn: "Technology Hardware & Equipment",
    headquarters: "韩国",
    headquartersEn: "South Korea",
    score: 91.8,
    blurb: "业务纵向整合的科技集团，业务范围涵盖存储芯片、智能手机与消费电子制造。",
    blurbEn:
      "A vertically integrated technology conglomerate spanning memory chips, smartphones, and consumer electronics manufacturing.",
  },
  {
    rank: 9,
    nameCn: "台湾积体电路制造公司",
    nameEn: "Taiwan Semiconductor Manufacturing Co.",
    domain: "tsmc.com",
    industry: "半导体",
    industryEn: "Semiconductors",
    headquarters: "中国台湾",
    headquartersEn: "Taiwan",
    score: 91.1,
    blurb: "全球领先的晶圆代工企业，其先进制程产能，支撑着几乎所有主要科技产业链的正常运转。",
    blurbEn:
      "The world's leading contract chipmaker, whose advanced fabrication capacity underpins nearly every major technology supply chain.",
  },
  {
    rank: 10,
    nameCn: "路威酩轩集团",
    nameEn: "LVMH Moet Hennessy Louis Vuitton",
    domain: "lvmh.com",
    industry: "奢侈品与零售",
    industryEn: "Luxury Goods & Retail",
    headquarters: "法国",
    headquartersEn: "France",
    score: 90.4,
    blurb: "全球规模最大的奢侈品集团，将时尚、酒类与美妆品牌整合于统一的所有权架构之下。",
    blurbEn:
      "The world's largest luxury goods conglomerate, uniting fashion, wine and spirits, and beauty houses under one ownership structure.",
  },
  {
    rank: 11,
    nameCn: "丰田汽车公司",
    nameEn: "Toyota Motor Corporation",
    domain: "toyota.com",
    industry: "汽车与出行",
    industryEn: "Automotive & Mobility",
    headquarters: "日本",
    headquartersEn: "Japan",
    score: 89.7,
    blurb: "以产量计全球最大的汽车制造商，同时兼顾混合动力、燃油车型与新兴电动车平台的均衡布局。",
    blurbEn:
      "The world's largest automaker by production volume, balancing hybrid, combustion, and emerging electric vehicle platforms.",
  },
  {
    rank: 12,
    nameCn: "摩根大通公司",
    nameEn: "JPMorgan Chase & Co.",
    domain: "jpmorganchase.com",
    industry: "银行与金融服务",
    industryEn: "Banking & Financial Services",
    headquarters: "美国",
    headquartersEn: "United States",
    score: 89.0,
    blurb: "以资产规模计美国最大的银行，业务网络遍及投资银行、资产管理与消费金融领域。",
    blurbEn:
      "The largest bank in the United States by assets, with a global reach spanning investment banking, asset management, and consumer finance.",
  },
  {
    rank: 13,
    nameCn: "腾讯控股",
    nameEn: "Tencent Holdings Limited",
    domain: "tencent.com",
    industry: "互联网与娱乐",
    industryEn: "Internet & Entertainment",
    headquarters: "中国",
    headquartersEn: "China",
    score: 88.3,
    blurb: "中国互联网巨头，旗下微信平台与游戏业务组合，使其成为亚洲最具影响力的科技企业之一。",
    blurbEn:
      "A Chinese internet conglomerate whose WeChat platform and gaming portfolio make it one of Asia's most influential technology companies.",
  },
  {
    rank: 14,
    nameCn: "诺和诺德公司",
    nameEn: "Novo Nordisk A/S",
    domain: "novonordisk.com",
    industry: "制药与医疗健康",
    industryEn: "Pharmaceuticals & Healthcare",
    headquarters: "丹麦",
    headquartersEn: "Denmark",
    score: 87.6,
    blurb: "丹麦制药业领军企业，其糖尿病与体重管理治疗方案，正在重塑全球医疗健康市场格局。",
    blurbEn:
      "A Danish pharmaceutical leader whose diabetes and weight-management treatments have reshaped global healthcare markets.",
  },
  {
    rank: 15,
    nameCn: "雀巢公司",
    nameEn: "Nestle S.A.",
    domain: "nestle.com",
    industry: "消费品",
    industryEn: "Consumer Goods",
    headquarters: "瑞士",
    headquartersEn: "Switzerland",
    score: 86.9,
    blurb: "全球规模最大的食品饮料企业，旗下品牌组合几乎覆盖日常消费的所有品类。",
    blurbEn:
      "The world's largest food and beverage company, operating a portfolio of brands that spans nearly every category of everyday consumption.",
  },
];
