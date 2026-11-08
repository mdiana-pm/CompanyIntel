# Microsoft Search Precision & Bot-Defense Shielding

Resolve the issue where searching for "microsoft.com" incorrectly displays Dell Technologies and Apple by removing domain extensions from tokenized search keywords, preventing ".com" from matching "computers" and "computer", and adding a verified Microsoft benchmark profile with automated WAF bot-block filtering.

## User Review & Critical Decisions

> [!IMPORTANT]
> **Summary of Investigation**:
> 1. **Why Dell & Apple Appeared**: When searching `microsoft.com`, punctuation is replaced with spaces, splitting the input into `["microsoft", "com"]`. Because `"com"` has 3 letters, it was evaluated as an independent search word. Dell has aliases including `"computers"` and `"dell computers"`, while Apple has `"apple computer"`. Since both contain words starting with `"com"`, the algorithm matched Microsoft, Dell, and Apple together, triggering the multi-entity selector.
> 2. **Why It Showed "Your request has been blocked" on Selection**: Selecting Microsoft made a live scrape request to `microsoft.com`. Microsoft's Akamai/Azure Web Application Firewall flagged the datacenter request as automated traffic and served a block page with HTTP 200 containing `<title>Your request has been blocked. This could be due to several reasons.</title>`.

- **Confirmed Decision 1**: Strip top-level domain extensions (`.com`, `.net`, `.org`, `.io`, `.ai`, `.co`, `.de`, `.uk`, etc.) before splitting queries into keyword tokens, and blacklist TLD strings from prefix matching.
- **Confirmed Decision 2**: When a search resolves to a single verified company (e.g. `microsoft.com` resolving to Microsoft), bypass the multi-entity selection screen and open the executive report immediately.
- **Confirmed Decision 3**: Add Microsoft (`microsoft.com`) to `BENCHMARK_SUMMARIES` and `ALL_COMPANY_CANDIDATES` with verified data (Azure, Microsoft 365, Windows, Copilot AI), ensuring instant, reliable loading without triggering firewall bot blocks.
- **Confirmed Decision 4**: Add an automated WAF blocker detector in the live scraper to detect titles like *"Your request has been blocked"*, *"Access Denied"*, or *"Security Check"* and fall back to Wikipedia and clean corporate data.

---

## 1. Overview & Core Concept

### Root Cause Analysis

```
User Input: "microsoft.com"
          │
          ▼
   Split on punctuation: ["microsoft", "com"]
          │
          ├────────────────────────────────┬────────────────────────────────┐
          ▼                                ▼                                ▼
Token: "microsoft"                  Token: "com"                     Token: "com"
Matches: Microsoft (1975)           Starts with "com":               Starts with "com":
                                    "dell computers" (Dell)          "apple computer" (Apple)
                                    "computers monitors..." (Dell)
          │                                │                                │
          └────────────────────────────────┴────────────────────────────────┘
                                           │
                                           ▼
                     Matches Found: [Microsoft, Dell, Apple]
                                           │
                                           ▼
           Triggered: "Which company would you like to research?"
```

### The Solution

1. **Domain Extension Sanitation**:
   - Sanitize the input by removing known TLD extensions (`.com`, `.org`, `.net`, `.io`, `.ai`, `.co`, `.de`, etc.) before tokenizing into words.
   - Filter out standalone TLD strings (`com`, `org`, `net`, `gov`, `edu`, `io`, `ai`, `app`, `dev`, `co`, `uk`, `de`, `eu`) from `rawWords` so domain extensions can never act as independent 3-letter prefix search terms.
2. **Direct Report Display**:
   - Searching `microsoft.com` will only produce the search token `"microsoft"`.
   - Matching returns strictly one entity (`Microsoft`), immediately presenting the verified executive intelligence report without asking *"Did you mean?"* or *"Which company would you like to research?"*.
3. **Verified Microsoft Benchmark Intelligence**:
   - Integrate Microsoft into `BENCHMARK_SUMMARIES` and `ALL_COMPANY_CANDIDATES` with verified data across products, client profiles, monetization, vitals, and market share. Strictly zero semicolons.
