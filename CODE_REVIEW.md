# Application review

Scope: `dist/index.html`, `dist/app.js`, and `dist/styles.css`. This is a bounded static review of the reader, not approval of the educational content.

## Changes from review

- A chapter can fail acceptance because of missing provenance or schema issues. Its evidence text now says it has not passed acceptance, without claiming that a compiler actually rejected its code.
- Verification status is only used after SHA-256 of `JSON.stringify(window.BOOK)` matches `VERIFICATION.bookHash`. An old report or unavailable browser cryptography leaves the reader unverified. Code test results are explicitly distinguished from proof of the prose.
- Unknown chapter routes clear stale navigation state, close overlays, focus the main content, and show a recovery link. The home link explicitly targets the first chapter; an initial `#reading` route renders content before scrolling.
- Closing the mobile table of contents makes it inert. This also applies after resizing from desktop to mobile. Backdrop dismissal returns focus to the menu button; selecting a chapter returns focus to the reader.
- Muted text was darkened from `#73756d` to `#65685f`. Calculated sRGB contrast is 5.12:1 on the main paper background and 4.57:1 on the example header background, above 4.5:1 for these normal-size text combinations.

## Security boundary

- Titles, metadata, search excerpts, example code, output, and tips are HTML escaped before rendering. Search strings do not become HTML, CSS selectors, or executable regular expressions.
- Source URLs are restricted to HTTP/HTTPS and escaped in markup. New external windows use `noopener noreferrer`.
- `chapter.body` is authored HTML from the checked-in content bundle. The app treats that bundle as trusted application code; it also executes `content.js` itself. There is no upload endpoint or runtime HTML import. A future import of untrusted content would require a separate sanitization boundary before insertion.
- Reading position is the only user state persisted. Storage and clipboard failures are handled without blocking reading. The app has no accounts, analytics, external script dependencies, or network fetches.

## Accessibility and navigation review

Static inspection confirmed Thai document language, landmark regions, a skip link, visible focus styling, a labelled search input, live search/result feedback, current-page navigation state, labelled copy buttons, a keyboard search shortcut, arrow-key result navigation, Escape dismissal, mobile menu focus handling, reduced-motion CSS, and print styles. The generated chapter title is used as the article label.

The syntax highlighter is a small presentation helper rather than a Rust parser. Raw strings or other advanced syntax may receive imperfect colors, but code characters remain escaped and unchanged; copying uses the original code string.

## Checks actually run

- `node --check dist/app.js` passed.
- Python HTML-parser assertions passed for unique static IDs, static selector targets (plus the generated evidence node), script load order (`content.js`, `verification.js`, `app.js`), Thai language, and absence of external runtime assets in the HTML.
- Contrast calculations were run for the muted text, accent, code notes/comments, and editorial notice color pairs. These are targeted checks, not a complete accessibility certification.

## Verification limits

No browser rendering, screenshots, real keyboard/screen-reader interaction, clipboard operation, `file://` storage behavior, or mobile layout was tested. Browser surfaces were unavailable. The parent agent's local Python server attempt was rejected by the sandbox with `PermissionError`; this review does not claim successful serving or browser QA.

Content completeness, source pinning, compiler execution, and expected-output correctness belong to the independent verification report. The UI reports incomplete or unverified states instead of certifying those requirements itself.

## Example presentation pass

`scripts/formatted-examples.mjs` contains 150 manually formatted Rust examples after the first 24 chapters. Changes insert indentation and line breaks outside literals/comments; no automatic Rust rewriting or dependency was introduced. Examples already formatted in the source and text-mode multi-file/shell examples are retained. Byte-string literals containing actual newlines were preserved byte for byte, including their newline placement.

`node --check scripts/formatted-examples.mjs` and the independent `node scripts/verify-format.mjs` both passed: 150 entries checked, no token/literal/comment differences. The check rejects formatting of location/text-sensitive macros and unsupported raw-string cases. This establishes presentation-only equivalence for these changes; it does not establish compilation or expected-output correctness.
