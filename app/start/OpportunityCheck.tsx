"use client";

import type { FormEvent } from "react";
import { useRef, useState } from "react";

type Answer = "yes" | "no";

const questions = [
  {
    id: "task",
    title: "能否只说出一个具体岗位或流程？",
    hint: "不是“全面用 AI”，而是某个岗位在某个场景下要完成的任务。",
    short: "具体任务",
  },
  {
    id: "value",
    title: "它会反复发生，或一次错误的代价很高？",
    hint: "例如重复整理、频繁返工、信息遗漏，或关键判断缺少依据。",
    short: "业务代价",
  },
  {
    id: "owner",
    title: "有内部负责人愿意推动这件事？",
    hint: "他能协调真实使用者、必要材料和后续复盘。",
    short: "内部负责人",
  },
  {
    id: "baseline",
    title: "有现有样例、记录或基线可以比较？",
    hint: "不一定是完整数据，但要能看见现在怎样做、哪里出问题。",
    short: "现状证据",
  },
  {
    id: "standard",
    title: "合格输出和人工责任说得清？",
    hint: "至少知道谁验收，以及哪些事实、判断和承诺不能交给 AI。",
    short: "验收标准",
  },
  {
    id: "timing",
    title: "未来 90 天内有讨论、试点或决策节点？",
    hint: "有真实日期，才有必要现在投入访谈、材料和管理注意力。",
    short: "明确时间",
  },
] as const;

type QuestionId = (typeof questions)[number]["id"];
type Answers = Partial<Record<QuestionId, Answer>>;

function getResult(answers: Answers) {
  const yesCount = questions.filter(({ id }) => answers[id] === "yes").length;
  const missing = questions.filter(({ id }) => answers[id] === "no").map(({ short }) => short);

  if (answers.task === "no") {
    return {
      label: "先定义问题",
      title: "现在还不适合谈方案。",
      body: "先把“想用 AI”改成一个具体岗位、一个触发场景和一个可检查的输出。完成这一步，再判断培训、咨询还是试点。",
      message: "万臻老师，我们目前还没有收敛到具体任务。想先请你帮助我们判断：哪个岗位或流程最值得优先梳理。我们的行业是[行业]，当前最反复或最容易出错的工作是[工作]。",
      yesCount,
      missing,
    };
  }

  if (answers.owner === "no") {
    return {
      label: "先找负责人",
      title: "问题存在，但还没有启动条件。",
      body: "没有能协调材料、使用者和复盘的内部负责人，项目很容易停在演示。先确认谁真正拥有这个流程。",
      message: "万臻老师，我们已经锁定[岗位或流程]，但内部负责人还没有确定。想先确认：这类项目的负责人通常需要具备哪些权限和投入条件？",
      yesCount,
      missing,
    };
  }

  if (yesCount >= 5 && answers.timing === "yes") {
    return {
      label: "可以做资格沟通",
      title: "值得用 20 分钟判断是否继续。",
      body: "你已经具备具体任务、内部负责人和明确时间。下一步不是先要方案，而是核对现状、业务代价、决策路径和试点条件。",
      message: "万臻老师，我来自[企业/行业]，负责[岗位]。我们想改善[具体岗位或流程]，当前影响是[时间、质量、收入或风险]；内部负责人是[角色]，希望在[日期]前作出决定。想约 20 分钟确认是否值得进入诊断或试点。",
      yesCount,
      missing,
    };
  }

  return {
    label: "先补一项证据",
    title: "方向已经出现，但还不宜直接报价。",
    body: `先补齐${missing.length ? missing.join("、") : "现状证据"}，再约资格沟通。无法回答的部分本身就是诊断结果，不要用推测补齐。`,
    message: `万臻老师，我们想改善[具体岗位或流程]，已有内部负责人，但${missing.length ? missing.join("、") : "部分事实"}还待确认。想先请你判断，需要补到什么程度才值得进入诊断。`,
    yesCount,
    missing,
  };
}

export default function OpportunityCheck({ wechatId }: { wechatId: string }) {
  const [answers, setAnswers] = useState<Answers>({});
  const [submitted, setSubmitted] = useState(false);
  const [copyStatus, setCopyStatus] = useState("");
  const resultRef = useRef<HTMLElement>(null);
  const result = submitted ? getResult(answers) : null;

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
    setCopyStatus("");
    requestAnimationFrame(() => resultRef.current?.focus());
  }

  async function copyMessage() {
    if (!result) return;
    try {
      await navigator.clipboard.writeText(result.message);
      setCopyStatus("已复制。补全方括号内容后，通过微信发给万臻。");
    } catch {
      setCopyStatus("浏览器未允许复制，请手动选择下方文字。");
    }
  }

  return (
    <div className="opportunity-check">
      <form onSubmit={submit}>
        <div className="check-progress" aria-live="polite">
          已回答 {Object.keys(answers).length} / {questions.length}
        </div>
        {questions.map((question, index) => (
          <fieldset className="check-row" key={question.id}>
            <legend>
              <span>{String(index + 1).padStart(2, "0")}</span>
              {question.title}
            </legend>
            <p>{question.hint}</p>
            <div className="check-options">
              {(["yes", "no"] as const).map((value) => (
                <label key={value}>
                  <input
                    checked={answers[question.id] === value}
                    name={question.id}
                    onChange={() => {
                      setAnswers((current) => ({ ...current, [question.id]: value }));
                      setSubmitted(false);
                    }}
                    required
                    type="radio"
                    value={value}
                  />
                  <span>{value === "yes" ? "是" : "否 / 不确定"}</span>
                </label>
              ))}
            </div>
          </fieldset>
        ))}
        <button className="button-primary check-submit" type="submit">
          看下一步判断
        </button>
        <p className="check-privacy">回答只在当前浏览器内计算，不上传、不保存，也不会自动报价。</p>
      </form>

      {result && (
        <section className="check-result" ref={resultRef} tabIndex={-1} aria-live="polite">
          <span>{result.label} · 已具备 {result.yesCount} 项事实</span>
          <h2>{result.title}</h2>
          <p>{result.body}</p>
          <div className="result-contact">
            <strong>微信：{wechatId}</strong>
            <button className="button-secondary" onClick={copyMessage} type="button">
              复制联系说明
            </button>
          </div>
          <label className="message-preview">
            联系说明预览
            <textarea readOnly rows={5} value={result.message} />
          </label>
          <p className="copy-status" role="status">{copyStatus}</p>
        </section>
      )}
    </div>
  );
}