4. **WAF Bot-Defense Detection**:
   - If an external website returns a page containing firewall block signatures (e.g. Akamai, Cloudflare, CloudFront, Imperva challenge titles), the backend scraper automatically rejects the blocked headline and uses verified knowledge graph and Wikipedia data.

---

## 2. User Experience & Visual Design

### Clean Single-Match Search Flow
```
┌─────────────────────────────────────────────────────────────┐
│ 🔍  microsoft.com                                         ✕ │ [ Research ]
└─────────────────────────────────────────────────────────────┘
                               │
                               ▼ (Direct single-match bypass)
┌─────────────────────────────────────────────────────────────┐
│ [MS] Microsoft (microsoft.com)                              │
│      Cloud Computing, Enterprise Software & AI · Redmond    │
│                                                             │
│ ┌───────────────┐ ┌───────────────────┐ ┌─────────────────┐ │
│ │ WHEN CREATED  │ │ NUMBER EMPLOYEES  │ │ HEADQUARTERS    │ │
│ │ 1975          │ │ ~228,000          │ │ Redmond, WA     │ │
│ └───────────────┘ └───────────────────┘ └─────────────────┘ │
│                                                             │
│ ◆ WHAT THE COMPANY DOES                                     │
│ Global technology leader empowering people and organizations │
│ through intelligent cloud platforms, enterprise software,    │
│ personal computing hardware, and generative AI innovations. │
└─────────────────────────────────────────────────────────────┘
```

- **No False Disambiguation**: Neither Dell nor Apple appears when typing `microsoft.com`.
- **No Block Page Title**: The header displays *"Microsoft"* with badge `"MS"` instead of *"Your request has been blocked"* with `"YO"`.
- **Immediate Value**: Loads the full verified executive intelligence report in a single step.

---

## 3. Key Product Decisions & Trade-Offs

| Decision | Chosen Approach | Rationale |
|---|---|---|
| **Domain Extension Handling** | Strip TLDs before tokenizing + blacklist TLDs from prefix matching | Stops `.com` from behaving as an independent search word while preserving full domain matching for exact queries like `heospace.com` or `dell.com`. |
| **Microsoft Grounding** | Add complete benchmark profile in `BENCHMARK_SUMMARIES` | Prevents Akamai/Azure WAF bot-challenge blocks from ever affecting Microsoft searches and ensures instant response times. |
| **WAF Block Filter** | Reject titles matching known bot-challenge strings | Protects against future scrapes of enterprise websites that return HTTP 200 with block-screen titles. |

---

## 4. Technical Architecture & Data Strategy

### System Flow Diagram
```
                     User Search Input
                            │
                            ▼
              Strip Domain Extensions (TLDs)
               ("microsoft.com" -> "microsoft")
                            │
                            ▼
              Extract Normalized Keyword Tokens
                    Tokens: ["microsoft"]
                            │
                            ▼
               Search ALL_COMPANY_CANDIDATES
                            │
                 ┌──────────┴──────────┐
                 │                     │
          Single Match           Multiple Matches
          (1 candidate)           (2+ candidates)
                 │                     │
                 ▼                     ▼
         Display Executive    Show Disambiguation Selector
          Report Directly      "Which company would you like
          (e.g. Microsoft)             to research?"
```

### Components to Update
1. `src/data/benchmarks.ts`:
   - In `findSimilarCompanies`: Strip TLD extensions before splitting `rawWords`; filter out TLD stop-words (`com`, `net`, `org`, `io`, `ai`, `de`, `uk`, etc.).
   - Add `microsoft.com` candidate item to `ALL_COMPANY_CANDIDATES` with aliases (`microsoft`, `microsoft corporation`, `msft`, `microsoft.com`).
   - Add comprehensive `BENCHMARK_SUMMARIES['microsoft.com']` and `BENCHMARK_SUMMARIES['microsoft']`.
2. `server.ts`:
   - Add `microsoft`, `microsoftcom`, `msft` to `BENCHMARK_ALIASES` and whitelist.
   - In `buildReportFromScrapedData`: Add check for bot-block title patterns (`blocked`, `access denied`, `cloudflare`, `akamai`, `captcha`) to prevent saving firewall block text as company names.
