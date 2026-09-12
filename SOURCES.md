# Source register

Public sources checked on **12 September 2026**. Retrieval may return cached page content; this is not a guarantee of real-time store metadata. Links support the limited claims described below. Search-result aggregators were used to locate exact listings but are not the evidence for published functional labels.

## Technical and company sources

| Source | Type and date | Use in this study |
|---|---|---|
| [Chrome: Web Accessible Resources](https://developer.chrome.com/docs/extensions/reference/manifest/web-accessible-resources) | Official browser documentation; retrieved 2026-09-12 | Default access restrictions, origin matching, dynamic resource IDs, fetch availability and fingerprinting concern. |
| [Chrome: Install and manage extensions](https://support.google.com/chrome_webstore/answer/2664769?hl=en) | Official browser help; retrieved 2026-09-12 | Per-extension Incognito permission. |
| [LinkedIn Privacy Policy](https://www.linkedin.com/legal/privacy-policy) | Company policy; displayed effective date 2025-11-03 | §1.5 includes browser add-ons; §2.9 states security/investigation uses. Not proof of event-specific backend practices. |
| [LinkedIn statement reproduced by BleepingComputer](https://www.bleepingcomputer.com/news/security/linkedin-secretly-scans-for-6-000-plus-chrome-extensions-collects-data/) | Direct company statement hosted in Lawrence Abrams’s report, 2026-04-03 | LinkedIn’s anti-scraping/site-stability explanation and denial of sensitive inference. This study does not adopt the report’s headline or infer backend behavior from it. |
| [Antoine Vastel: Detecting browser extensions for bot detection](https://blog.castle.io/detecting-browser-extensions-for-bot-detection-lessons-from-linkedin-and-castle/) | Original technical analysis by a security vendor, 2026-01-14 | Prior art describing LinkedIn’s resource-probing implementation. Author/vendor perspective distinguished from LinkedIn’s own explanation. |
| [BrowserGate: How it works](https://browsergate.eu/how-it-works/) | Original advocacy/research report; displayed last-modified date 2026-03-09 | Corroborating architecture and terminology only. Its multiple catalogue counts, other endpoints and broader allegations are not treated as this study’s observations. |

The public technical reports preceded this investigation. I traced the session in DevTools before consulting BrowserGate. This study makes no priority or novel-vulnerability claim.

## Verified catalogue identities

Each source URL includes the exact captured extension ID. Categories are editorial groupings of stated product purpose, not Chrome Web Store category labels or judgments about compliance, maliciousness or relevance to anti-abuse systems.

| Product | Primary source | Purpose used for classification |
|---|---|---|
| Pictory | [Store listing](https://chromewebstore.google.com/detail/text-to-video-ai-video-cr/aaaeoelkococjpgngfokhbkkfiiegolp) | Text/URL-to-video creation. |
| Apollo.io | [Store listing](https://chromewebstore.google.com/detail/apolloio-free-b2b-phone-n/alhgpfoeiimagjlnfekdhkjlkiomcapa) | Contact information and sales workflows; listing includes LinkedIn prospecting. |
| JobCopilot | [Store listing](https://chromewebstore.google.com/detail/jobcopilot/bnnacanndojemikeabbdejlamlecikcn) | Job-application autofill. |
| No more Musk | [Store listing](https://chromewebstore.google.com/detail/no-more-musk/falhpchopibmclpaifgelllffmjagkch?hl=en) | Replaces paragraphs about Elon Musk; mentions Twitter/LinkedIn feeds. Not a political-affiliation label. |
| ZoomInfo | [Store listing](https://chromewebstore.google.com/detail/zoominfo/fofjcndophjadilglgimelemjkjblgpf) | Business contact and company intelligence. |
| Malwarebytes Browser Guard | [Store listing](https://chromewebstore.google.com/detail/malwarebytes-browser-guar/ihcjicgdanjaechkgeegckofjjedodee) | Protection against malicious sites, scams, ads and trackers. |
| Jigsaw Puzzle | [Store listing](https://chromewebstore.google.com/detail/jigsaw-puzzle-%E2%80%94-turn-any/knhkjneccaehlklnlkdmikjggnbjnklo) | Turns webpages into puzzles. |
| Lusha | [Store listing](https://chromewebstore.google.com/detail/lusha-easily-find-b2b-con/mcebeofpilippmndlpcghpmghcljajna) | B2B contact discovery. |
| simplify | [Store listing](https://chromewebstore.google.com/detail/simplify/mpaincmooglglogamcdcidbhpclmajhj) | Decluttering/accessibility, including neurodivergent users and others prone to distraction. |
| PordaAI | [Store listing](https://chromewebstore.google.com/detail/pordaai-blur-haram-in-ima/ofhlminijomemliahkjjbgcbfoimjiaj); [publisher site](https://pordaai.com/en) | Filtering/blurring marketed around Muslim values. The publisher’s download link resolves to the same ID. |

Listings establish a name/ID association and advertised functionality at retrieval. No extension binaries were installed or audited for this classification. User counts, ratings, privacy self-declarations and marketing accuracy claims are not used to substantiate detection or safety conclusions.

## Claims intentionally not adopted

- Court proceedings and legal conclusions are outside this study’s scope.
- The record does not support a claim that detected extension IDs were sent to HUMAN Security or another third party. Nearby integrations do not establish payload sharing.
- The presence of compression utilities does not establish that the extension arrays were encrypted, compressed with a particular utility or received by a backend.
- Descriptions such as “all extensions,” “installed inventory,” “sensitive profiling” or “advertising use” are not interchangeable with a target catalogue and a conditional reporting path.
- A broad target catalogue is not evidence of competitive intent, illegality or an individual user’s sensitive attributes.
