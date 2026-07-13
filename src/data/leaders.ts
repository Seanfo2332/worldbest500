export interface LeaderEntry {
  nameCn: string;
  nameEn: string;
  roleCn: string;
  roleEn: string;
  /** Which individual sub-list this figure exemplifies. */
  categoryCn: string;
  categoryEn: string;
  blurb: string;
  blurbEn: string;
  /** Company domain, used to fetch a favicon-style mark via LogoImage. */
  domain: string;
}

/**
 * Illustrative examples of the "International Giants Tier" (see the
 * two-tier selection model on the Methodology page) — figures included
 * automatically based on public information, not nomination. All facts
 * below are public record; these are not fabricated profiles. The
 * eventual full roster covers 30 individuals (10 per sub-list); this is
 * a preview subset, same honesty pattern as the500page.previewNote.
 */
export const leaders: LeaderEntry[] = [
  // WORLD BEST CEOs 10
  {
    nameCn: "提姆·库克",
    nameEn: "Tim Cook",
    roleCn: "苹果公司首席执行官",
    roleEn: "CEO, Apple Inc.",
    categoryCn: "全球十大 CEO",
    categoryEn: "WORLD BEST CEOs 10",
    blurb: "自 2011 年执掌苹果以来，蒂姆·库克将公司市值推升至全球第一梯队，并主导了服务业务的战略性扩张。",
    blurbEn:
      "Since taking the helm at Apple in 2011, Tim Cook has driven the company's market value into the world's top tier and led the strategic expansion of its services business.",
    domain: "apple.com",
  },
  {
    nameCn: "萨提亚·纳德拉",
    nameEn: "Satya Nadella",
    roleCn: "微软公司首席执行官",
    roleEn: "CEO, Microsoft Corporation",
    categoryCn: "全球十大 CEO",
    categoryEn: "WORLD BEST CEOs 10",
    blurb: "萨提亚·纳德拉自 2014 年出任微软首席执行官，主导公司向云计算与人工智能业务的全面转型。",
    blurbEn:
      "Satya Nadella has served as Microsoft's CEO since 2014, leading the company's full-scale pivot toward cloud computing and artificial intelligence.",
    domain: "microsoft.com",
  },
  {
    nameCn: "黄仁勋",
    nameEn: "Jensen Huang",
    roleCn: "英伟达公司联合创办人兼首席执行官",
    roleEn: "Co-Founder & CEO, NVIDIA Corporation",
    categoryCn: "全球十大 CEO",
    categoryEn: "WORLD BEST CEOs 10",
    blurb: "黄仁勋自 1993 年联合创立英伟达以来一直担任首席执行官，带领公司成为人工智能算力时代的核心供应商。",
    blurbEn:
      "Jensen Huang has led NVIDIA as CEO since co-founding it in 1993, steering the company into position as a core supplier of the AI computing era.",
    domain: "nvidia.com",
  },
  {
    nameCn: "拉尔斯·福瑞加德·约根森",
    nameEn: "Lars Fruergaard Jorgensen",
    roleCn: "诺和诺德公司总裁兼首席执行官",
    roleEn: "President & CEO, Novo Nordisk A/S",
    categoryCn: "全球十大 CEO",
    categoryEn: "WORLD BEST CEOs 10",
    blurb: "拉尔斯·福瑞加德·约根森自 2017 年起执掌诺和诺德，推动公司糖尿病与体重管理治疗方案的全球化扩张。",
    blurbEn:
      "Lars Fruergaard Jorgensen has led Novo Nordisk since 2017, driving the global expansion of the company's diabetes and weight-management treatment portfolio.",
    domain: "novonordisk.com",
  },
  // WORLD BEST Founders 10
  {
    nameCn: "张忠谋",
    nameEn: "Morris Chang",
    roleCn: "台积电创办人",
    roleEn: "Founder, TSMC",
    categoryCn: "全球十大创办人",
    categoryEn: "WORLD BEST Founders 10",
    blurb: "张忠谋于 1987 年创立台积电，开创晶圆代工商业模式，重塑了全球半导体产业的分工格局。",
    blurbEn:
      "Morris Chang founded TSMC in 1987, pioneering the contract chipmaking business model and reshaping the division of labor across the global semiconductor industry.",
    domain: "tsmc.com",
  },
  {
    nameCn: "杰夫·贝索斯",
    nameEn: "Jeff Bezos",
    roleCn: "亚马逊公司创办人",
    roleEn: "Founder, Amazon.com, Inc.",
    categoryCn: "全球十大创办人",
    categoryEn: "WORLD BEST Founders 10",
    blurb: "杰夫·贝索斯于 1994 年以线上书店起步创立亚马逊，将其发展为全球规模最大的电子商务与云计算企业之一。",
    blurbEn:
      "Jeff Bezos founded Amazon in 1994 as an online bookstore and built it into one of the world's largest e-commerce and cloud computing companies.",
    domain: "amazon.com",
  },
  {
    nameCn: "马化腾",
    nameEn: "Pony Ma",
    roleCn: "腾讯控股联合创办人兼董事会主席",
    roleEn: "Co-Founder & Chairman, Tencent Holdings Limited",
    categoryCn: "全球十大创办人",
    categoryEn: "WORLD BEST Founders 10",
    blurb: "马化腾于 1998 年联合创立腾讯，其后主导开发微信平台，使公司成长为亚洲最具影响力的科技企业之一。",
    blurbEn:
      "Pony Ma co-founded Tencent in 1998 and later led the development of the WeChat platform, growing the company into one of Asia's most influential technology firms.",
    domain: "tencent.com",
  },
  // WORLD BEST Visionaries 10
  {
    nameCn: "沃伦·巴菲特",
    nameEn: "Warren Buffett",
    roleCn: "伯克希尔·哈撒韦董事长",
    roleEn: "Chairman, Berkshire Hathaway",
    categoryCn: "全球十大行业领袖",
    categoryEn: "WORLD BEST Visionaries 10",
    blurb: "沃伦·巴菲特以数十年如一日的长期价值投资理念，将伯克希尔·哈撒韦打造为全球最具影响力的多元化控股集团之一。",
    blurbEn:
      "Through decades of consistent long-term value investing, Warren Buffett has built Berkshire Hathaway into one of the world's most influential diversified holding companies.",
    domain: "berkshirehathaway.com",
  },
  {
    nameCn: "埃隆·马斯克",
    nameEn: "Elon Musk",
    roleCn: "特斯拉 · SpaceX 首席执行官",
    roleEn: "CEO, Tesla · SpaceX",
    categoryCn: "全球十大行业领袖",
    categoryEn: "WORLD BEST Visionaries 10",
    blurb: "埃隆·马斯克同时领导特斯拉与 SpaceX，其跨界影响力横跨电动汽车、太空探索与人工智能领域。",
    blurbEn:
      "Elon Musk leads both Tesla and SpaceX simultaneously, with cross-disciplinary influence spanning electric vehicles, space exploration, and artificial intelligence.",
    domain: "tesla.com",
  },
  {
    nameCn: "伯纳德·阿尔诺",
    nameEn: "Bernard Arnault",
    roleCn: "路威酩轩集团董事长兼首席执行官",
    roleEn: "Chairman & CEO, LVMH",
    categoryCn: "全球十大行业领袖",
    categoryEn: "WORLD BEST Visionaries 10",
    blurb: "伯纳德·阿尔诺自 1980 年代起主导整合旗下时尚与酒类品牌，一手缔造出全球规模最大的奢侈品集团。",
    blurbEn:
      "Since the 1980s, Bernard Arnault has led the consolidation of fashion and spirits houses under LVMH, single-handedly building the world's largest luxury goods conglomerate.",
    domain: "lvmh.com",
  },
];
