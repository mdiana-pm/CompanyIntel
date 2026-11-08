# Search History Removal & Input Form Calibration

Eliminate the browser's native past search history popup (displaying previously entered queries like "heo", "sflöwjerfloejöroieuwjojuiwioru", "sap", "dell", "trustyou", and "micros#") from the search input, while ensuring general browser autofill capabilities remain intact.

## User Review & Critical Decisions

> [!IMPORTANT]
> **Summary of Investigation**:
> - **The Cause of the Dropdown**: When the user presses Enter or clicks "Research", the browser automatically caches previous text entries under the input's identifier (`company-search-input`). When focusing the empty input, Chrome displays this cached form history in a native white popup.
> - **User Decision**: The user requested to **remove search history**, while specifying that **autofill should not be disabled**.

- **Confirmed Decision 1**: Eliminate the historical submission cache on the search bar so past queries (including typos and test strings) do not pop up on focus.
- **Confirmed Decision 2**: Isolate the search query input with `autoComplete="off"` and a refreshed field identifier, ensuring standard browser autofill for system accounts/passwords remains untouched.
- **Confirmed Decision 3**: Provide a clean interaction where only relevant matching company suggestions (e.g., matching companies when typing $\ge 3$ characters) appear, leaving empty focus clean and uncluttered.

---

## 1. Overview & Core Concept

### What Caused the Dropdown
In the uploaded screenshot (`image_e08ea924.png`), focusing the search bar reveals a native browser dropdown containing:
* `heo`
* `sflöwjerfloejöroieuwjojuiwioru` (the test keyboard mash)
* `sap`
* `dell`
* `trustyou`
* `micros#`

This occurs because standard browser forms store submitted text strings per input `id`/`name`.

### The Solution
1. **Reset Field Identity & Suppress Form History**:
   - Update the input attribute to `autoComplete="off"` specifically for this query field.
   - Update the input `id` and `name` to a refreshed search attribute (e.g. `company-search-query`), detaching it from Chrome's previous submission history database.
2. **Preserve General Browser Autofill**:
   - Do not disable browser-wide autofill policies or non-search credentials.
   - Keep standard accessible form submission handlers intact.
3. **User Action for Immediate Browser-Level Cache Purge**:
   - Highlight the quick Chrome shortcut (`Shift + Delete` on Windows/Linux or `Shift + Fn + Delete` on macOS) to instantly purge any residual browser-level history items.

---

## 2. User Experience & Visual Design

### Clean Focus State (No History Clutter)
```
┌─────────────────────────────────────────────────────────────┐
│ ENTER COMPANY NAME OR WEBSITE                               │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │ 🔍  |                                                   │ │  [ Research ]
│ └─────────────────────────────────────────────────────────┘ │
│                                                             │
│   (Clean empty state - NO past query dropdown appears)      │
│                                                             │
│                    ┌───────────┐                            │
│                    │  [ 🏢 ]   │                            │
│                    └───────────┘                            │
│                 Enter Company Name                          │
└─────────────────────────────────────────────────────────────┘
```

- **On Focus with Empty Input**: No native dropdown pops up. The user experiences a clean, modern interface without past search clutter or gibberish test inputs.
- **On Typing 3+ Characters**: The app's custom matching suggestions dropdown appears smoothly with real company options.

---

## 3. Key Product Decisions & Trade-Offs

| Decision | Chosen Approach | Rationale |
|---|---|---|
| **Search History Suppression** | `autoComplete="off"` on input + refreshed field name | Eliminates the native browser query history popup without interfering with system-wide browser autofill settings. |
| **Form Association** | Retain `<form onSubmit={handleSubmit}>` | Keeps standard keyboard navigation (pressing Enter submits the search) while preventing historical query caching. |

---

## 4. Technical Architecture & Data Strategy

### Search Bar Component Flow
```
User Focuses Input
        │
        ▼
Is Input Empty? ───► YES ───► Clean input (No browser history popup)
        │
        ▼ NO (length >= 3)
Custom Live Suggestions Displayed (e.g. Siemens, Stripe, Microsoft)
```

### Components to Update
- `src/App.tsx`:
  - Set `autoComplete="off"` on `<input id="company-search-query" name="company_search_query" />`.
  - Add `autoCapitalize="none"` and `autoCorrect="off"` to prevent mobile browser dictionary overrides.
