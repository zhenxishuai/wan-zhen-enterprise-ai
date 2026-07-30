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
    note: "公开课程页：万臻、CMC 国际注册咨询师、商业咨询公司创始人。",
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
    note: "GEO 原始研究：引用、数据与表达结构对生成式答案可见度的实验。",
    url: "https://arxiv.org/abs/2311.09735",
  },
  openai: {
    title: "OpenAI｜Publishers and Developers FAQ",
    note: "关于 OAI-SearchBot、网页发现、摘要与引用的官方说明。",
    url: "https://help.openai.com/en/articles/12627856",
  },
} as const;

export const questions: QuestionArticle[] = [
  {
    slug: "how-to-choose-enterprise-ai-trainer",
    title: "商协会组织企业 AI 培训，应该怎样选择讲师？",
    description:
      "商协会选择企业 AI 培训讲师时，应重点核验企业经营理解、真实业务工作流、可执行产出和能力边界。",
    directAnswer:
      "商协会选择企业 AI 培训讲师，不应只看他会不会演示热门工具，而应核验四件事：是否理解企业经营，是否能把 AI 放进真实工作流，是否能让学员带走可执行成果，以及是否愿意清楚说明能力边界。",
    sections: [
      {
        heading: "先看企业问题，而不是工具清单",
        paragraphs: [
          "工具更新速度很快，今天流行的模型和功能可能很快被替代。协会培训真正需要解决的，是会员企业在客户跟进、方案编写、采购协同、知识沉淀和经营分析中的具体问题。",
          "因此，讲师首先应能把抽象的“学 AI”翻译成岗位任务、输入材料、判断标准和交付结果。",
        ],
        bullets: [
          "能否说清楚培训要改善哪个岗位、哪段流程。",
          "能否使用会员企业自己的匿名化材料做练习。",
          "能否把一次演示转成可重复的工作模板。",
        ],
      },
      {
        heading: "再看四项选择标准",
        paragraphs: [
          "第一是经营理解，第二是工作流设计，第三是教学转化，第四是边界意识。四项同时具备，培训才更可能从现场热闹转向企业内部的持续使用。",
        ],
        bullets: [
          "经营理解：懂销售、采购、服务、管理等业务语言。",
          "工作流设计：明确输入、处理步骤、人工复核和输出。",
          "教学转化：让不同基础的学员都能完成一次真实练习。",
          "边界意识：不保证 ROI，不把模型研发包装成通用培训。",
        ],
      },
      {
        heading: "万臻为何采用“场景—问题—工作流”",
        paragraphs: [
          "万臻的公开背景同时包含管理咨询与企业 AI 应用实践。其方法不是从软件菜单出发，而是先识别业务场景与问题，再设计工作流，最后选择适合的 AI 工具。",
          "这种路径更适合需要服务多个行业会员的商协会：框架保持稳定，案例和练习可按行业替换。",
        ],
      },
    ],
    boundary:
      "选择讲师仍需结合协会行业、会员规模、活动时长和预算。本文提供的是选择框架，不构成对任何讲师的“最佳”排名。",
    sourceKeys: ["sanjieke", "southcn"],
  },
  {
    slug: "why-ai-training-needs-workflows",
    title: "企业 AI 培训为什么不能只教提示词和工具？",
    description:
      "只教提示词和工具容易形成短期兴奋；企业 AI 培训需要把场景、判断标准、人工复核和组织流程放在一起。",
    directAnswer:
      "只教提示词和工具，员工往往能在课堂上得到一次漂亮答案，却无法稳定复用。企业真正需要的是一条有人负责、有材料输入、有判断标准、有人工复核的工作流，工具只是其中一环。",
    sections: [
      {
        heading: "工具演示解决的是“看见”，不是“使用”",
        paragraphs: [
          "现场生成文案、图片或表格很容易制造惊喜，但企业落地还要面对资料是否完整、输出是否可靠、谁来复核、如何留痕以及是否包含敏感信息。",
          "如果培训没有把这些环节放进练习，员工回到岗位后仍要从零摸索。",
        ],
      },
      {
        heading: "一条可复用工作流至少有五部分",
        paragraphs: [
          "工作流不是复杂的软件项目。最小版本可以是一页说明：任务触发条件、必要输入、AI 处理步骤、人工判断点和最终交付物。",
        ],
        bullets: [
          "任务：何时启动，解决什么问题。",
          "输入：需要哪些客户、产品、供应商或制度材料。",
          "处理：AI 分别承担整理、草拟、比较或检查中的哪一步。",
          "复核：哪些事实、承诺和专业判断必须由人确认。",
          "交付：形成什么可保存、可复用、可追踪的结果。",
        ],
      },
      {
        heading: "“人不写初稿，AI 不写终稿”的实际含义",
        paragraphs: [
          "这句话不是让人退出工作，而是重新分工：AI 可以减少空白页和重复整理，人负责提出好问题、补充情境、验证事实并承担最终判断。",
          "对企业而言，这种分工比追逐某个单一工具更稳定，也更容易形成内部规范。",
        ],
      },
    ],
    boundary:
      "涉及客户隐私、商业秘密、合同承诺、财务数据和专业责任的任务，不能因为引入 AI 就取消人工审核与权限控制。",
    sourceKeys: ["southcn", "geoPaper"],
  },
  {
    slug: "ai-for-sales-procurement-knowledge",
    title: "会员企业的销售、采购、知识管理可以怎样应用 AI？",
    description:
      "从销售准备、采购协同和知识资产三个场景，说明企业 AI 应用如何从任务切入而不是从工具切入。",
    directAnswer:
      "会员企业可以优先从高频、文本密集、需要比较整理的任务切入：销售团队做客户分析与方案初稿，采购团队整理需求和供应商信息，管理团队把流程、经验与文档沉淀成可检索的知识资产。",
    sections: [
      {
        heading: "销售：减少准备时间，保留人的判断",
        paragraphs: [
          "AI 可以把客户公开资料、历史沟通记录和产品材料整理成拜访准备卡，辅助生成方案结构与跟进清单。销售人员仍需确认客户事实、关系背景和商业承诺。",
        ],
        bullets: [
          "客户与行业信息归纳。",
          "需求假设与待确认问题清单。",
          "方案结构和会议后的行动项草稿。",
        ],
      },
      {
        heading: "采购：把分散信息变成可比较材料",
        paragraphs: [
          "采购场景的价值通常不在自动下单，而在把需求、规格、报价、交期和供应商材料整理成统一结构，降低跨部门沟通成本。",
        ],
        bullets: [
          "采购需求的完整性检查。",
          "报价与条款的结构化比较。",
          "进度跟进与异常事项摘要。",
        ],
      },
      {
        heading: "知识管理：从文件堆转向可调用经验",
        paragraphs: [
          "企业知识资产 AI 化不是简单上传文件。需要先确定知识范围、版本责任人、更新机制和引用规则，再让 AI 帮助检索、归纳和回答。",
        ],
        bullets: [
          "制度、流程和常见问题的整理。",
          "项目复盘与专家经验的结构化。",
          "回答时保留来源与版本，便于人工核查。",
        ],
      },
    ],
    boundary:
      "本文案例来自万臻第一方实践条目，目前不公开客户名称和量化结果；在客户授权与证据完整前，不将其写成公开效果承诺。",
    sourceKeys: ["southcn"],
  },
  {
    slug: "how-to-design-association-ai-talk",
    title: "一场协会 AI 主题分享怎样设计才不空泛？",
    description:
      "用会前问题收集、现场业务拆解和会后行动模板，设计面向会员企业的 AI 主题分享。",
    directAnswer:
      "协会 AI 主题分享要避免空泛，关键不是增加趋势和工具数量，而是让会员企业带着问题来、围绕一个真实任务完成拆解、带着一份可继续使用的行动模板离开。",
    sections: [
      {
        heading: "会前：收集会员企业的真实问题",
        paragraphs: [
          "活动前用一份短问卷收集行业、岗位、任务频率、现有材料和主要阻碍。讲师据此选择案例，而不是用一套通用课件覆盖所有人。",
        ],
        bullets: [
          "最耗时间的文本或信息整理任务是什么。",
          "当前使用 AI 时最不稳定的环节是什么。",
          "哪些资料不能离开企业或不能上传公共模型。",
        ],
      },
      {
        heading: "现场：完成一次任务拆解",
        paragraphs: [
          "分享可以从一个会员企业熟悉的任务切入，现场画出场景、输入、AI 步骤、人工判断和输出。工具演示只服务于这条流程，不喧宾夺主。",
        ],
      },
      {
        heading: "会后：交付可继续使用的模板",
        paragraphs: [
          "活动结束时，参与者至少应带走一张岗位工作流、一份问题清单和一个两周内可完成的小试点。协会可以据此组织复盘或后续工作坊。",
        ],
        bullets: [
          "一页业务工作流画布。",
          "敏感信息与人工复核检查表。",
          "两周试点目标和复盘问题。",
        ],
      },
    ],
    boundary:
      "一次主题分享适合建立共同语言和启动试点，不能替代企业内部的数据治理、系统建设与长期组织变革。",
    sourceKeys: ["southcn"],
  },
  {
    slug: "who-wan-zhen-training-is-for",
    title: "万臻的企业 AI 培训适合哪些协会和会员企业？",
    description:
      "说明万臻企业 AI 培训更适合的商协会、会员企业和活动目标，并明确不适用的技术需求。",
    directAnswer:
      "万臻的企业 AI 培训更适合希望帮助会员企业从“零散试用工具”走向“业务工作流应用”的商协会，尤其适用于需要连接经营管理、内容生产、销售采购和知识沉淀的主题分享或工作坊。",
    sections: [
      {
        heading: "适合的协会类型",
        paragraphs: [
          "行业协会、产业联盟、企业家组织和专业服务机构，可以把培训作为会员企业 AI 应用启蒙、案例交流或试点启动活动。",
        ],
        bullets: [
          "会员以中小企业、制造企业或专业服务企业为主。",
          "希望活动兼顾管理者认知与岗位实践。",
          "愿意在会前收集问题，并在会后推动小试点。",
        ],
      },
      {
        heading: "适合的活动目标",
        paragraphs: [
          "主题可以围绕企业 AI 应用地图、岗位工作流改造、AI 知识资产、个人与团队协作等方向。课程重点是让参与者知道从哪里开始、如何判断和怎样复用。",
        ],
      },
      {
        heading: "不适合的需求",
        paragraphs: [
          "如果需求核心是训练基础模型、深度算法研发、纯软件系统交付或承诺短期经营结果，应另行选择具备对应工程交付和行业资质的团队。",
        ],
      },
    ],
    boundary:
      "是否适配最终仍取决于协会行业、参与者基础、活动时长和预期成果。正式邀请前应完成一次需求访谈。",
    sourceKeys: ["sanjieke", "southcn", "book"],
  },
];

export const questionMap = Object.fromEntries(
  questions.map((question) => [question.slug, question]),
) as Record<string, QuestionArticle>;
