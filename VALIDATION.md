# Publication validation

Checked on 12 September 2026.

- The source catalogue parses as 4,934 `{id, file}` objects; all IDs satisfy the 32-character `a`–`p` format and are unique.
- Original catalogue and the published screenshot retain the original files' SHA-256 hashes.
- All 4,934 annotated rows retain the original order, ID and resource path.
- Resource-suffix counts and functional categories including `Unresolved` each reconcile to 4,934.
- Ten reviewed identity records join to exact IDs in the catalogue; their source URLs contain those IDs.
- All 175 extracted console URL pairs match the catalogue, including the resource path containing a space.
- All local Markdown file/image links resolve.
- The original detector excerpt passes JavaScript syntax checking. The analyzer parses and executes successfully.
- Known GUID/session-like and encoded-payload values extracted from private source material and the conversation are absent from the publication text. The full transport body and installed-extension inventory are omitted. The retained screenshot was reviewed visually.
- The analyzer's regenerated outputs were compared byte-for-byte with the included analysis files.
- The three retained original text attachments in `evidence/source-files/` were reviewed and copied under descriptive filenames. Their bytes match the original source-manifest hashes; source line numbers remain unchanged. Personal session payloads and the installed-extension inventory remain excluded. The full console log and console screenshot are omitted; the 175 extracted probe records were checked against every original URL line before removing the log.

These checks establish internal consistency and publication handling. They do not repeat the original browser experiment, validate all product functionality, measure detector accuracy or prove server receipt. External pages may change after the source-check date.
