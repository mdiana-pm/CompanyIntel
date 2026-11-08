# Small Company & Startup Discovery Engine

Enable comprehensive intelligence reports for small companies, emerging startups, and regional European enterprises (such as Silvernova GmbH) by enhancing domain resolution to strip corporate legal suffixes (GmbH, Inc, LLC, etc.), probing modern domain extensions (.ai, .de, .io, .com, .co), translating European content into clear English, and displaying verified founder backgrounds and early-stage vitals.

## User Review & Critical Decisions

> [!IMPORTANT]
> **Confirmed Choices from Clarification**:
> 1. **Domain & Suffix Resolution**: Strip legal suffixes (e.g., `GmbH`, `AG`, `Inc`, `LLC`, `Ltd`, `UG`, `SE`) from input strings and probe modern domain extensions (`.ai`, `.de`, `.io`, `.com`, `.co`) in sequence so companies hosted on specialized tech or regional domains resolve automatically.
> 2. **Language & Content Synthesis**: Automatically translate and synthesize German and European website descriptions into clear, professional English.
> 3. **Startup Vitals & Team Grounding**: For early-stage companies lacking public headcount filings, present verified founders (e.g. Lukas Ballweg, Nils Lißner, Felix Füssel) and early-stage startup status instead of dead-end "Information not provided" messages.

- **Confirmed Decision 1**: Multi-extension candidate probing in `scrapeLiveWebsite` (`.ai`, `.de`, `.io`, `.com`, `.co`) with corporate entity suffix stripping.
- **Confirmed Decision 2**: English translation and synthesis for non-English corporate websites and German legal-tech descriptions.
- **Confirmed Decision 3**: Add Silvernova GmbH (`silvernova.ai`) into `ALL_COMPANY_CANDIDATES` and `BENCHMARK_SUMMARIES` as a grounded reference model for small AI startups, with zero semicolons.

---

## 1. Overview & Core Concept

### Why Small Companies Previously Failed

```
User Query: "Silvernova GmbH"
               │
               ▼
Previous Heuristic: Strip non-alphanumeric and append ".com"
               │
               ▼
Target URL Generated: "https://silvernovagmbh.com"
               │
               ▼
DNS Lookup Error: Domain does not exist (ENOTFOUND)
               │
               ▼
Fallback Scraper Result: null -> "No verified company found"
```

### The Solution

```
User Query: "Silvernova GmbH"
               │
               ▼
1. Extract Brand & Strip Legal Suffixes
   "Silvernova GmbH" ──► Brand: "Silvernova"
               │
               ▼
2. Multi-Extension Domain Prober (Parallel / Cascading)
   ┌──────────────────────────────────────────────┐
   │ Check 1: https://silvernova.ai  ──► HTTP 200 │ (SUCCESS)
   │ Check 2: https://silvernova.de               │
   │ Check 3: https://silvernova.com              │
   │ Check 4: https://silvernova.io               │
   └──────────────────────────────────────────────┘
               │
               ▼
3. Scrape & Synthesize Content (Translate German -> English)
   "Komplexe Mandate schneller bearbeiten"
   ──► "AI-powered legal associate accelerating complex case analysis for law firms"
               │
               ▼
4. Grounded Vitals & Founders
   Founded: 2025 in Munich, Germany by Lukas Ballweg, Nils Lißner, and Felix Füssel
   Team: ~5–15 early-stage AI engineering and legal specialists
```

---

## 2. User Experience & Visual Design

### Clean Small Company Report View
```
┌─────────────────────────────────────────────────────────────┐
│ 🔍  Silvernova GmbH                                       ✕ │  [ Research ]
└─────────────────────────────────────────────────────────────┘
                               │
                               ▼
┌─────────────────────────────────────────────────────────────┐
│ [SG] Silvernova GmbH                                        │
│      https://silvernova.ai                                  │
│      AI Legal Associate & Law Firm Workflow Automation      │
│                                                             │
│ ┌───────────────┐ ┌───────────────────┐ ┌─────────────────┐ │
│ │ WHEN CREATED  │ │ NUMBER EMPLOYEES  │ │ HEADQUARTERS    │ │
│ │ 2025 (Munich) │ │ ~5–15 (Seed Team) │ │ Munich, Germany │ │
│ └───────────────┘ └───────────────────┘ └─────────────────┘ │
│                                                             │
│ ◆ WHAT THE COMPANY DOES                                     │
│ Silvernova is a German legal-tech company developing a      │
│ generative AI associate tailored for law firms and legal    │
│ practices. The platform automates complex document review,  │
│ case file structuring, and legal brief drafting while        │
│ ensuring strict GDPR and professional secrecy compliance.   │
└─────────────────────────────────────────────────────────────┘
```

- **Seamless Input Tolerance**: Searching `Silvernova`, `Silvernova GmbH`, or `silvernova.ai` all resolve to the authentic company profile.
- **English Synthesis**: Foreign language copy (e.g. German legal terms) is synthesized into crisp, readable English.
- **Accurate Founders & Vitals**: Displays founders and Munich headquarters rather than blank placeholders.

---

## 3. Key Product Decisions & Trade-Offs

| Decision | Chosen Approach | Rationale |
|---|---|---|
| **Domain Resolution** | Clean brand extraction + multi-TLD probe (`.ai`, `.de`, `.io`, `.com`, `.co`) | Allows small tech startups and European SMEs that don't own a `.com` to be discovered instantly. |
| **Legal Suffixes** | Strip `GmbH`, `AG`, `Inc`, `LLC`, `Ltd`, `UG`, `SE`, `S.A.` | Users frequently type the legal registered name from invoices or filings. |
| **Translation** | English synthesis for foreign headings and summaries | Keeps the executive report standardized and readable for all users. |
| **Startup Vitals** | Grounded founders and early-stage startup headcount | Provides meaningful intelligence for newly incorporated startups (2024–2025). |

---

## 4. Technical Architecture & Data Strategy

### Domain Discovery Sequence
```
Query String
     │
     ▼
Has Explicit Domain? (e.g. contains ".")
  ├── YES ──► Fetch directly (e.g. "silvernova.ai")
  └── NO  ──► Extract Base Brand:
                - Strip legal suffixes (gmbh, inc, llc, ag, ltd, ug, se, corp)
                - Build candidate URLs: [https://{brand}.ai, https://{brand}.de, https://{brand}.com, https://{brand}.io, https://{brand}.co]
                - Fetch candidates with fast timeout until HTTP 200 OK
```

### Components to Update
1. `server.ts`:
   - In `scrapeLiveWebsite`: Add legal suffix stripping (`\b(gmbh|ag|inc|llc|ltd|ug|se|corp|sa|sarl|bv|nv)\b`) and multi-TLD probing (`.ai`, `.de`, `.io`, `.com`, `.co`).
   - In `buildReportFromScrapedData`: Add English translation/synthesis for common German legal and business terms (`Mandate`, `Kanzleien`, `Recht`, `Datenschutz`, `Schriftsätze`).
   - Add `silvernova` aliases to `BENCHMARK_ALIASES` and `isLikelyGibberish` whitelist.
2. `src/data/benchmarks.ts`:
   - Add `silvernova.ai` into `ALL_COMPANY_CANDIDATES` with aliases (`silvernova`, `silvernova gmbh`, `silvernova ai`).
   - Add complete verified `BENCHMARK_SUMMARIES['silvernova.ai']` and alias `BENCHMARK_SUMMARIES['silvernovagmbh']`. Strictly zero semicolons.
