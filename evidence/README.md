# Evidence ledger and publication record

This ledger distinguishes recorded runtime observations, captured code, derived measurements and external statements. It includes selected excerpts and reviewed images. The three retained source-code and failure-stack attachments are available under descriptive names in [source-files](source-files/README.md). Full private conversation records, personal session payloads and the installed-extension inventory are excluded.

## Evidence map

| ID | Claim or artifact | Source locator | Interpretation and limit |
|---|---|---|---|
| E01 | Repeated `chrome-extension://invalid/` failures | [extension-probe-failure-stack.txt](source-files/extension-probe-failure-stack.txt), beginning of file | Shows failed extension-resource requests and initiator chain. Counter is not a catalogue measurement. |
| E02 | Specific ID/path probes | [probe-observations.json](probe-observations.json), extracted from the omitted 11,329-line log | Offline extraction finds 175 unique valid extension IDs in URLs. Every extracted ID/path pair matches the exported catalogue. Partial log only. |
| E03 | `o.length` returned `4934`; `o` exported as JSON | Conversation record: console command beginning `o.length`; later `copy(JSON.stringify(o, null, 2))`; `linkedin-extension-catalog.json` | File independently parses to 4,934 unique pairs, IDs sorted ascending. `copy()` returning `undefined` is not a failed export. |
| E04 | Parallel and sequential active detectors | [extension-detection-source.txt](source-files/extension-detection-source.txt), lines 5–51; published [detectors.js](detectors.js) lines 1–47 | Runtime/browser guards, fetch predicates, stagger and idle-callback options, AedEvent guard. |
| E05 | Passive detector | [extension-detection-source.txt](source-files/extension-detection-source.txt), lines 52–82; published [detectors.js](detectors.js) lines 48–78 | Recursive document traversal, token extraction and SpectroscopyEvent guard. |
| E06 | Active result empty | Conversation record: copied console output ending `DETECTED: [] … COUNT: 0 METADATA: {accountType: 'FLAGSHIP'}` at source line 9545 | Runtime result at the active event guard. Object-inspector expansion and unrelated errors omitted in publication. |
| E07 | Passive result empty | Conversation record: copied console output ending `SPECTROSCOPY: [] COUNT: 0 METADATA: {accountType: 'FLAGSHIP'}` at source line 9552 | Runtime result at the passive event guard. |
| E08 | Tracking bridge and envelopes | Recorded `fireTrackingPayload`, inherited `fireEvent` and `fireEnvelope` output | Shows tracker delegation, envelope construction, optional delegate processing and transporter choice. Not a positive-result payload capture. |
| E09 | Routing modes and both normal-priority assignments | Recorded `sendPayload`, `getRoutingDecision`, `performRouting`; two calls to `getTransporterForEvent` for the event names | Control/Enabled/Dual code and runtime assignments. Effective mode for an actual extension event was not recorded. |
| E10 | Queue and batching | Recorded request-manager object and `packageRequest`, `attemptToFlush`, `flushEvents`, `sendWithRetry` | `batchSize: 30`, `flushDebounceDelayMs: 10000`; request packaging and retry split. No event-count or latency benchmark. |
| E11 | Fetch helper and actual request arguments | Recorded `beaconFunc`, request `send`, transport-helper function source and `({url: e, body: t, headers: n, compress: i})` | Helper calls fetch, retries keepalive on rejection. Actual arguments name `LixTreatmentsEvent`, gzip configuration and the third endpoint. No successful extension-event delivery established. |
| E12 | Broader browser-signalling context | [extension-detection-source.txt](source-files/extension-detection-source.txt), lines 251 onward; [browser-integration-source.txt](source-files/browser-integration-source.txt) | Nearby identifiers include `liedOS`, `liedBrowser`, `liedResolution`, `canvasHash`, `fontsHash`, `triggerApfc` and `triggerDnaApfcEvent`. Proximity is not evidence that all fields share the extension-event payload. |
| E13 | Incognito repetition | My account of the Incognito repetition in the conversation record | Self-reported repeated probing while logged in; no separately preserved controlled comparison. |

