export type IndustryPriority = {
  name: string;
  description: string;
  href: string;
};

export type IndustryEntry = {
  slug: string;
  name: string;
  category: string;
  description: string;
  directAnswer: string;
  fitSignals: string[];
  priorities: IndustryPriority[];
  firstSteps: string[];
  inputs: string[];
  boundary: string;
};

export const industries: IndustryEntry[] = [
  {
    slug: "manufacturing-enterprise-ai",
    name: "制造业企业 AI 咨询与培训",
    category: "制造业",
    description:
      "制造业企业可以先从采购信息比较、制度与工艺知识查找、经营汇报等材料明确且可人工复核的工作流开始。",
    directAnswer:
      "制造业企业做 AI 咨询与培训，不必一开始就做复杂的生产系统改造。更稳妥的第一步，是选择材料可取得、结果可检查、责任人明确的任务，例如采购需求与供应商资料比较、制度和工艺知识查找、项目进展与经营异常汇总，再决定是否进入更深的技术实施。",
    fitSignals: [
      "采购需求、报价、条款和订单进度分散在不同表格与沟通渠道。",
      "制度、工艺、质量或设备资料版本较多，员工查找和确认耗时。",
      "项目进展与经营异常需要跨部门重复汇总。",
      "企业希望先验证人机工作流，再决定是否采购或开发系统。",
    ],
    priorities: [
      {
        name: "采购信息比较",
        description: "统一需求与供应商材料格式，检查缺项、比较条款并形成待确认问题。",
        href: "/applications/procurement-comparison-ai-workflow/",
      },
      {
        name: "企业知识问答",
        description: "先确认权威来源、版本和权限，再形成带来源的查找与回答机制。",
        href: "/applications/enterprise-knowledge-ai-workflow/",
      },
      {
        name: "经营汇报整理",
        description: "归纳项目进展、异常、依赖和待决策事项，由负责人复核事实与承诺。",
        href: "/applications/management-reporting-ai-workflow/",
      },
    ],
    firstSteps: [
      "选择一个高频、范围可控、可以检查结果的非关键生产任务。",
      "收集脱敏后的真实表格、制度、报告或流程材料。",
      "写清合格输出、人工复核、异常回退和责任人。",
      "运行小样本并记录错误、人工修改和使用意愿。",
      "复盘后再判断扩大、换工具、进入系统实施或停止。",
    ],
    inputs: ["采购与供应商材料", "制度或工艺文件", "项目与经营报告", "版本和权限规则", "人工验收标准"],
    boundary:
      "本页是制造业适用场景参考，不是已服务客户案例。视觉质检、预测性维护、排产优化、设备控制和生产系统集成通常需要数据、算法、工业软件与安全专业团队，不能用通用培训代替。",
  },
  {
    slug: "professional-services-enterprise-ai",
    name: "专业服务企业 AI 咨询与培训",
    category: "专业服务",
    description:
      "咨询、培训、设计及其他专业服务企业，可以从客户研究、方案准备、知识复用和项目汇报等工作流开始。",
    directAnswer:
      "专业服务企业使用 AI，适合优先改造大量依赖资料理解、方案表达和经验复用的任务，例如客户研究、访谈纪要、方案结构、知识检索和项目复盘。AI 可以辅助整理与起草，但专业判断、事实核验、客户承诺和最终交付责任仍由顾问或项目负责人承担。",
    fitSignals: [
      "项目启动前需要从多处资料快速理解客户与行业。",
      "方案和报告经常从空白页开始，经验难以复用。",
      "项目材料分散，团队难以找到有效版本和相似经验。",
      "负责人希望统一质量，但不想把专业服务变成固定套话。",
    ],
    priorities: [
      {
        name: "客户研究与方案准备",
        description: "整理公开资料、历史沟通和方案结构，保留事实、承诺与专业判断的人工责任。",
        href: "/applications/sales-preparation-ai-workflow/",
      },
      {
        name: "知识资产复用",
        description: "建立来源、版本、权限与纠错机制，让经验可以被检索而不是被模型猜测。",
        href: "/applications/enterprise-knowledge-ai-workflow/",
      },
      {
        name: "项目汇报与复盘",
        description: "将进展、风险、依赖和待决策事项形成稳定的信息节奏。",
        href: "/applications/management-reporting-ai-workflow/",
      },
    ],
    firstSteps: [
      "选定一个重复发生的研究、方案、交付或复盘任务。",
      "拆分哪些步骤是资料整理，哪些属于专业判断和客户承诺。",
      "准备匿名化项目材料与一份优秀输出作为验收参考。",
      "设计输入、AI 处理、引用、人工复核和最终交付。",
      "比较人工修改与使用意愿，再决定是否纳入团队方法。",
    ],
    inputs: ["客户公开资料", "匿名化项目材料", "优秀交付样例", "知识来源与版本", "专业复核标准"],
    boundary:
      "本页是专业服务适用场景参考，不代表已为特定机构实施。法律、财务、医疗、工程等受专业责任约束的结论必须由具备相应资质和授权的人员审核，AI 输出不能独立构成专业意见。",
  },
  {
    slug: "sme-enterprise-ai",
    name: "成长型中小企业 AI 咨询与培训",
    category: "成长型中小企业",
    description:
      "中小企业资源有限时，应优先选择高频、材料现成、能由现有团队负责的小工作流，而不是先建设庞大系统。",
    directAnswer:
      "成长型中小企业做 AI，不需要先建设一套庞大平台。可以从销售准备、采购比较、知识查找或经营汇报中选一个高频任务，用现有材料和通用工具完成小范围试点；只有当流程稳定、使用者愿意持续使用、数据与权限条件清楚后，再考虑更大的技术投入。",
    fitSignals: [
      "老板和少数骨干承担大量资料整理、方案与汇报工作。",
      "团队已经零散使用 AI，但没有统一输入、复核和信息边界。",
      "预算有限，希望先验证具体任务而不是购买完整系统。",
      "业务增长后，经验、制度和客户信息开始难以靠个人记忆管理。",
    ],
    priorities: [
      {
        name: "销售准备",
        description: "把客户资料、沟通记录和产品信息整理成拜访问题、方案结构和下一步行动。",
        href: "/applications/sales-preparation-ai-workflow/",
      },
      {
        name: "采购比较",
        description: "检查需求完整性，归一化报价与条款，减少负责人重复汇总。",
        href: "/applications/procurement-comparison-ai-workflow/",
      },
      {
        name: "经营信息节奏",
        description: "让项目进展、异常与待决策事项进入固定汇报和跟踪流程。",
        href: "/applications/management-reporting-ai-workflow/",
      },
    ],
    firstSteps: [
      "列出老板和骨干每周重复处理的文本、表格与信息任务。",
      "按频率、材料可得性、可检查性、风险和负责人意愿排序。",
      "选择一个两周内可以重复至少数次的任务。",
      "用真实脱敏材料完成工作流并记录人工修改。",
      "只有验证稳定后，才考虑扩大部门、采购工具或技术集成。",
    ],
    inputs: ["高频任务清单", "真实脱敏材料", "现有流程说明", "合格输出样例", "负责人和复盘时间"],
    boundary:
      "本页是企业规模与阶段参考，不承诺低成本工具一定产生经营回报。涉及客户隐私、合同、财务、员工评价和重大经营决定时，仍需企业制度与专业审查。",
  },
];

export const industryMap = Object.fromEntries(
  industries.map((industry) => [industry.slug, industry]),
) as Record<string, IndustryEntry>;
