# Search Precision & Typo Matching Calibration

Refine company search and typing suggestions to eliminate false-positive matches (such as showing Stripe and Siemens when typing "me") by raising the suggestion threshold to a minimum of 3 characters, enforcing prefix and word-boundary matching, and calibrating Levenshtein edit tolerance.

## User Review & Critical Decisions

> [!IMPORTANT]
> Based on your clarifying answers, we have confirmed:
> 1. **Minimum Character Threshold**: Suggestions will only trigger when at least 3 characters are typed (e.g. typing 1 or 2 characters like `me` will not pop up false suggestions).
> 2. **Elimination of Loose Substring Matching**: Secondary alias words (such as `"payments"` in `"stripe payments"` or internal syllable `"me"` in `"siemens"`) will never trigger matches for unrelated queries.
> 3. **Testing Flow**: The matching logic is calibrated so genuine typos (e.g. `siemen` for Siemens, `strip` for Stripe, `spotifi` for Spotify, `notn` for Notion) continue to match accurately, while short general prefixes require intentional typing.

- **Confirmed Decision 1**: Set minimum length for live suggestions and similarity candidate proposals to $\ge 3$ characters.
- **Confirmed Decision 2**: Strict prefix and token boundary matching on primary company names and aliases; prevent arbitrary middle-of-word substring matching.
- **Confirmed Decision 3**: Scale Levenshtein edit distance strictly with input length (0 edits for length $< 4$, max 1 edit for length $4–6$, max 2 edits for length $\ge 7$).

---

## 1. Overview & Core Concept

### What Caused the Issue
When typing `me`:
- `"me"` was evaluated by `cleanAlias.includes(q)`.
- **Siemens** contains `"me"` (`sie-me-ns`).
- **Stripe** has the alias `"stripe payments"`, which contains `"me"` (`pay-me-nts`).
- **Square** has the alias `"square payments"`, which also contains `"me"`.
Because the query was only 2 letters, checking whether `"me"` exists anywhere inside any alias caused Stripe, Siemens, and Square to falsely appear.

### Solution
1. **Require Minimum 3 Characters**: Neither the live suggestion dropdown nor the backend fuzzy proposal will activate for 1 or 2 character inputs.
2. **Anchor Matching to Word Starts**: When checking aliases, queries must match the start of the company name or the start of a constituent word (e.g., `str` matches `stripe`, `mer` matches `mercury`, `sie` matches `siemens`), not arbitrary characters buried inside other words.
3. **Calibrated Levenshtein Distance**:
   - Length $1–3$: exact prefix match only (0 distance).
   - Length $4–6$: maximum 1 character typo/edit allowed (e.g., `notn` $\rightarrow$ Notion, `strip` $\rightarrow$ Stripe, `spoti` $\rightarrow$ Spotify).
   - Length $\ge 7$: maximum 2 character edits allowed (e.g., `siemen` $\rightarrow$ Siemens, `spotifi` $\rightarrow$ Spotify).

---

## 2. User Experience & Visual Design

### Live Search Input Flow
```
┌─────────────────────────────────────────────────────────────┐
│ 🔍  Enter Company Name or Website                            │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │  mer                                                  ✕ │ │
│ └─────────────────────────────────────────────────────────┘ │
│                                                             │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │ ✨ MATCHING COMPANIES (CONFIRM TO RESEARCH)              │ │
│ │ ┌─────────────────────────────────────────────────────┐ │ │
│ │ │ [ME] Mercury (mercury.com)              [Confirm →] │ │ │
│ │ │      Fintech & Startup Banking · San Francisco      │ │ │
│ │ ├─────────────────────────────────────────────────────┤ │ │
│ │ │ [MM] Mercury Marine (mercurymarine.com) [Confirm →] │ │ │
│ │ │      Marine Propulsion & Outboard Motors · WI, USA  │ │ │
│ │ └─────────────────────────────────────────────────────┘ │ │
│ └─────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
```

- **Typing 1–2 characters (e.g. `me`, `si`)**: No dropdown appears. The user can type cleanly without intrusive false positives.
- **Typing 3+ characters (e.g. `mer`, `sie`, `str`, `spo`)**: Dropdown activates showing only companies whose names, domains, or aliases genuinely match.
- **Submitting with a typo (e.g. `siemen`, `strip`, `spotifi`)**: Opens the dedicated confirmation screen: *"Did you mean Siemens?"* with full vitals and executive overview before running full research.

---

## 3. Key Product Decisions & Trade-Offs

| Decision | Chosen Approach | Rationale |
|---|---|---|
| **Suggestion Trigger** | $\ge 3$ characters | Eliminates false positives from 2-letter combos like `me`, `st`, `in`. |
| **Substring Rule** | Prefix & word-boundary only | Prevents matching `payments` or internal syllables of other companies. |
| **Typo Tolerance** | Proportional Levenshtein | Prevents 2-letter queries from matching random 5-letter companies while protecting legitimate typos like `siemen` and `spotifi`. |

---

## 4. Technical Architecture & Data Strategy

### Matching Logic Flow Diagram
```
User Search Input (Query)
          │
          ▼
   Length >= 3 ?
      │         │
     No        Yes
      │         ▼
   (No popup)  Tokenize & Normalize Query
                │
                ├─► Exact Prefix Match (e.g. "mer" -> "mercury")
                ├─► Word Boundary Prefix (e.g. "xcel" -> "siemens xcelerator")
                └─► Proportional Levenshtein Distance
                      ├─ Len 3: exact only
                      ├─ Len 4-6: max edit distance 1 (e.g. "notn", "strip")
                      └─ Len 7+: max edit distance 2 (e.g. "siemen", "spotifi")
                │
                ▼
      Ranked Candidates (Max 5, zero false positives)
```

### Components to Update
- `src/data/benchmarks.ts`: Update `findSimilarCompanies(query: string)` with $\ge 3$ character threshold, word boundary matching, and proportional edit distance.
- `server.ts`: Align `/api/company-intel` similarity matching with the calibrated $\ge 3$ length threshold.
- `src/App.tsx`: Update `liveSuggestions` filter condition to require `searchInput.trim().length >= 3`.
