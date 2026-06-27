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
  },
];
