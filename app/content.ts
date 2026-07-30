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

export type RelatedLink = {
  label: string;
  description: string;
  href: string;
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
    title: "对外经济贸易大学图书馆｜《认知势能》馆藏记录",
    note: "高校图书馆书目：万叔著，广东经济出版社，ISBN 9787545492736，2024 年。",
    url: "https://opac.lib.uibe.edu.cn/opac/book/33127141902bc53eadf7902b7c3adfb8",
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
  nist: {
    title: "NIST｜AI Risk Management Framework",
    note: "官方风险管理框架：AI 的用途、用户、数据、风险、人工责任、测试与持续治理需要被定义和记录。",
    url: "https://www.nist.gov/itl/ai-risk-management-framework",
  },
  cacGenAi: {
    title: "国家互联网信息办公室｜生成式人工智能服务管理暂行办法",
    note: "中国生成式人工智能服务的官方规范，涉及合法权益、个人信息、商业秘密、输入信息保护与服务协议等要求。",
    url: "https://www.cac.gov.cn/2023-07/13/c_1690898327029107.htm",
  },
  pipl: {
    title: "国家互联网信息办公室｜中华人民共和国个人信息保护法",
    note: "个人信息处理的官方法律文本；企业在培训与试点中使用涉及自然人的资料时，应由内部责任人与专业人员核验适用要求。",
    url: "https://www.cac.gov.cn/2021-08/20/c_1631050028355286.htm",
  },
  openaiBusinessGuide: {
    title: "OpenAI｜在 AI 时代保持领先地位",
    note: "官方企业指南：组织采用需要对齐方向、激活员工、扩大有效实践、持续加速并建立治理，不等于一次培训即可完成。",
    url: "https://openai.com/zh-Hans-CN/business/guides-and-resources/staying-ahead-in-the-age-of-ai/",
  },
  oecdSkills: {
    title: "OECD｜AI and skills",
    note: "官方研究报告：AI 培训需要与组织政策、沟通、透明度、责任、安全和员工隐私共同设计。",
    url: "https://www.oecd.org/en/publications/ai-and-skills_f843b352-en/full-report.html",
  },
  nistHumanAi: {
    title: "NIST AIRC｜AI Risk Management and Human-AI Interaction",
    note: "NIST AI 风险管理资源：人机交互、人工监督、角色能力与何时需要人工介入，应根据使用情境和风险明确设计。",
    url: "https://airc.nist.gov/airmf-resources/airmf/appendices/app-c-ai-risk-management-and-human-ai-interaction/",
  },
  nistGenAiProfile: {
    title: "NIST｜生成式人工智能风险管理框架应用指南",
    note: "NIST AI RMF 生成式 AI 配套指南：组织需要定义角色、政策、监督、测试、事件沟通和持续风险管理。",
    url: "https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-generative-artificial-intelligence",
  },
  cacAiLabeling: {
    title: "国家互联网信息办公室｜人工智能生成合成内容标识办法",
    note: "中国人工智能生成合成内容标识的官方办法；企业对外发布相关内容时，应由责任人核验适用范围和标识要求。",
    url: "https://www.cac.gov.cn/2025-03/14/c_1743654684782215.htm",
  },
  iloHrm: {
    title: "国际劳工组织｜AI in human resource management",
    note: "ILO 研究指出，人力资源 AI 的目标、数据与程序如果定义不清，可能放大偏差并带来透明度、公平与责任风险。",
    url: "https://www.ilo.org/publications/ai-human-resource-management-limits-empiricism",
  },
  mohrssRecruitment: {
    title: "人力资源社会保障部｜进一步加强招聘信息管理",
    note: "官方招聘信息管理要求：招聘信息应真实合法，不得设置歧视性内容，并应加强信息保护、审核、投诉和反馈机制。",
    url: "https://www.mohrss.gov.cn/xxgk2020/fdzdgknr/zcfg/gfxwj/jy/201708/t20170817_275860.html",
  },
  sinaFounderNotes: {
    title: "新浪财经转载｜《创始人笔记》AI 与 agent 文章",
    note: "新浪财经标注来源为《创始人笔记》，并写明为“万叔”原创；文章讨论 agent、内容可调用性及低质量 GEO 的边界。",
    url: "https://finance.sina.com.cn/wm/2026-06-08/doc-iniaukny3299008.shtml",
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
  {
    slug: "what-enterprise-ai-consulting-delivers",
    title: "企业 AI 咨询通常应该交付什么？",
    description:
      "企业 AI 咨询不应只交付趋势报告，还应形成场景清单、优先级、试点工作流、责任边界和复盘方式。",
    directAnswer:
      "一项可执行的企业 AI 咨询，至少应交付五类结果：与经营目标相连的场景清单、明确的优先级判断、一个可验证的试点方案、人机协同工作流，以及包含负责人、复核规则和风险边界的行动清单。",
    sections: [
      {
        heading: "交付物要能回答下一步怎么做",
        paragraphs: [
          "趋势判断和工具介绍可以帮助管理层建立背景，但不能代替行动方案。咨询结束后，企业应能说清楚先做哪个任务、为什么先做、谁负责、需要什么材料以及怎样判断是否继续。",
        ],
        bullets: [
          "场景清单：业务任务、使用者和预期问题。",
          "优先级：业务价值、可行性、风险和负责人意愿。",
          "试点方案：范围、周期、输入、输出和验收方式。",
          "工作流：AI 步骤、人工判断、异常回退和留痕。",
          "行动清单：负责人、下一节点与复盘时间。",
        ],
      },
      {
        heading: "方案与能力建设要同时发生",
        paragraphs: [
          "如果只有外部顾问能解释方案，企业很难持续推进。访谈、工作坊和试点应让内部负责人逐步掌握场景判断、工作流设计和复盘方法。",
        ],
      },
      {
        heading: "万臻采用的交付逻辑",
        paragraphs: [
          "万臻先从经营目标和岗位任务梳理机会，再把一个优先场景写成可运行的人机协同工作流。工具选择服务于流程，而不是反过来决定项目。",
        ],
      },
    ],
    boundary:
      "不同项目的交付深度取决于范围、访谈对象、资料条件和是否包含试点。本页是交付判断框架，不代表每次合作都包含全部项目。",
    sourceKeys: ["mckinsey", "bcg"],
  },
  {
    slug: "ai-training-for-executives-or-employees",
    title: "企业 AI 培训应该先培训老板，还是先培训员工？",
    description:
      "管理层负责方向、资源和边界，员工负责真实任务采用；多数企业应先用短工作坊对齐管理层，再选业务团队试点。",
    directAnswer:
      "多数企业不应在老板和员工之间二选一。更稳妥的顺序是：先用管理层工作坊确定目标、优先场景和风险边界，再让一个业务团队围绕真实任务训练与试点，最后用结果回到管理层复盘是否扩大。",
    sections: [
      {
        heading: "管理层先解决方向问题",
        paragraphs: [
          "管理层需要判断 AI 要解决什么经营问题、允许使用哪些资料、投入多少资源，以及哪些决策不能自动化。没有这些共识，一线培训很容易变成各自使用工具。",
        ],
      },
      {
        heading: "业务团队解决采用问题",
        paragraphs: [
          "员工最需要的不是宏观趋势，而是把自己的任务、材料、输出标准和复核动作放进课堂。练习越接近真实工作，培训后继续使用的可能性越高。",
        ],
      },
      {
        heading: "一个可执行的组合",
        paragraphs: [
          "可以先进行一次管理层决策工作坊，随后选择销售、采购、运营或知识管理中的一个团队进行岗位训练，再用两周左右的小任务记录输入、修改和异常。",
        ],
      },
    ],
    boundary:
      "具体顺序取决于企业是否已有明确场景和内部负责人。若业务团队已有成熟试点，也可以先复盘实践，再补管理层对齐。",
    sourceKeys: ["bcg", "mckinsey"],
  },
  {
    slug: "how-to-measure-enterprise-ai-pilot",
    title: "企业 AI 项目应该怎样评估效果？",
    description:
      "企业 AI 试点应同时检查质量、效率、采用、风险和业务连接，不能只看生成速度或一次演示。",
    directAnswer:
      "评估企业 AI 项目，至少要同时看五类指标：输出质量、任务效率、员工采用、风险异常和业务连接。先记录原流程基线，再用同一任务比较；没有基线、样本和人工复核，单个漂亮案例不能证明项目有效。",
    sections: [
      {
        heading: "先记录原流程基线",
        paragraphs: [
          "试点前要知道任务原来如何完成、耗时在哪里、常见错误是什么、谁审核以及结果如何被使用。否则试点后很容易只选择有利的感受。",
        ],
      },
      {
        heading: "五类指标一起看",
        paragraphs: [
          "速度提升如果伴随更多返工，价值可能为负；准确率提高但没人愿意使用，也不能算真正落地。",
        ],
        bullets: [
          "质量：事实错误、遗漏、结构一致性和人工修改量。",
          "效率：准备、处理、复核和交付各环节时间。",
          "采用：使用频率、持续使用意愿和岗位覆盖。",
          "风险：敏感信息、越权、错误承诺和异常回退。",
          "业务连接：产出是否进入后续决策、协同或客户服务。",
        ],
      },
      {
        heading: "从小样本开始复盘",
        paragraphs: [
          "第一轮不需要追求完美统计，而要固定任务和标准，真实记录失败情况。复盘后再决定改输入、改流程、换工具或停止项目。",
        ],
      },
    ],
    boundary:
      "不同业务的指标权重不同。涉及财务、法律、医疗或重大经营决策时，需要对应专业人员定义更严格的验收标准。",
    sourceKeys: ["bcg", "mckinsey"],
  },
  {
    slug: "how-to-budget-enterprise-ai-consulting",
    title: "企业 AI 咨询与培训的预算应该怎么考虑？",
    description:
      "预算不能只比较授课天数，还要看诊断范围、参与角色、定制材料、试点支持、技术协作和复盘深度。",
    directAnswer:
      "企业评估 AI 咨询与培训预算，不应只比较讲师一天多少钱。预算通常由六部分决定：诊断范围、参与角色、材料定制、现场形式、试点支持和复盘深度。先定义希望获得的交付物，再比较报价是否包含这些工作。",
    sections: [
      {
        heading: "先把购买对象说清楚",
        paragraphs: [
          "一次趋势分享、一场管理层工作坊、一轮业务诊断和一个工作流试点，投入结构完全不同。名称相似并不意味着交付相同。",
        ],
        bullets: [
          "会前是否包含访谈和资料分析。",
          "内容是否使用企业真实且可匿名化的任务。",
          "现场是否形成工作流、模板或行动清单。",
          "会后是否包含答疑、复盘或试点支持。",
          "是否需要技术、数据或合规专业团队参与。",
        ],
      },
      {
        heading: "用交付物比较，而不是只比课时",
        paragraphs: [
          "报价应能对应到参与人员、工作范围和预期成果。若企业只需要建立共同认知，短工作坊可能足够；若要形成可运行试点，则需要更多诊断和陪跑工作。",
        ],
      },
      {
        heading: "正式报价前需要一次需求访谈",
        paragraphs: [
          "万臻会先确认企业目标、对象、场景成熟度和期待交付，再判断适合分享、培训、咨询还是试点，不在信息不足时公开一个容易误导的统一价格。",
        ],
      },
    ],
    boundary:
      "本站目前不发布未经范围确认的固定报价。预算还可能受城市、人数、差旅、保密要求和协作团队影响，最终以书面范围与报价为准。",
    sourceKeys: ["mckinsey", "bcg"],
  },
  {
    slug: "how-to-prepare-for-enterprise-ai-training",
    title: "企业 AI 培训前应该准备哪些资料？",
    description:
      "会前准备岗位任务、样例材料、输出标准、敏感信息边界和内部负责人，能显著提升培训与真实工作的连接。",
    directAnswer:
      "企业 AI 培训前，最好准备五类信息：参与岗位、真实高频任务、可匿名化样例材料、合格输出标准，以及不能上传或必须人工审核的内容。同时指定一名内部负责人，负责会前收集和会后试点。",
    sections: [
      {
        heading: "准备真实任务，不必准备完美案例",
        paragraphs: [
          "最有价值的材料通常就是员工每天面对的文档、表格、客户信息或流程说明。可以脱敏和删减，但应保留真实结构与困难。",
        ],
        bullets: [
          "任务多久发生一次，由谁发起和交付。",
          "当前输入来自哪里，常见缺失是什么。",
          "什么样的结果才算可用。",
          "哪些事实、承诺和专业判断必须人工确认。",
        ],
      },
      {
        heading: "提前标记信息边界",
        paragraphs: [
          "企业应在培训前明确客户隐私、商业秘密、合同、财务和内部账号的使用规则。没有授权的敏感资料不能为了演示方便直接上传外部工具。",
        ],
      },
      {
        heading: "会后预留一个小试点",
        paragraphs: [
          "指定内部负责人和一个两周内可重复的任务，让参与者记录输入、输出、人工修改和异常。这样培训才有机会从课堂练习变成岗位方法。",
        ],
      },
    ],
    boundary:
      "不同工具和企业制度对数据使用的要求不同；本站内容不能替代企业自身的信息安全、隐私和法律审查。",
    sourceKeys: ["bcg", "mckinsey"],
  },
  {
    slug: "manufacturing-ai-training-starting-points",
    title: "制造业企业做 AI 咨询与培训，应该从哪些场景开始？",
    description:
      "制造业企业可以先从采购、知识、项目与经营信息等材料可取得、结果可检查的工作流开始，而不是直接承诺复杂生产自动化。",
    directAnswer:
      "制造业企业做 AI 咨询与培训，适合先从采购信息比较、制度与工艺知识查找、项目进展和经营异常汇总等工作流开始。这些任务材料较明确、可以人工复核，也更适合小范围试点；视觉质检、预测性维护、排产和设备控制则需要独立的数据、算法、工业软件与安全评估。",
    sections: [
      {
        heading: "先选信息工作流，不先碰关键控制",
        paragraphs: [
          "第一轮试点的目标是验证企业能否把任务、输入、AI 处理、人工复核和交付责任写清楚。采购材料、制度文件和项目汇报通常比关键生产控制更容易限定范围。",
        ],
        bullets: [
          "采购需求和供应商资料格式是否长期不统一。",
          "制度、工艺或质量文件是否存在查找和版本确认困难。",
          "项目进展、异常和依赖是否需要跨部门重复汇总。",
        ],
      },
      {
        heading: "用真实脱敏材料判断可行性",
        paragraphs: [
          "培训或咨询前准备一小批真实表格、文件和优秀输出，让使用者判断 AI 的错误集中在哪里、人工复核是否清楚，以及资料和权限是否构成新瓶颈。",
        ],
      },
      {
        heading: "再决定是否进入技术实施",
        paragraphs: [
          "只有当工作流价值、数据条件、责任人和验收方式已经清楚，企业才适合讨论系统集成、工业数据接入或专门算法项目。",
        ],
      },
    ],
    boundary:
      "本文是制造业场景选择框架，不代表已为特定制造企业实施，也不构成生产安全、工业控制、质量或设备技术方案。",
    sourceKeys: ["bcg", "mckinsey"],
  },
  {
    slug: "sme-ai-consulting-or-training-first",
    title: "中小企业做 AI，应该先咨询还是直接培训？",
    description:
      "中小企业方向不清时先做轻量诊断，任务明确但团队不会用时做培训，已有具体任务时可直接进入小试点。",
    directAnswer:
      "中小企业应该按问题成熟度选择：不知道先做什么时，先做轻量咨询诊断；已经有明确岗位任务、但团队不会设计工作流时，做业务培训；任务、材料和负责人都明确时，可以直接做小范围工作流试点。资源有限更需要缩小范围，而不是同时购买很多工具。",
    sections: [
      {
        heading: "方向不清，先把问题排队",
        paragraphs: [
          "如果老板、销售、运营和职能部门各自提出不同 AI 想法，应先按业务价值、材料可得性、可检查性、风险和负责人意愿排序。",
        ],
      },
      {
        heading: "任务明确，培训要留下工作流",
        paragraphs: [
          "培训不应只让员工体验模型，而要围绕一个真实任务完成输入模板、AI 步骤、人工复核和会后两周试点。",
        ],
      },
      {
        heading: "已有负责人，可以直接小试",
        paragraphs: [
          "当任务高频、材料现成、结果可检查且有人负责时，不必先做宏大规划，可以用少量样本验证是否值得扩大。",
        ],
        bullets: [
          "一次只选一个明确任务。",
          "优先使用现有脱敏材料与已有工具。",
          "记录人工修改和失败，不只展示最好结果。",
        ],
      },
    ],
    boundary:
      "企业规模不是唯一判断依据。数据敏感、流程复杂或涉及重大决策的中小企业，同样可能需要技术、安全、法律或行业专业团队。",
    sourceKeys: ["bcg", "mckinsey"],
  },
  {
    slug: "professional-services-ai-workflows",
    title: "专业服务企业怎样把 AI 用于知识、方案和项目交付？",
    description:
      "专业服务企业可以从客户研究、方案结构、知识检索和项目复盘开始，但专业判断、事实核验与客户承诺必须由人负责。",
    directAnswer:
      "专业服务企业使用 AI，适合把资料整理、客户研究、方案结构、知识检索和项目汇报设计成可复核工作流。AI 可以减少搜索与空白页时间，但不能替代顾问对事实、专业判断、客户情境、能力承诺和最终交付质量的责任。",
    sections: [
      {
        heading: "先拆分整理工作与专业判断",
        paragraphs: [
          "客户资料归纳、访谈纪要、相似项目检索和方案结构可以由 AI 辅助；问题诊断、取舍建议、专业结论和对外承诺必须保留给负责人。",
        ],
      },
      {
        heading: "知识复用必须保留来源与版本",
        paragraphs: [
          "专业经验如果没有来源、适用条件、版本和责任人，AI 很容易把相似材料拼成错误答案。知识工作流需要把引用和不确定性一起交付。",
        ],
      },
      {
        heading: "用优秀交付反向定义标准",
        paragraphs: [
          "准备脱敏后的优秀方案、报告或复盘材料，分析它为什么可用，再用这些标准检查 AI 辅助产出，而不是只评价文字是否流畅。",
        ],
      },
    ],
    boundary:
      "法律、财务、医疗、工程等受专业责任约束的结论，必须由具备相应资质和授权的人员审核；本文不构成任何专业意见。",
    sourceKeys: ["mckinsey", "bcg"],
  },
  {
    slug: "can-ai-training-use-company-data",
    title: "企业 AI 内训可以使用公司真实资料吗？",
    description:
      "可以使用经过授权、最小化和脱敏的真实结构，但培训前必须明确工具、账号、权限、敏感等级、人工复核和删除留存规则。",
    directAnswer:
      "企业 AI 内训可以使用真实资料的结构和任务，但不应默认把客户隐私、商业秘密、合同、财务或员工信息上传外部工具。更稳妥的做法是先分类、最小化、脱敏和授权，确认使用哪个账号与工具、资料如何留存，并为高风险输出设置人工复核。",
    sections: [
      {
        heading: "真实结构有价值，原始敏感信息不一定需要",
        paragraphs: [
          "培训需要保留任务的真实难度，例如字段、版本、例外和判断点；姓名、联系方式、价格、合同条款和未公开经营数据通常可以替换、遮盖或抽样。",
        ],
      },
      {
        heading: "会前定义数据与工具边界",
        paragraphs: [
          "企业应明确允许使用的工具、账号、资料类型、存储位置、权限、保留时间、异常处理和责任人。不同产品与部署方式的规则不能混为一谈。",
        ],
        bullets: [
          "资料是否经过业务负责人授权。",
          "是否只保留完成练习所需的最少字段。",
          "是否能够追踪来源、版本与人工修改。",
          "是否准备了不上传资料的替代练习。",
        ],
      },
      {
        heading: "高风险输出必须人工确认",
        paragraphs: [
          "合同、财务、客户承诺、员工评价和专业结论不能因为出现在培训练习里就降低审核要求。",
        ],
      },
    ],
    boundary:
      "本文提供培训准备原则，不能替代企业自身的信息安全、隐私、合同和法律审查。具体工具的数据处理规则需要逐项核验。",
    sourceKeys: ["nist", "cacGenAi", "pipl"],
  },
  {
    slug: "ai-consultant-vs-software-implementer",
    title: "企业 AI 咨询顾问和软件实施公司有什么区别？",
    description:
      "咨询顾问侧重业务问题、场景优先级、工作流和组织采用；软件实施公司侧重系统配置、集成、数据与运维，复杂项目通常需要协作。",
    directAnswer:
      "企业 AI 咨询顾问主要帮助企业确定为什么做、先做什么、人与 AI 怎样分工、如何试点和采用；软件实施公司主要负责把确定需求变成可运行系统，包括配置、开发、集成、数据、权限和运维。前者不能替代技术实施，后者也不应替企业省略业务判断。",
    sections: [
      {
        heading: "咨询先回答业务与组织问题",
        paragraphs: [
          "咨询阶段需要识别经营目标、流程阻力、使用者、输入材料、验收标准、风险和负责人，形成可供决策和试点的范围。",
        ],
      },
      {
        heading: "实施负责系统落地与运行",
        paragraphs: [
          "当企业需要接入内部系统、构建权限、迁移数据、开发接口或持续运维时，应由具备相应技术能力的实施团队负责。",
        ],
      },
      {
        heading: "复杂项目需要共同交付",
        paragraphs: [
          "更稳妥的协作顺序是先把业务任务和责任边界写清，再由技术团队评估方案，并让真实使用者参与测试和复盘。",
        ],
        bullets: [
          "咨询成果应能进入技术需求，而不是停在概念报告。",
          "技术方案应回到真实工作流验证，而不是只证明功能可用。",
          "最终验收同时看系统、流程、采用和风险。",
        ],
      },
    ],
    boundary:
      "不同供应商的实际能力可能重叠，应以团队成员、工作范围、交付物、责任和合同为准，不能仅凭“咨询”或“实施”名称判断。",
    sourceKeys: ["bcg", "mckinsey"],
  },
  {
    slug: "how-to-choose-enterprise-ai-trainer",
    title: "企业选择 AI 培训讲师，应该重点看什么？",
    description:
      "企业选择 AI 培训讲师，应核验业务经验、课程诊断、真实任务练习、工作流产出、风险边界与培训后试点，而不只看工具数量。",
    directAnswer:
      "企业选择 AI 培训讲师，应重点看六件事：是否理解企业经营与岗位任务，能否在课前诊断真实问题，是否使用经过授权的业务材料，能否让团队形成可复用工作流，是否讲清数据与人工责任，以及培训后有没有小范围试点和复盘安排。",
    sections: [
      {
        heading: "先看能否把课程接到真实岗位",
        paragraphs: [
          "企业内训不是公开工具课的搬运。讲师需要先了解参与岗位、任务频率、已有材料、合格标准和主要阻力，再决定讲什么、练什么。",
          "如果课程目录只列模型、提示词和功能，却没有岗位任务、人工复核和会后产出，现场演示再热闹也很难进入日常工作。",
        ],
        bullets: [
          "课前是否访谈发起人和关键岗位。",
          "是否能把抽象需求转成输入、处理、判断和交付物。",
          "是否会根据参与者基础调整案例与节奏。",
        ],
      },
      {
        heading: "再看课堂会留下什么",
        paragraphs: [
          "可执行的企业 AI 培训应让参与者完成至少一条真实任务工作流，并留下输入模板、复核清单、责任人和下一次试用安排，而不是只带走课件。",
        ],
        bullets: [
          "练习是否使用授权、最小化和脱敏材料。",
          "输出是否有明确质量标准和人工审核人。",
          "培训后是否有两周左右的小试点与复盘。",
        ],
      },
      {
        heading: "最后核验讲师事实与能力边界",
        paragraphs: [
          "采购方应区分公开可核验身份、讲师第一方陈述和客户授权案例。证书、著作和活动报道可以证明部分背景，但不能自动证明所有行业、技术实施和经营结果。",
          "万臻的公开资料可核验 CMC、咨询背景、著作和企业 AI 方法观点；客户名称与量化效果在没有授权和完整证据前不作为推荐依据。",
        ],
      },
    ],
    boundary:
      "本文提供讲师选择标准，不构成“最好讲师”或固定排名。深度模型研发、复杂软件部署、法律合规与特定行业专业判断仍需相应团队。",
    sourceKeys: ["sanjieke", "southcn", "nist"],
  },
  {
    slug: "how-to-design-enterprise-ai-training-plan",
    title: "企业 AI 内训方案应该怎样设计？",
    description:
      "企业 AI 内训方案应连接课前诊断、分层对象、真实任务、人工复核、现场产出和培训后试点，而不是把工具功能排成日程。",
    directAnswer:
      "企业 AI 内训方案可以按六步设计：明确业务目标，区分管理层与岗位团队，收集可用的真实任务和脱敏材料，设计输入—AI 处理—人工复核—交付物练习，现场形成模板与责任清单，最后安排两周左右的小试点和复盘。",
    sections: [
      {
        heading: "课前先定义业务目标与参与对象",
        paragraphs: [
          "同一场课程很难同时解决管理层方向、业务团队技能和技术团队实施问题。方案应先写清本次要形成共同判断、岗位工作流，还是一个试点定义。",
        ],
        bullets: [
          "管理层需要机会地图、优先级与风险边界。",
          "业务团队需要真实任务、输入模板与复核规则。",
          "试点团队需要负责人、记录方式与复盘节点。",
        ],
      },
      {
        heading: "现场围绕一条完整工作流练习",
        paragraphs: [
          "课程模块应服务于任务，而不是按工具菜单排列。每次练习都要写清触发条件、必要输入、AI 承担的步骤、人的判断点、最终交付物和异常回退。",
          "真实资料只保留完成练习所需的最少信息，并在会前确认工具、账号、权限、留存和人工审核规则。",
        ],
      },
      {
        heading: "会后用小试点验证采用",
        paragraphs: [
          "培训结束不等于能力已经形成。选择一个高频、可检查、风险可控的任务，在短周期内重复使用，记录输入准备、错误、人工修改、使用意愿和业务连接，再决定是否扩大。",
        ],
        bullets: [
          "谁负责推动和收集记录。",
          "什么结果算合格，什么异常必须停止。",
          "什么时候复盘，谁决定继续、修改或暂缓。",
        ],
      },
    ],
    boundary:
      "本页是方案设计框架，不是无需访谈即可套用的固定课表。培训不能替代内部负责人、数据治理、技术实施或持续管理。",
    sourceKeys: ["nist", "bcg", "southcn"],
  },
  {
    slug: "how-to-evaluate-enterprise-ai-service-provider",
    title: "企业采购 AI 咨询与培训服务，应该如何评估供应商并验收？",
    description:
      "企业采购 AI 咨询与培训服务，应把业务问题、人员能力、数据边界、交付物、试点记录和验收责任写进需求，而不只比较课程时长与工具数量。",
    directAnswer:
      "企业评估 AI 咨询与培训供应商，可以分三步：采购前写清业务问题、参与岗位、可用资料与禁止事项；选择时核验顾问背景、诊断方法、真实交付物和能力边界；验收时检查是否形成约定的场景清单、工作流、复核规则、练习产出和试点计划。没有事先建立基线，就不应把 ROI 或效率提升比例作为事后包装的验收结论。",
    sections: [
      {
        heading: "采购需求先写问题、范围和责任",
        paragraphs: [
          "需求书不应只有“讲一天 AI”或“提供若干工具”。采购方需要写清本次要解决的业务问题、参与岗位、现有流程、允许使用的资料、必须人工审核的内容，以及咨询、培训、试点和软件实施分别是否在范围内。",
        ],
        bullets: [
          "目标是形成管理层判断、岗位能力，还是一条可运行的工作流。",
          "哪些企业资料可以使用，哪些必须脱敏、替换或禁止上传。",
          "谁负责提供材料、确认输出、处理异常和决定是否继续。",
          "是否需要技术集成；若需要，由哪一方负责评估与实施。",
        ],
      },
      {
        heading: "供应商评估要看证据与交付方法",
        paragraphs: [
          "证书、著作和公开活动可以核验部分背景，但不能自动证明所有行业经验与项目效果。采购方还应要求供应商展示如何诊断任务、怎样设计人机工作流、如何处理数据边界，以及最终会留下哪些可复查成果。",
        ],
        bullets: [
          "公开身份和案例事实能否追溯到原始来源。",
          "课程或咨询方案是否基于本企业岗位与材料调整。",
          "能否区分业务咨询、培训、工作流试点和软件实施。",
          "是否拒绝未经基线验证的效果承诺、虚假客户与模糊排名。",
        ],
      },
      {
        heading: "验收交付物，不验收现场热闹",
        paragraphs: [
          "验收应回到合同或项目启动时约定的成果。一次活动可以验收诊断记录、场景优先级、岗位任务画布、输入模板、人机工作流、复核清单、练习结果、责任人与下一步试点；长期经营结果则需要独立基线、持续记录和更长观察周期。",
        ],
        bullets: [
          "交付物是否完整、可打开、可由内部团队继续使用。",
          "工作流是否写清输入、AI 步骤、人工判断、输出与异常回退。",
          "参与者是否完成约定练习，问题与修改是否有记录。",
          "数据、权限、留存、知识产权和专业复核责任是否明确。",
          "未完成、未验证与需要其他专业团队参与的事项是否列出。",
        ],
      },
    ],
    boundary:
      "本文是采购与验收框架，不构成法律、信息安全或合同意见。法规对不同主体、工具、数据和部署方式的适用范围不同，应由企业内部责任人及相应专业人员核验。",
    sourceKeys: ["nist", "cacGenAi", "pipl", "sanjieke"],
  },
  {
    slug: "how-to-sustain-enterprise-ai-training-adoption",
    title: "企业 AI 培训结束后，怎样让员工真正持续使用？",
    description:
      "企业 AI 培训后，应选择一个高频岗位任务，由内部负责人推动短周期重复使用，记录输入、错误、人工修改、采用意愿和异常，再决定是否扩大。",
    directAnswer:
      "企业 AI 培训结束后，不要立刻要求所有员工全面使用。先选一个高频、材料可得、结果可检查、风险可控的岗位任务，明确内部负责人和人工审核人，在两至四周内重复运行；每周记录输入准备、AI 错误、人工修改、使用意愿和异常情况，复盘后再决定继续、调整、扩大或停止。",
    sections: [
      {
        heading: "把课程产出变成一个真实任务",
        paragraphs: [
          "培训结束时最重要的不是再发一份提示词，而是选定一个会在近期真实发生的任务。任务要有触发条件、必要输入、合格输出、人工判断点和明确负责人，才能进入日常工作。",
        ],
        bullets: [
          "优先选择每周会重复出现、材料已经存在的任务。",
          "先用低风险、容易检查的输出建立使用习惯。",
          "每条工作流只设一个内部推动人和一个最终审核责任。",
          "没有足够材料或无法判断对错的任务暂不进入试点。",
        ],
      },
      {
        heading: "建立短周期的使用与复盘节奏",
        paragraphs: [
          "第一周确认模板、权限和基线；第二周观察输入与重复错误；第三周让另一位真实使用者复跑；第四周汇总采用、质量、人工修改和异常。培训讲师可以答疑和协助修正方法，但内部负责人必须拥有流程和继续决策。",
        ],
        bullets: [
          "每次运行保留任务类型、输入是否完整和结果是否采用。",
          "把重复错误归因到资料、提示、模型、流程或责任，而不是笼统说“AI 不好用”。",
          "修正后的模板和规则进入统一版本，避免每个人各自维护。",
          "出现敏感信息、严重事实错误或责任不清时立即回退到人工流程。",
        ],
      },
      {
        heading: "衡量采用，不制造监控与虚假 ROI",
        paragraphs: [
          "早期复盘可以看任务是否重复运行、结果是否被真实采用、人工修改发生在哪里、使用者是否愿意继续，以及是否出现新的风险和返工。只有建立稳定基线与足够样本后，才适合讨论时间、成本或业务结果变化。",
        ],
        bullets: [
          "不把登录次数、提问数量直接当成业务价值。",
          "不为了证明培训有效而强制员工上传敏感工作资料。",
          "不在没有样本范围、计算方法和对照条件时发布提升比例。",
          "明确继续、调整、扩大和停止四种复盘结论。",
        ],
      },
    ],
    boundary:
      "两至四周计划用于验证岗位采用与工作流条件，不承诺员工必然形成长期习惯，也不等于经营 ROI 已经成立。员工数据、绩效评价和工作场所监测需要独立治理与专业审查。",
    sourceKeys: ["openaiBusinessGuide", "oecdSkills", "nist"],
  },
  {
    slug: "how-customer-service-teams-should-use-ai",
    title: "客服团队怎样使用 AI，又不让错误回复直接发给客户？",
    description:
      "客服团队可以先让 AI 辅助问题分类、知识检索、回复草稿和会话摘要；对外发送、退款、合同、投诉和高风险承诺必须设置人工复核与升级。",
    directAnswer:
      "客服团队使用 AI，适合先从问题分类、权威知识检索、回复草稿和会话摘要开始，而不是一开始就自动回复所有客户。企业应明确哪些问题可辅助、哪些必须转人工，要求答案保留来源与版本，并让客服人员核验客户事实、政策、价格、退款、合同和任何对外承诺后再发送。",
    sections: [
      {
        heading: "先选低风险、可核验的问题类型",
        paragraphs: [
          "第一批任务应当有稳定知识来源、答案可以检查、出错后容易回退，例如公开产品信息、流程说明和常见操作指引。涉及投诉、退款、合同、账户安全、健康、财务或重大客户关系的问题，应直接进入人工处理或更高等级复核。",
        ],
        bullets: [
          "为每类问题写清 AI 可做的步骤与禁止动作。",
          "设置转人工条件，而不是只设置一个统一置信度。",
          "没有权威资料或客户上下文不完整时，允许回答“不确定”。",
          "不让模型自行创造价格、库存、交期、政策或补偿承诺。",
        ],
      },
      {
        heading: "回复必须连接来源、版本和客户上下文",
        paragraphs: [
          "客服答案不能只因为语气自然就被认为正确。工作流需要记录使用了哪份产品、政策或服务资料，资料何时生效，以及客户问题中哪些事实已经确认、哪些仍需追问。",
        ],
        bullets: [
          "知识来源有责任人、生效日期和失效规则。",
          "客户身份、订单与历史沟通只使用完成服务所需的最少信息。",
          "草稿标记事实来源、待确认项和可能触发的升级条件。",
          "政策更新后同步更新知识与测试问题。",
        ],
      },
      {
        heading: "人工复核和错误复盘必须进入流程",
        paragraphs: [
          "试点阶段可以默认由客服人员审核后发送。每周汇总被改写、被拒绝、转人工、客户追问和投诉中的代表问题，判断错误来自知识、输入、模型、流程还是责任边界，再决定哪些类型可以继续、扩大或停止。",
        ],
        bullets: [
          "客服人员核验事实、语气、政策和承诺。",
          "高风险回复保留审核人与发送记录。",
          "客户要求更正、删除或投诉时进入既有处理机制。",
          "不把回复数量或机器人接待量直接当作服务质量。",
        ],
      },
    ],
    boundary:
      "本文提供客服工作流设计原则，不是自动客服系统实施方案，也不构成个人信息、消费者权益或合同法律意见。具体行业、渠道、工具与数据的适用要求需要由企业及相应专业人员核验。",
    sourceKeys: ["nistHumanAi", "cacGenAi", "pipl"],
  },
  {
    slug: "how-hr-teams-should-use-ai-in-recruitment",
    title: "HR 团队怎样在招聘中使用 AI，又不让模型替企业做录用决定？",
    description:
      "HR 可以用 AI 辅助岗位说明、简历结构化、面试问题和纪要，但招聘条件、候选人判断、个人信息处理与录用决定必须由企业责任人审核。",
    directAnswer:
      "HR 团队使用 AI，适合先从岗位说明草稿、简历信息结构化、面试问题准备和面试纪要开始，而不是让模型自动淘汰候选人。企业应先定义与岗位真正相关的评价标准，最小化使用个人信息，检查歧视性条件，并要求招聘责任人核验事实、解释判断和作出最终决定。",
    sections: [
      {
        heading: "先把岗位标准写清，再让 AI 辅助整理",
        paragraphs: [
          "招聘工作流应从岗位职责、必须能力、可培养能力和真实工作情境开始。AI 可以帮助检查岗位说明是否完整、把不同格式的材料整理成统一字段，但不能把历史录用偏好直接包装成客观标准。",
        ],
        bullets: [
          "只保留与岗位职责和工作能力有关的评价条件。",
          "检查年龄、性别、民族、地域、婚育等与岗位适配无关的限制。",
          "要求岗位发布人确认真实性、有效期和审核责任。",
          "评价标准变化时记录版本与批准人。",
        ],
      },
      {
        heading: "简历与面试只处理必要信息",
        paragraphs: [
          "候选人材料包含个人信息，不能因为使用 AI 就扩大收集范围。试点应先确认工具、权限、保存期限和允许输入的字段；可以用匿名化样本练习，真实材料则按企业制度和适用要求处理。",
        ],
        bullets: [
          "不把身份证号、联系方式、家庭情况等无关信息交给模型判断。",
          "结构化结果保留原始来源，避免把推断写成候选人事实。",
          "面试问题围绕岗位能力，不生成侵犯隐私或带有歧视的问题。",
          "候选人更正、撤回或投诉时进入既有处理机制。",
        ],
      },
      {
        heading: "AI 可以准备材料，不能承担录用责任",
        paragraphs: [
          "模型摘要、标签和排序都可能遗漏信息或复制偏差。招聘负责人应回看原始材料，记录关键判断依据，并为候选人提供人工复核路径。涉及筛选、薪酬、排班和绩效的高影响用途，需要单独的法务、合规和治理评估。",
        ],
        bullets: [
          "不把模型分数或排名直接当作淘汰线。",
          "对被忽略、被错误归类和需要特殊沟通的情况设置人工复核。",
          "定期比较不同群体的错误与遗漏，不把历史数据默认当作公平标准。",
          "最终面试、薪酬与录用决定由明确责任人作出。",
        ],
      },
    ],
    boundary:
      "本文提供招聘辅助工作流原则，不是自动筛选或人才测评系统实施方案，也不构成劳动用工、反歧视或个人信息法律意见。实际招聘流程、工具与数据应由企业人力资源、法务、合规和安全责任人共同核验。",
    sourceKeys: ["iloHrm", "mohrssRecruitment", "pipl"],
  },
  {
    slug: "what-rules-enterprise-ai-employees-need",
    title: "企业允许员工使用生成式 AI 前，需要先制定哪些规则？",
    description:
      "企业开放生成式 AI 前，应明确批准工具、资料分级、禁止输入、输出复核、对外发布、责任记录、异常上报和规则更新。",
    directAnswer:
      "企业允许员工使用生成式 AI 前，至少要写清七件事：哪些工具和账号可以用，哪些资料禁止输入，个人信息和商业秘密怎样处理，哪些输出必须人工复核，对外发布何时需要标识和批准，谁对使用记录与结果负责，以及发生泄露、错误或不当输出时怎样停止、上报和纠正。",
    sections: [
      {
        heading: "先管工具、账号和输入，不靠员工自行猜测",
        paragraphs: [
          "内部规则首先要回答“在哪里用、用什么账号、能输入什么”。企业可以按公开、内部、敏感和禁止四级整理资料类型，再由数据、法务、安全和业务责任人确认具体边界。",
        ],
        bullets: [
          "列出批准、限制和禁止使用的工具与账号类型。",
          "禁止输入密码、密钥、涉密信息和未经授权的个人信息。",
          "客户资料、合同、源代码、财务和商业秘密按内部制度处理。",
          "练习和培训优先使用匿名化、替换或合成材料。",
        ],
      },
      {
        heading: "把人工复核写成具体责任，而不是一句口号",
        paragraphs: [
          "不同输出需要不同复核：内部头脑风暴与对外合同、招聘决定、客户承诺的风险完全不同。规则应按场景指定事实、版权、隐私、政策、专业判断和对外承诺的审核人。",
        ],
        bullets: [
          "AI 输出默认是草稿，不因为语气完整就视为事实。",
          "合同、财务、法律、人事、健康和客户承诺必须由相应责任人核验。",
          "对外文本、图片、音视频按渠道和适用要求检查生成内容标识。",
          "保留来源、修改、批准和最终发布版本。",
        ],
      },
      {
        heading: "设定停止条件、异常上报和定期更新",
        paragraphs: [
          "可执行的规则不能只写禁止事项，还要告诉员工出错后怎么办。企业应指定报告入口和处置责任人，记录泄露、严重事实错误、歧视、不当内容、越权访问和供应商变化，并用真实事件更新培训与规则。",
        ],
        bullets: [
          "发现敏感信息误传时立即停止相关任务并按内部流程报告。",
          "出现高风险错误、无法核验来源或责任不清时回退到人工流程。",
          "工具条款、模型、账号权限或法规变化后重新评估。",
          "规则定期复核，并让员工知道最新版本在哪里。",
        ],
      },
    ],
    boundary:
      "本文与下载模板用于企业内部讨论和责任梳理，不构成法律、信息安全、保密、数据合规或行业监管意见。企业应结合所在地区、行业、数据类型、工具条款和既有制度，由相应专业责任人审查后发布。",
    sourceKeys: ["nistGenAiProfile", "cacGenAi", "pipl", "cacAiLabeling"],
  },
];

export const questionMap = Object.fromEntries(
  questions.map((question) => [question.slug, question]),
) as Record<string, QuestionArticle>;

export const questionRelatedLinks: Record<string, RelatedLink[]> = {
  "how-to-choose-enterprise-ai-consultant": [
    {
      label: "企业 AI 咨询",
      description: "查看适用对象、咨询步骤、交付成果与服务边界。",
      href: "/services/enterprise-ai-consulting/",
    },
    {
      label: "万臻事实页",
      description: "核验公开身份、第一方履历、著作与来源冲突说明。",
      href: "/about-wan-zhen/",
    },
  ],
  "how-to-choose-enterprise-ai-trainer": [
    {
      label: "企业 AI 业务培训",
      description: "查看真实岗位任务、课堂产出、持续使用方式与能力边界。",
      href: "/services/enterprise-ai-training/",
    },
    {
      label: "万臻事实页",
      description: "核验公开身份、第一方履历、著作与来源冲突说明。",
      href: "/about-wan-zhen/",
    },
  ],
  "how-to-design-enterprise-ai-training-plan": [
    {
      label: "一日企业 AI 培训大纲",
      description: "查看会前准备、现场模块、工作流练习和会后试点。",
      href: "/programs/one-day-enterprise-ai-training/",
    },
    {
      label: "企业 AI 培训前准备",
      description: "查看任务、材料、参与者、输出标准和内部负责人要求。",
      href: "/questions/how-to-prepare-for-enterprise-ai-training/",
    },
  ],
  "how-to-evaluate-enterprise-ai-service-provider": [
    {
      label: "下载采购与验收清单",
      description: "用 Markdown 模板整理业务问题、资料边界、供应商证据、交付物与验收记录。",
      href: "/enterprise-ai-service-buyer-checklist.md",
    },
    {
      label: "企业 AI 服务目录",
      description: "比较咨询、管理层工作坊、业务培训与工作流试点的范围和交付物。",
      href: "/services/",
    },
  ],
  "how-to-sustain-enterprise-ai-training-adoption": [
    {
      label: "30 天落地陪跑参考计划",
      description: "查看每周任务、复盘节奏、带走成果与停止条件。",
      href: "/programs/thirty-day-enterprise-ai-adoption-plan/",
    },
    {
      label: "AI 工作流设计与试点",
      description: "查看一个明确任务怎样进入输入、处理、复核与复盘。",
      href: "/services/ai-workflow-pilot/",
    },
  ],
  "how-customer-service-teams-should-use-ai": [
    {
      label: "客户服务知识与回复工作流",
      description: "查看输入、步骤、交付物、人工复核和升级边界。",
      href: "/applications/customer-service-ai-workflow/",
    },
    {
      label: "企业知识问答与更新工作流",
      description: "查看来源、版本、权限、纠错与失效机制。",
      href: "/applications/enterprise-knowledge-ai-workflow/",
    },
  ],
  "how-hr-teams-should-use-ai-in-recruitment": [
    {
      label: "招聘准备与人工决策工作流",
      description: "查看岗位标准、必要输入、辅助步骤、人工复核和录用责任边界。",
      href: "/applications/hr-recruitment-ai-workflow/",
    },
    {
      label: "企业 AI 内训数据边界",
      description: "查看真实资料、匿名化、权限和个人信息处理原则。",
      href: "/questions/can-ai-training-use-company-data/",
    },
  ],
  "what-rules-enterprise-ai-employees-need": [
    {
      label: "下载企业生成式 AI 使用规则模板",
      description: "用可编辑 Markdown 清单梳理工具、资料、复核、发布、记录、异常和更新责任。",
      href: "/enterprise-generative-ai-use-policy-template.md",
    },
    {
      label: "企业 AI 内训数据边界",
      description: "查看真实资料、匿名化、权限和个人信息处理原则。",
      href: "/questions/can-ai-training-use-company-data/",
    },
  ],
  "why-ai-training-needs-workflows": [
    {
      label: "企业 AI 业务培训",
      description: "查看培训如何使用真实岗位任务并形成工作流。",
      href: "/services/enterprise-ai-training/",
    },
    {
      label: "一日企业 AI 培训大纲",
      description: "查看会前准备、现场模块和培训后试点结构。",
      href: "/programs/one-day-enterprise-ai-training/",
    },
  ],
  "where-to-start-enterprise-ai": [
    {
      label: "企业 AI 业务应用",
      description: "按销售、采购、知识和经营任务查看可复用工作流。",
      href: "/applications/",
    },
    {
      label: "AI 工作流试点",
      description: "查看一个明确任务如何进入小范围验证。",
      href: "/services/ai-workflow-pilot/",
    },
  ],
  "enterprise-ai-consulting-vs-training": [
    {
      label: "四类企业 AI 服务",
      description: "对比咨询、管理层工作坊、业务培训和工作流试点。",
      href: "/services/",
    },
    {
      label: "培训与工作坊大纲",
      description: "查看两种常用活动形式分别怎样安排。",
      href: "/programs/",
    },
  ],
  "who-wan-zhen-ai-service-is-for": [
    {
      label: "企业 AI 服务目录",
      description: "按企业所处阶段判断更合适的合作入口。",
      href: "/services/",
    },
    {
      label: "第一方实践",
      description: "查看已确认实践、可复用模板和未公开证据。",
      href: "/cases/",
    },
  ],
  "what-enterprise-ai-consulting-delivers": [
    {
      label: "企业 AI 咨询交付",
      description: "查看场景清单、优先级、试点方案和责任边界。",
      href: "/services/enterprise-ai-consulting/",
    },
    {
      label: "工作流设计与试点",
      description: "查看咨询成果如何进入一个可验证的业务任务。",
      href: "/services/ai-workflow-pilot/",
    },
  ],
  "ai-training-for-executives-or-employees": [
    {
      label: "管理层 AI 决策工作坊",
      description: "查看管理层需要形成的共同判断和行动清单。",
      href: "/services/executive-ai-workshop/",
    },
    {
      label: "业务团队一日内训",
      description: "查看岗位团队如何使用真实材料完成工作流。",
      href: "/programs/one-day-enterprise-ai-training/",
    },
  ],
  "how-to-measure-enterprise-ai-pilot": [
    {
      label: "AI 工作流试点",
      description: "查看输入、输出、人工复核与复盘应怎样设计。",
      href: "/services/ai-workflow-pilot/",
    },
    {
      label: "客户案例证据框架",
      description: "下载基线、过程、结果与公开授权采集模板。",
      href: "/resources/",
    },
  ],
  "how-to-budget-enterprise-ai-consulting": [
    {
      label: "企业 AI 服务目录",
      description: "先比较服务范围和交付物，再判断预算结构。",
      href: "/services/",
    },
    {
      label: "咨询与培训的区别",
      description: "判断企业当前购买的是方向、能力还是试点支持。",
      href: "/questions/enterprise-ai-consulting-vs-training/",
    },
  ],
  "how-to-prepare-for-enterprise-ai-training": [
    {
      label: "一日企业 AI 培训大纲",
      description: "查看会前材料、现场练习和会后试点的完整结构。",
      href: "/programs/one-day-enterprise-ai-training/",
    },
    {
      label: "企业 AI 业务培训",
      description: "查看岗位培训的产出、持续使用方式和能力边界。",
      href: "/services/enterprise-ai-training/",
    },
  ],
  "manufacturing-ai-training-starting-points": [
    {
      label: "制造业企业 AI 场景",
      description: "查看采购、知识与经营信息工作流的适用条件和技术边界。",
      href: "/industries/manufacturing-enterprise-ai/",
    },
    {
      label: "企业 AI 业务应用",
      description: "查看四类可复用工作流的输入、步骤与人工复核。",
      href: "/applications/",
    },
  ],
  "sme-ai-consulting-or-training-first": [
    {
      label: "成长型中小企业 AI 场景",
      description: "查看资源有限时怎样选择第一条任务和控制投入范围。",
      href: "/industries/sme-enterprise-ai/",
    },
    {
      label: "四类企业 AI 服务",
      description: "比较咨询、管理层工作坊、业务培训与工作流试点。",
      href: "/services/",
    },
  ],
  "professional-services-ai-workflows": [
    {
      label: "专业服务企业 AI 场景",
      description: "查看客户研究、知识复用与项目汇报的优先工作流。",
      href: "/industries/professional-services-enterprise-ai/",
    },
    {
      label: "企业知识问答工作流",
      description: "查看来源、版本、权限、引用与更新责任怎样设计。",
      href: "/applications/enterprise-knowledge-ai-workflow/",
    },
  ],
  "can-ai-training-use-company-data": [
    {
      label: "企业 AI 培训准备",
      description: "查看会前任务、匿名化材料、输出标准与内部负责人要求。",
      href: "/questions/how-to-prepare-for-enterprise-ai-training/",
    },
    {
      label: "一日企业 AI 培训大纲",
      description: "查看真实材料练习、人工复核与会后试点结构。",
      href: "/programs/one-day-enterprise-ai-training/",
    },
  ],
  "ai-consultant-vs-software-implementer": [
    {
      label: "企业 AI 咨询",
      description: "查看业务诊断、场景优先级、试点方案与服务边界。",
      href: "/services/enterprise-ai-consulting/",
    },
    {
      label: "AI 工作流设计与试点",
      description: "查看明确任务怎样进入输入、处理、复核与复盘。",
      href: "/services/ai-workflow-pilot/",
    },
  ],
};

export const legacyQuestionRedirects: Record<string, string> = {
  "ai-for-sales-procurement-knowledge": "where-to-start-enterprise-ai",
  "how-to-design-association-ai-talk": "enterprise-ai-consulting-vs-training",
  "who-wan-zhen-training-is-for": "who-wan-zhen-ai-service-is-for",
};