Source line numbers are local to captured excerpts or the recorded pretty-printed build. They are not stable identifiers for current production code. The principal observed bundle label was `4j642gxwgan928vnbx21s18k0`; the tracking bridge appeared under `7ddirr8asjf574k2ir6adzica`.

The 175 extracted probe URLs and original log line numbers are preserved in [probe-observations.json](probe-observations.json). Extraction retains the remainder of each URL line, including spaces inside resource paths. All 175 ID/path pairs match the catalogue. A whitespace-delimited URL extractor would truncate one path, `images/sync webhooks.svg`, and incorrectly report a mismatch.

## Condensed runtime observations

These are editorial transcriptions of relevant fields, not new DevTools screenshots or a new browser run:

```text
Active result:  []
Active count:  0
Passive result: []
Passive count: 0
Metadata at result inspection: {accountType: 'FLAGSHIP'}

AedEvent transporterKey:          normal-priority
SpectroscopyEvent transporterKey: normal-priority
Request-manager endpoint: https://www.linkedin.com/tapiGObKhoLQkiNZ

Legacy trackingEndpoint: https://www.linkedin.com/SYRSLV_ku8fKe
Final inspected request URL: https://www.linkedin.com/tlixkTL1sepuSXT8
Final inspected request event name: LixTreatmentsEvent
Final inspected compress option: true
Final inspected content-type: application/json
Final inspected content-encoding: gzip
```

The opaque URL paths are retained as endpoint evidence. Their semantics and whether they rotate are unknown. They are not presented as session authentication material, but their long-term stability is also not asserted.

## Redaction and omission decisions

The final request's encoded payload was readable as structured data; encoding was not anonymization. The private material includes session/page/application tracking values and a member identifier inside the encoded `LixTreatmentsEvent` payload. A `memberId: 0` elsewhere in a header does not make that whole request anonymous.

| Material | Publication treatment |
|---|---|
| Encoded inner event payload and full request body | Entirely omitted; only event name, relevant options and header names/values retained. |
| Member IDs and member URNs | Omitted, including occurrences nested inside encoded material. |
| Tracking IDs, page-instance IDs, GUID-like values, tree IDs, sequence numbers and precise event timestamps | Actual values omitted. Field names may appear in explanatory prose. |
| Cookies, CSRF tokens, authorization headers and other authentication material | No raw request/header dump published. |
| Account, locale, timezone and personal browsing context | Unnecessary values omitted. `accountType: 'FLAGSHIP'` retained as detector metadata; it is a product/account-type label, not a member identifier. |
| Local browser paths and my full installed-extension inventory | Omitted. Public target catalogue must not be confused with that private inventory. |
| Public catalogue IDs and relative resource paths | Retained unchanged. These identify probe targets, not my installed extensions. |
| Active event-guard screenshot | Inspected visually and copied unchanged. Shows code and its breakpoint without names, account IDs, session tokens or a personal URL bar. |
| Full console log and console screenshot | Omitted to minimize unnecessary browser context and unrelated errors. The 175 target records and a separate failure stack preserve the relevant probe evidence. |
| Other screenshots and raw conversation exports | Not included. No synthetic screenshots were substituted for missing runtime evidence. |

The source inventory hashes in [source-manifest.json](source-manifest.json) identify both the included source files and excluded private artifacts. Each included file has a repository path; excluded artifacts have a null path. Hashes do not authenticate the origin of the material and are not a substitute for retaining originals privately.

## Limits of visual evidence

The article includes one original screenshot, a reconstructed flowchart, a resource-type table and verified examples. The empty detector results are preserved in console transcriptions; no screenshot showing both results together is included.

A filtered Network view with no visible matches would not establish that nothing was sent through another endpoint. Functional-category proportions cannot be established for the full catalogue because 4,924 identities remain unresolved; resource-suffix proportions are measured directly.
