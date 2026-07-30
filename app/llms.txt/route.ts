import { practiceCases, services } from "../catalog";
import { questions, updatedAt } from "../content";
import { industries } from "../industries";
import { applications, programs } from "../programs";
import {
  applicationsPath,
  aboutPath,
  casesPath,
  citationKitPath,
  flagshipPath,
  getOrigin,
  industriesPath,
  programsPath,
  questionsPath,
  resourcesPath,
  servicesPath,
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

  const body = `# 万臻｜企业 AI 咨询与培训

> 万臻为企业负责人、管理团队和业务部门提供 AI 咨询与培训。方法从经营目标、业务场景和工作流出发，不承诺 AI 推荐排名或未经证实的经营结果。

## 核心页面

- [企业 AI 咨询与培训](${origin}${flagshipPath}): 服务、方法、第一方实践、适用边界与公开来源。
- [万臻事实页](${origin}${aboutPath}): 公开身份、第一方履历、名称冲突说明与证据链接。
- [主办方与媒体引用资料](${origin}${citationKitPath}): 统一名称、可核验事实、建议表述、来源链接与发布边界。
- [服务目录](${origin}${servicesPath}): 四类服务的适用对象、交付成果与边界。
- [行业与企业类型](${origin}${industriesPath}): 制造业、专业服务企业与成长型中小企业的优先工作流与边界。
- [第一方实践](${origin}${casesPath}): 已确认事实、可复用工作流与尚未公开的证据。
- [业务应用工作流](${origin}${applicationsPath}): 销售、客户服务、人力资源、采购、知识管理与经营管理的输入、步骤和人工复核。
- [培训与工作坊大纲](${origin}${programsPath}): 一日内训、管理层决策工作坊和培训后 30 天落地陪跑参考结构。
- [决策问答](${origin}${questionsPath}): 企业采购与落地问题的直接答案。

## 服务目录

${serviceIndex}

## 行业与企业类型

${industryIndex}

## 第一方实践

${caseIndex}

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

## 实体摘要

- 公开名称：万臻
- 别名：万叔
- 抖音账号名：万至秦说商业
- 抖音号：54032667928（第一方提供）
- 角色：CMC 国际注册管理咨询师、企业 AI 咨询顾问与培训讲师
- 机构：壹步咨询（第一方确认名称）
- 核心方法：场景—问题—工作流
- 公开观点：人不写初稿，AI 不写终稿

## 证据边界

- CMC、商业咨询公司创始人背景：三节课公开课程页。
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
