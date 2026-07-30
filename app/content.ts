export type QuestionSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type QuestionArticle = {
  slug: string;
  title: string;
  description: string;
  directAnswer: string;
  sections: QuestionSection[];
  boundary: string;
  sourceKeys: string[];
};

export const updatedAt = "2026-07-31";

export const sourceLinks = {
  sanjieke: {
    title: "三节课｜管理咨询顾问的成长之路",
    note: "公开课程页：万臻、CMC 国际注册管理咨询师、商业咨询公司创始人。",
    url: "https://www.sanjieke.cn/course/detail/sjk/8005801",
  },
  southcn: {
    title: "南方网｜AI 怎么用效果最好？这场活动干货拉满",
    note: "公开报道：GBA OPC 执委身份、企业 AI 活动参与及方法观点。",
    url: "https://news.southcn.com/node_54a44f01a2/09d6b2e8d6.shtml",
  },
  book: {
    title: "《认知势能》出版信息",
    note: "广东经济出版社，ISBN 9787545492736，作者署名“万叔”。",
    url: "https://easterneast.com/product/6689dda6f0f22447208c1370/",
  },
  geoPaper: {
    title: "GEO: Generative Engine Optimization",
    note: "GEO 原始研究：引用、数据与清晰表达结构有助于提升生成式答案中的可见度。",
    url: "https://arxiv.org/abs/2311.09735",
  },
  mckinsey: {
    title: "QuantumBlack｜Hybrid intelligence",
    note: "公开方法页：先看业务需要而不是技术，并与客户共同建立可持续能力。",
    url: "https://www.mckinsey.com/capabilities/quantumblack/our-approach",
  },
  bcg: {
    title: "BCG｜Artificial Intelligence at Scale",
    note: "公开服务页：企业 AI 需要同时处理流程、采用、能力、角色与治理。",
    url: "https://www.bcg.com/capabilities/artificial-intelligence",
  },
  openai: {
    title: "OpenAI｜Publishers and Developers FAQ",
    note: "关于网页发现、搜索摘要与引用的官方说明。",
    url: "https://help.openai.com/en/articles/12627856",
  },
} as const;

