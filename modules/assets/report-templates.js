// Employer Accessibility & Inclusion Audit report template (zero imports).
// WCAG AA compliant: all text meets 4.5:1 contrast on its background.
// Large text (>=18.67px bold) requires only 3:1 — score numerals use this exception.

export function getAdvocacyReportHTML({ company, a11yScore, barriersFound, valuesAlignment }) {
  // Decorative palette (borders / tints — not used for text)
  const accentVibrant = a11yScore >= 4 ? "#16a34a" : a11yScore >= 2 ? "#d97706" : "#dc2626";
  // Text palette — all ≥4.5:1 on white. Score numeral is 30px bold so 3:1 exception applies.
  const accentText    = a11yScore >= 4 ? "#14532d" : a11yScore >= 2 ? "#78350f" : "#7f1d1d";
  const scoreLabel    = a11yScore >= 4 ? "Strong Accessibility Signals" : a11yScore >= 2 ? "Some Accessibility Signals" : "Limited Accessibility Signals";

  const barriersList = barriersFound.length
    ? barriersFound.map(b =>
        `<li style="margin-bottom:10px;font-size:14px;color:#1f2937;line-height:1.65;">${b}</li>`
      ).join("")
    : `<li style="font-size:14px;color:#374151;font-style:italic;">No specific friction points were logged during this application.</li>`;

  const valuesText = valuesAlignment || "No values alignment notes were recorded for this role.";

  return `
<div role="document" lang="en" style="font-family:'DM Sans',Arial,sans-serif;max-width:720px;margin:0 auto;background:#ffffff;color:#111827;">

  <!-- ── Header ── -->
  <header style="background:#111827;color:#ffffff;padding:40px 52px 32px;" role="banner">
    <div style="font-size:11px;letter-spacing:0.12em;text-transform:uppercase;color:#d1d5db;margin-bottom:10px;">Capabl &mdash; Workplace Inclusion Review</div>
    <h1 style="font-size:26px;font-weight:700;margin:0 0 8px;color:#ffffff;">Employer Accessibility &amp; Inclusion Review</h1>
    <div style="font-size:15px;color:#e5e7eb;" aria-label="Employer: ${company}">${company}</div>
  </header>

  <!-- ── Purpose Statement ── -->
  <section aria-labelledby="purpose-heading" style="padding:28px 52px 24px;background:#f8fafc;border-bottom:1px solid #e5e7eb;">
    <h2 id="purpose-heading" style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:#1f2937;margin:0 0 10px;">About This Review</h2>
    <p style="font-size:13px;color:#374151;line-height:1.75;margin:0;">
      This document is a personal reference tool created to support open, constructive conversations about
      workplace accessibility. It reflects observations noted during a job search and is intended to help
      identify shared opportunities — not to assign blame or make formal claims. All scores are indicative,
      based on publicly available information and self-logged notes.
    </p>
  </section>

  <!-- ── Accessibility Score ── -->
  <section aria-labelledby="score-heading" style="padding:32px 52px 28px;border-bottom:1px solid #e5e7eb;">
    <h2 id="score-heading" style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:#1f2937;margin:0 0 18px;">Accessibility Signal Score</h2>
    <div style="display:flex;align-items:center;gap:24px;">
      <!-- Score badge: 30px bold = large text, 3:1 threshold applies → vibrant color OK -->
      <div role="img"
           aria-label="Accessibility signal score: ${a11yScore} out of 5 — ${scoreLabel}"
           style="background:${accentVibrant}14;border:2px solid ${accentVibrant};border-radius:12px;padding:16px 26px;text-align:center;min-width:88px;flex-shrink:0;">
        <div style="font-size:32px;font-weight:800;color:${accentVibrant};line-height:1;" aria-hidden="true">${a11yScore}<span style="font-size:16px;font-weight:600;">/5</span></div>
        <div style="font-size:11px;font-weight:700;color:${accentText};margin-top:5px;letter-spacing:0.04em;" aria-hidden="true">${scoreLabel}</div>
      </div>
      <div>
        <p style="font-size:13px;color:#374151;line-height:1.75;margin:0;">
          Scored on inclusive language, stated accommodation policies, and response patterns
          observed during this application. A lower score is an opening for dialogue —
          many employers are actively working to improve and welcome the conversation.
        </p>
      </div>
    </div>
  </section>

  <!-- ── Accessibility Considerations ── -->
  <section aria-labelledby="considerations-heading" style="padding:28px 52px 4px;border-bottom:1px solid #e5e7eb;">
    <h2 id="considerations-heading" style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:#1f2937;margin:0 0 14px;">Accessibility Considerations</h2>
    <p style="font-size:13px;color:#374151;line-height:1.7;margin:0 0 14px;">
      The following friction points were noted during the application process. They are shared as
      constructive feedback to help employers build more inclusive hiring experiences.
    </p>
    <ul style="padding-left:20px;margin:0 0 24px;" aria-label="Accessibility considerations list">
      ${barriersList}
    </ul>
  </section>

  <!-- ── Values Alignment ── -->
  <section aria-labelledby="values-heading" style="padding:28px 52px 4px;border-bottom:1px solid #e5e7eb;">
    <h2 id="values-heading" style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:#1f2937;margin:0 0 10px;">Values &amp; Culture Alignment</h2>
    <p style="font-size:14px;color:#1f2937;line-height:1.75;margin:0 0 24px;">${valuesText}</p>
  </section>

  <!-- ── Suggested Conversation Starters ── -->
  <section aria-labelledby="convo-heading" style="padding:28px 52px 4px;border-bottom:1px solid #e5e7eb;background:#f8fafc;">
    <h2 id="convo-heading" style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:#1f2937;margin:0 0 14px;">Suggested Conversation Starters</h2>
    <ul style="padding-left:20px;margin:0 0 24px;" aria-label="Conversation starter suggestions">
      <li style="font-size:13px;color:#374151;margin-bottom:10px;line-height:1.65;">Can you tell me more about the team&apos;s approach to flexible working arrangements?</li>
      <li style="font-size:13px;color:#374151;margin-bottom:10px;line-height:1.65;">How does the organisation support employees who request workplace adjustments?</li>
      <li style="font-size:13px;color:#374151;margin-bottom:10px;line-height:1.65;">Are there Employee Resource Groups or Disability Inclusion Networks I could connect with?</li>
      <li style="font-size:13px;color:#374151;margin-bottom:10px;line-height:1.65;">What does the onboarding process look like for someone who may need adjustments early on?</li>
    </ul>
  </section>

  <!-- ── Footer ── -->
  <footer style="padding:22px 52px;background:#f1f5f9;" role="contentinfo">
    <p style="font-size:12px;color:#374151;margin:0;line-height:1.6;">
      Generated by <strong>Capabl</strong> &mdash; a disability-inclusive job search platform.
      This review is a personal advocacy tool. It does not constitute legal advice or a formal complaint.
      All observations are self-reported and intended to support productive, collaborative dialogue.
    </p>
  </footer>

</div>`;
}
