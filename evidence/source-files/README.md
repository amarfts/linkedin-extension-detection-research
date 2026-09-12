# Source excerpts and console logs

These three files preserve the original text attachments byte-for-byte under descriptive filenames. They were reviewed for personal information before inclusion. Their original byte counts and SHA-256 hashes are recorded in the [source manifest](../source-manifest.json); source line numbers in the [evidence ledger](../README.md) still apply.

| File | Contents | Limits |
|---|---|---|
| [extension-detection-source.txt](extension-detection-source.txt) | Active and passive detectors, event guards, and adjacent compression/browser-signal definitions. | An incomplete production-source excerpt, not a standalone executable script. The shorter [detectors.js](../detectors.js) contains the detector functions only. |
| [browser-integration-source.txt](browser-integration-source.txt) | Browser integration code, reCAPTCHA integration, cookie-parsing field names and the beginning of the extension catalogue. | An incomplete production-source excerpt. Field names such as `memberId` and `sessionUrn` are code, not recorded personal values. The reCAPTCHA site key is page configuration, not a personal session token. |
| [extension-probe-failure-stack.txt](extension-probe-failure-stack.txt) | Failed extension-resource requests and the associated call stacks. | Demonstrates failures and the initiator chain, not successful detection or telemetry delivery. |

The full 11,329-line console log is omitted. Its 175 probe targets and original line numbers are preserved in [probe-observations.json](../probe-observations.json); every target matches the public catalogue. These are probe targets, not an installed-extension inventory. Repeated stacks and unrelated application errors add no necessary evidence.

The files document the captured browser code and observations. They are not instructions to execute. The private installed-extension inventory, personal session payloads and full conversation remain excluded. Descriptive filenames distinguish the two source attachments that originally shared a generic name.
