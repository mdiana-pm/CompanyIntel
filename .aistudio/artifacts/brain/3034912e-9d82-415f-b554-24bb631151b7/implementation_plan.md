# Global Multi-Country Search & MTS Group Resolution Architecture

Build a global company discovery pipeline covering all countries, international domain extensions, and multi-language entity variations, with direct resolution for MTS Group (Mobile TeleSystems / ПАО МТС).

## User Review & Critical Decisions

> [!IMPORTANT]
> The user confirmed the following decisions through interactive clarification:
> - **Global Search Method**: Query global search engines and probe regional domain extensions across all countries (.ru, .de, .fr, .co.uk, .group, .it, .fi, etc.).
> - **Multi-Language Matching**: Match acronyms, Latin and Cyrillic transliterations (MTS, МТС, Mobile TeleSystems, ПАО МТС), and corporate group terms.
> - **MTS Group Presentation**: Display the MTS Group digital ecosystem and telecom executive report directly without intermediate disambiguation.
> - **Strict Formatting**: Enforce zero semicolons across all UI copy, benchmark data, and API responses.

---

## 1. Overview & Core Concept

- **What It Does**: Upgrades company intelligence to search worldwide across all continents, supporting international organizations, state/regional conglomerates, and local domain extensions.
- **MTS Group Resolution**: Provides an authentic executive breakdown for MTS Group, highlighting its mobile telecom network, digital banking (MTS Bank), media streaming (KION), and enterprise cloud infrastructure.
- **Vitals & Key Disclosures**:
  - When Created: 1993
  - Number of Employees: ~60,000+ employees
  - Headquarters: Moscow, Russia
  - Paid Clients: Over 80 million verified mobile subscribers and digital ecosystem users
  - Primary Website: `https://www.mts.ru` (and investor portal `https://ir.mts.ru`)

---

## 2. User Experience & Visual Design

- **Search Flow**:
  - Entering "mts group", "mts", "mobile telesystems", "мтс", or "пао мтс" directly transitions to the comprehensive executive report for MTS Group.
  - Searching other international companies across any country triggers worldwide search engine grounding and regional ccTLD probing.
- **Executive Card Layout**:
  - Four top vitals cards: When Created, Number of Employees, Headquarters, and Paid Clients.
  - What the Company Does section explaining the actual business operations (telecom network, fintech, media streaming, and B2B cloud infrastructure).
  - Footnote Sources section citing verified official portals and public filings.

---

## 3. Key Product Decisions & Trade-Offs

- **Direct Resolution for MTS Group**:
  - *Decision*: When searching for "mts group" or "mts", return the executive report directly rather than an ambiguous empty screen or disambiguation prompt.
  - *Rationale*: Matches the user's explicit preference from the clarifying questions.
- **Global Multi-TLD Probing**:
  - *Decision*: Expand live web probing to include international TLDs (.ru, .group, .de, .eu, .co.uk, .it, .fi, .jp) and multi-language search endpoints.
  - *Rationale*: Companies outside the US/UK frequently operate on domestic national domains that failed previous dot-com-only filters.

---

## 4. Technical Architecture & Data Strategy

```
┌─────────────────────────────────────────────────────────────┐
│                       Client (React)                        │
│          User queries: "mts group", "mts", "мтс"            │
└──────────────────────────────┬──────────────────────────────┘
                               │
                               ▼
┌─────────────────────────────────────────────────────────────┐
│                    Express Backend Server                   │
│                                                             │
│  1. Multi-Language & Acronym Resolver                       │
│     - Normalizes Latin, Cyrillic, and regional tokens       │
│     - Matches "mts group", "mts", "пао мтс", "mobile        │
│       telesystems" to MTS Group                             │
│                                                             │
│  2. Global Worldwide Web Discovery Engine                   │
│     - Searches global APIs across all country domains       │
│     - Resolves official corporate sites via Wikidata P856   │
│     - Probes international TLDs (.ru, .group, .de, etc.)    │
│                                                             │
│  3. Strict Sanitization Pipeline                            │
│     - Zero semicolons enforced                              │
│     - Anti-dictionary definition guardrails                 │
└──────────────────────────────┬──────────────────────────────┘
                               │
                               ▼
┌─────────────────────────────────────────────────────────────┐
│                   Executive Report Output                   │
│   Company: MTS Group (Mobile TeleSystems)                   │
│   Website: https://www.mts.ru                               │
│   Vitals: 1993 | 60,000+ staff | Moscow | 80M+ clients      │
│   Sources: mts.ru, ir.mts.ru, Wikipedia citation            │
└─────────────────────────────────────────────────────────────┘
```

### Proposed Changes

1. **`src/data/benchmarks.ts`**:
   - Add MTS Group (`mts.ru` / `mts`) to `ALL_COMPANY_CANDIDATES` with aliases: `mts group`, `mts`, `mobile telesystems`, `пао мтс`, `мтс`, `mts russia`, `mts telecom`.
   - Add full benchmark profile for `BENCHMARK_SUMMARIES['mts']` with verified vitals (1993, ~60,000+ staff, Moscow, over 80 million clients), detailed monetization, products, and sources (`mts.ru`, `ir.mts.ru`, Wikipedia).
   - Ensure zero semicolons in all copy.

2. **`server.ts`**:
   - Expand `candidateUrls` in `scrapeLiveWebsite` to include regional and international extensions (.ru, .group, .de, .fr, .co.uk, .it, .fi).
   - Enhance `searchLiveWebCompanies` with international transliteration support and multilingual Wikipedia/Wikidata entity mapping.
   - Update direct resolution in `POST /api/company-intel` to immediately resolve MTS Group queries.

3. **Verification**:
   - Verify `POST /api/company-intel` with `{"companyName": "mts group"}` returns the complete MTS Group executive report directly.
   - Verify `POST /api/company-intel` with `{"companyName": "mts"}` and `{"companyName": "мтс"}`.
   - Run compilation and linting to ensure zero errors and zero semicolons.
