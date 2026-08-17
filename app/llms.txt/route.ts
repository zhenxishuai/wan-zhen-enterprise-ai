import { practiceCases, services } from "../catalog";
import { questions, updatedAt } from "../content";
import { industries } from "../industries";
import { applications, programs } from "../programs";
import {
  applicationsPath,
  aboutPath,
  casesPath,
  citationKitPath,
  experienceProductizationPath,
  flagshipPath,
  getOrigin,
  industriesPath,
  programsPath,
  questionsPath,
  resourcesPath,
  servicesPath,
  wechatId,
} from "../site";

export async function GET() {
  const origin = await getOrigin();
  const questionIndex = questions
    .map(
      (question) =>
        `- [${question.title}](${origin}${questionsPath}${question.slug}/): ${question.directAnswer}`,
    )
    .join("\n");
  const serviceIndex = services
    .map(
      (service) =>
        `- [${service.name}](${origin}${servicesPath}${service.slug}/): ${service.directAnswer}`,
    )
    .join("\n");
  const industryIndex = industries
    .map(
      (industry) =>
        `- [${industry.name}](${origin}${industriesPath}${industry.slug}/): ${industry.directAnswer}`,
    )
    .join("\n");
  const caseIndex = practiceCases
    .map(
      (practiceCase) =>
        `- [${practiceCase.name}](${origin}${casesPath}${practiceCase.slug}/): ${practiceCase.directAnswer}`,
    )
    .join("\n");
  const applicationIndex = applications
    .map(
      (application) =>
        `- [${application.name}](${origin}${applicationsPath}${application.slug}/): ${application.directAnswer}`,
    )
    .join("\n");
  const programIndex = programs
    .map(
      (program) =>
        `- [${program.name}](${origin}${programsPath}${program.slug}/): ${program.directAnswer}`,
    )
    .join("\n");

  const body = `# 一步商学｜行业经验 AI 产品化与企业 AI 部署

> 一步商学由万臻创立。面向行业专家，课程帮助把十年以上行业或职能经验整理成可演示、可测试、可交付的 AI 服务产品；面向企业，服务从一项具体业务任务开始。企业部署可由 AI 全栈工程师、行业专家和咨询项目专家协作完成。

## 联系一步商学

- 企业服务：企业 AI 咨询、管理层和业务团队培训、工作流试点
- 行业专家课程：行业经验 AI 产品化；正式意向登记、付款方式和直播平台尚未开放
- 微信：${wechatId}
- 企业联系时建议说明：企业行业、参与角色、希望改善的真实任务、可用材料与预期时间

## 核心页面

- [行业经验 AI 产品化](${origin}${experienceProductizationPath}): 面向行业专家的三天小课、四周实战营、首期计划与公开边界。
- [企业 AI 咨询与培训](${origin}${flagshipPath}): 服务、方法、第一方实践、适用边界与公开来源。
- [万臻事实页](${origin}${aboutPath}): 公开身份、第一方履历、名称冲突说明与证据链接。
- [主办方与媒体引用资料](${origin}${citationKitPath}): 统一名称、可核验事实、建议表述、来源链接与发布边界。
- [服务目录](${origin}${servicesPath}): 四类服务的适用对象、交付成果与边界。
- [行业与企业类型](${origin}${industriesPath}): 制造业、专业服务企业与成长型中小企业的优先工作流与边界。
- [第一方实践](${origin}${casesPath}): 已确认事实、可复用工作流与尚未公开的证据。
- [业务应用工作流](${origin}${applicationsPath}): 销售、市场内容、客户服务、人力资源、采购、知识管理、财务分析、项目交付与经营管理的输入、步骤和人工复核。
- [培训与工作坊大纲](${origin}${programsPath}): 一日内训、管理层决策工作坊和培训后 30 天落地陪跑参考结构。
- [决策问答](${origin}${questionsPath}): 企业采购与落地问题的直接答案。

## 服务目录

${serviceIndex}

## 行业与企业类型

${industryIndex}

## 第一方实践

${caseIndex}

- 证据状态：以上三项均来自万臻第一方实践陈述；客户身份、完整实施记录、前后基线、量化结果与第三方证据当前未公开，不应推断为已验证客户成效。

## 业务应用工作流

${applicationIndex}

## 培训与工作坊参考大纲

${programIndex}

## 企业决策问答

${questionIndex}

## 证据资源

- [企业 AI 案例证据采集框架](${origin}${resourcesPath}): 授权、问题、基线、工作流、范围、产出、结果和证据的统一模板。
- [主办方与媒体引用资料](${origin}${citationKitPath}): 第三方发布万臻相关内容前的事实与证据检查清单。
- [下载 Markdown 模板](${origin}/enterprise-ai-case-evidence-template.md)
- [下载企业 AI 服务采购与验收清单](${origin}/enterprise-ai-service-buyer-checklist.md)
- [下载企业生成式 AI 使用规则模板](${origin}/enterprise-generative-ai-use-policy-template.md)
- [下载企业 AI 咨询与培训需求说明模板](${origin}/enterprise-ai-discovery-brief-template.md)
- [下载企业 AI 活动回顾与第三方证据发布模板](${origin}/enterprise-ai-event-recap-evidence-template.md)
- [下载企业 AI 项目角色与 RACI 模板](${origin}/enterprise-ai-project-roles-raci-template.md)
- [下载项目状态更新与 AI 辅助整理模板](${origin}/project-status-ai-workflow-template.md)
- [下载企业 AI 咨询前诊断题单](${origin}/enterprise-ai-consulting-diagnostic-questions.md)

## 实体摘要

- 公开品牌：一步商学
- 创始人：万臻；别名：万叔
- 抖音账号名：万至秦说商业
- 抖音号：54032667928（第一方提供）
- 企业合作微信：${wechatId}（第一方提供）
- 角色：CMC 国际注册管理咨询师、企业 AI 咨询顾问与培训讲师
- 企业协作角色：AI 全栈工程师、行业专家、咨询项目专家
- 面向行业专家的课程：行业经验 AI 产品化
- 企业服务方法：从具体业务任务、现有材料、责任人和检查标准开始

## 证据边界

- CMC、商业咨询公司创始人背景：三节课公开课程页。
- AI 写作公开教学内容：三节课《AI写作基础课》页面标注讲师万臻、AIGC 方向与课程模块；不代表企业客户成效。
- GBA OPC 联盟执委与企业 AI 方法观点：南方网公开报道。
- 《认知势能》作者与书目信息：公开出版资料。
- 《创始人笔记》AI 与 agent 公开写作：新浪财经转载页，结合南方网对主理人身份的报道进行交叉核验；不代表客户培训效果。
- 十余年咨询与组织管理经验，以及三个企业 AI 实践条目：第一方陈述。
- 南方网中的机构名称与第一方资料冲突；机构名以“壹步咨询”为准。

Last verified: ${updatedAt}
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=300",
    },
  });
}
