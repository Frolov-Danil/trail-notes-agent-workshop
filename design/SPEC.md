# Trail Notes · Redesign specification

Mobile viewport: 390 × 844 points. Light theme. Scroll content below viewport.
Colors: background #F6F5F0; ink #183C32; secondary #68776F; accent #1F5C46;
separator #E1E5DC; offline surface #F8E8D3. White on green for primary action.
Typography: reference uses Inter; iOS implementation can use native SF Pro.
Display 32 semibold; featured title 24 semibold; section 20–22 semibold;
body 15–16 regular, line height 25; metadata 10–12. Respect Dynamic Type.
Horizontal gutter 24; spacing 8/16/24/32; large cover radius 24; small cards 16.
Tap targets at least 44 × 44; decorative illustrations hidden from accessibility.

01 Library: wordmark, editorial heading, featured article, remaining articles.
All four articles remain reachable by scrolling; reference viewport shows first three.
02 Article: back navigation, metadata, title, introduction, vector cover, full body.
The reference shows the top of the scroll; render all source paragraphs below.
03 Offline cached: banner below heading, last update time and retry/refresh.
04 Offline empty: error explanation with retry action.
Loading: keep layout and show native ProgressView; empty response: dedicated
«Пока нет материалов» with refresh. Never show success-only UI while loading.

The Article reference adds editorial section headings; these are presentational,
not changes to the API contract. Keep the full original content readable.
Artwork is made from geometric vectors, without external assets or licensing needs.
The second task owns offline behavior. Agree a banner API before merging UI changes.