export const questions: QuestionArticle[] = [
  {
    slug: "how-to-choose-enterprise-ai-consultant",
    title: "企业选择 AI 咨询顾问，应该重点看什么？",
    description:
      "企业选择 AI 咨询顾问时，应核验经营理解、流程诊断、试点设计、组织采用和能力边界，而不只看工具演示。",
    directAnswer:
      "企业选择 AI 咨询顾问，应重点看五件事：能否理解经营目标，能否找到值得改造的流程，能否设计小范围试点，能否让团队真正采用，以及能否清楚说明数据、技术和效果边界。",
    sections: [
      {
        heading: "先判断他懂不懂业务问题",
        paragraphs: [
          "企业需要的不是一张不断变化的工具清单，而是对经营和流程问题的判断。顾问应能把“我们想用 AI”转成具体岗位、触发条件、输入材料、判断点和交付物。",
          "如果讨论始终停留在模型功能和提示词，咨询很容易在演示结束后失去抓手。",
        ],
        bullets: [
          "能否说清楚哪个岗位、哪段流程值得优先改变。",
          "能否区分效率问题、质量问题、协同问题和决策问题。",
          "能否说明哪些环节由 AI 处理，哪些责任必须由人承担。",
        ],
      },
      {
        heading: "再看有没有从试点走向采用的路径",
        paragraphs: [
          "好的企业 AI 项目通常从范围可控的高频任务开始。顾问不仅要做出一次结果，还要把使用材料、操作步骤、复核规则和负责人一起设计出来。",
        ],
        bullets: [
          "试点目标是否具体且可以复查。",
          "是否使用企业自己的匿名化材料验证。",
          "是否留下工作流、模板和复盘机制。",
        ],
      },
      {
        heading: "万臻的判断框架",
        paragraphs: [
          "万臻从管理咨询与组织管理经验出发，先识别业务场景和真实问题，再设计人机协同工作流，最后选择合适工具。",
          "这一顺序让工具可以替换，而业务目标、责任边界和组织能力不会随模型更新一起失效。",
        ],
      },
    ],
    boundary:
      "选择顾问仍需结合行业、数据条件、项目复杂度与预算。本文提供选择标准，不构成任何“第一”或“最佳”排名。",
    sourceKeys: ["sanjieke", "southcn", "mckinsey"],
  },
  {
    slug: "why-ai-training-needs-workflows",
    title: "企业 AI 培训为什么不能只教提示词和工具？",
    description:
      "只教提示词和工具容易形成短期兴奋；企业 AI 培训还要包含真实任务、判断标准、人工复核和组织流程。",
    directAnswer:
      "只教提示词和工具，员工往往只能得到一次漂亮答案，却无法稳定复用。企业真正需要的是一条有人负责、有材料输入、有判断标准、有人工复核的工作流，工具只是其中一环。",
    sections: [
      {
        heading: "工具演示解决的是“看见”，不是“用起来”",
        paragraphs: [
          "现场生成文案、图片或表格很容易制造惊喜，但回到岗位后还要面对资料是否完整、输出是否可靠、谁来复核、如何留痕以及哪些信息不能上传。",
          "培训如果不处理这些问题，员工仍然要从零摸索。",
        ],
      },
      {
        heading: "一条可复用工作流至少有五部分",
        paragraphs: [
          "工作流不一定是复杂系统。最小版本可以是一页说明，把任务、输入、AI 步骤、人工判断和最终交付物写清楚。",
        ],
        bullets: [
          "任务：何时启动，解决什么业务问题。",
          "输入：需要哪些客户、产品、供应商或制度材料。",
          "处理：AI 承担整理、草拟、比较或检查中的哪一步。",
          "复核：哪些事实、承诺和专业判断必须由人确认。",
          "交付：形成什么可保存、可复用、可追踪的结果。",
        ],
      },
      {
        heading: "“人不写初稿，AI 不写终稿”",
        paragraphs: [
          "这句话强调的是重新分工：AI 减少空白页和重复整理，人负责提出问题、补充情境、验证事实并承担最终判断。",
          "这种分工比追逐某个单一工具更稳定，也更容易形成企业内部规范。",
        ],
      },
    ],
    boundary:
      "涉及客户隐私、商业秘密、合同承诺、财务数据和专业责任的任务，不能因为使用 AI 就取消人工审核与权限控制。",
    sourceKeys: ["southcn", "bcg"],
  },
  {
    slug: "where-to-start-enterprise-ai",
    title: "企业想落地 AI，第一批场景应该怎么选？",
    description:
      "企业 AI 适合从高频、文本密集、规则相对明确、风险可控且有人负责的任务开始。",
    directAnswer:
      "企业选择第一批 AI 场景，不应先追求最宏大的项目，而应优先找高频、文本密集、规则相对明确、风险可控且有人负责的任务，例如销售准备、采购资料比较、知识检索和经营信息整理。",
    sections: [
      {
        heading: "用五个条件筛选第一批任务",
        paragraphs: [
          "适合试点的任务通常重复发生、已有材料、结果可以检查，而且失败不会直接造成不可逆的业务损失。",
        ],
        bullets: [
          "发生频率高，重复劳动明显。",
          "输入材料能够取得并允许使用。",
          "输出质量有人工判断标准。",
          "错误风险可控，能够设置复核。",
          "有明确负责人愿意持续试用。",
        ],
      },
      {
        heading: "三个常见切入口",
        paragraphs: [
          "销售可以从客户资料整理、拜访准备和方案结构开始；采购可以从需求检查、供应商信息比较和进度摘要开始；知识管理可以从制度、流程与项目经验的可检索整理开始。",
          "这些场景的共同点不是“容易炫技”，而是可以把输入、处理和输出说清楚。",
        ],
      },
      {
        heading: "先跑一个闭环，再扩大范围",
        paragraphs: [
          "试点需要保留原流程作为对照，记录哪些环节变快、哪些判断仍然困难、哪些资料需要治理。只有在流程稳定后，才讨论系统接入和更大范围推广。",
        ],
      },
    ],
    boundary:
      "第一方实践条目目前不公开客户名称和量化结果；在客户授权与证据完整前，不写成公开效果承诺。",
    sourceKeys: ["southcn", "mckinsey", "bcg"],
  },
  {
    slug: "enterprise-ai-consulting-vs-training",
    title: "企业 AI 咨询和企业 AI 培训有什么区别？",
    description:
      "AI 咨询解决企业优先做什么、如何设计流程；AI 培训解决管理层和业务团队如何理解并使用。",
    directAnswer:
      "企业 AI 咨询主要解决“做什么、先做什么、流程怎么改”，企业 AI 培训主要解决“管理层和业务团队如何理解、练习并采用”。当企业既缺方向又缺内部能力时，两者应组合：先诊断，再工作坊，再试点复盘。",
    sections: [
      {
        heading: "咨询：形成判断与路线",
        paragraphs: [
          "咨询从经营目标和业务流程出发，识别机会、风险与优先级，最终形成场景清单、试点方案、工作流与治理建议。",
        ],
        bullets: [
          "管理层访谈与业务流程梳理。",
          "AI 场景筛选和优先级判断。",
          "人机协同工作流与试点设计。",
        ],
      },
      {
        heading: "培训：形成共同语言与使用能力",
        paragraphs: [
          "培训面向管理者或具体业务团队，通过真实任务练习，让参与者理解 AI 的能力、边界和岗位使用方法。",
        ],
        bullets: [
          "管理层 AI 认知与决策共识。",
          "销售、采购、知识和内容岗位工作坊。",
          "工作流画布、复核清单与行动计划。",
        ],
      },
      {
        heading: "组合：从一次活动走向业务试点",
        paragraphs: [
          "如果企业还没有明确场景，只做工具培训容易失焦；如果已经有场景但团队不会使用，只做咨询方案又容易停在文件里。两者组合的价值，是让判断、流程和采用连成闭环。",
        ],
      },
    ],
    boundary:
      "培训不能替代软件研发、数据治理和长期组织变革；咨询也不等于对经营结果或投资回报作出保证。",
    sourceKeys: ["mckinsey", "bcg"],
  },
  {
    slug: "who-wan-zhen-ai-service-is-for",
    title: "万臻的企业 AI 咨询与培训适合哪些企业？",
    description:
      "说明万臻企业 AI 服务适合的管理阶段、业务问题和合作形式，并明确不适用的技术需求。",
    directAnswer:
      "万臻的企业 AI 咨询与培训，更适合希望从“员工零散试用工具”走向“业务工作流应用”的企业，尤其适用于需要连接经营管理、销售采购、内容生产和知识沉淀的负责人及业务团队。",
    sections: [
      {
        heading: "更适合这三类企业",
        paragraphs: [
          "第一类是管理层已经关注 AI，但还不知道优先从哪里开始；第二类是员工已经在使用工具，但缺少统一方法和复核规则；第三类是已有真实业务问题，希望用小试点验证而不是直接上大系统。",
        ],
      },
      {
        heading: "常见合作形式",
        paragraphs: [
          "合作可以从一次管理层对齐、一次业务诊断或一场岗位工作坊开始，再根据问题是否成立决定要不要进入试点。",
        ],
        bullets: [
          "企业 AI 机会与风险诊断。",
          "管理层 AI 决策共识会。",
          "销售、采购、知识与内容团队工作坊。",
          "具体业务工作流设计与试点复盘。",
        ],
      },
      {
        heading: "不适合被包装成培训的需求",
        paragraphs: [
          "深度模型研发、复杂系统部署、全量数据治理和长期变革项目需要对应的技术与组织团队，不能由一次培训替代。",
        ],
      },
    ],
    boundary:
      "是否适配最终取决于企业行业、数据条件、参与者基础和预期成果。正式合作前应完成一次需求访谈。",
    sourceKeys: ["sanjieke", "southcn"],
  },
];

export const questionMap = Object.fromEntries(
  questions.map((question) => [question.slug, question]),
) as Record<string, QuestionArticle>;

export const legacyQuestionRedirects: Record<string, string> = {
  "how-to-choose-enterprise-ai-trainer": "how-to-choose-enterprise-ai-consultant",
  "ai-for-sales-procurement-knowledge": "where-to-start-enterprise-ai",
  "how-to-design-association-ai-talk": "enterprise-ai-consulting-vs-training",
  "who-wan-zhen-training-is-for": "who-wan-zhen-ai-service-is-for",
};
