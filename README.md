# A Second Pair of Eyes

A mobile learning experience that helps young adults (18–30) build their own
aesthetic judgment — learning to see and shape their personal style, one
element at a time.

## 🎨 Mockups

Most up-to-date mockups (Figma): [View the mockups](https://www.figma.com/design/UeViHRMMMt485MUjagHG79/Irena_LandingPage?node-id=57-317&t=HFPB6aBDMUlaw7d4-1)

## 📝 Weekly Update

**Key changes this week**

- Added a data-driven "Polka Dot — one element, five moods" section to the
  landing page. Instead of hardcoding the style cards in HTML, I store them as
  a JavaScript array and generate the HTML with a loop.
- Styled the generated cards to match my Style Tile (cream cards, burgundy
  script headings, Lora body, 8-px spacing) so they fit the rest of the page.

**Challenges**

- Script placement: at first I put the `<script>` in the `<head>`, so it ran
  before the container existed and nothing appeared. Moving it to just before
  `</body>` fixed it, because the DOM is fully loaded by then.

**Questions**

- Now that I can generate content from data, how do I make the interface
  interactive — for example, making each mood card clickable so it opens that
  look, or adding hover/tap feedback? I'd like to understand the right way to
  add that behavior with JavaScript.

**Next week**

- Add images to the cards: extend each data object with an image field (e.g. a
  swatch for each mood) and render an `<img>` in the loop, so the cards show the
  pattern/fabric, not just text.

## 🧩 This Assignment — Data & Dynamic Rendering

**What data I'm displaying**
I'm showing the five style "moods" a single element (Polka Dot) can carry —
the core idea of my project, "one element, many styles." Each item in my array
is an object with two fields: `mood` (the style name) and `tagline` (a short
line describing how that look reads — e.g. the dot size or a detail). I chose
these two fields because, on this screen, the user needs to see _what_ the
style is and _why_ it reads that way.

**How my JavaScript builds the HTML**
The data lives in an array of objects in `script.js`. The script finds the
empty container (`#polka-styles`) with `getElementById`, then loops through the
array with `forEach`. For each mood it creates a card `<div>`, an `<h3>` for the
name and a `<p>` for the tagline, fills them with `textContent`, and appends the
h3 and p into the card and the card into the container. I used `forEach` rather
than a `for` loop because I only need to do the same thing to every item, and
`forEach` hands me each item directly without managing an index.

## Structure Audit — 2026-10-26

**Fixed today:**

- Confirmed every landing-page section exists, is visible (bordered), and
  matches the mockup's content and order.
- Verified in DevTools: fonts (Ephesis, Lora) load, script.js runs with no
  console errors, and no dead/struck-through CSS declarations.
- Wired nav links (Home, Explore, Closet) to real section ids so they scroll
  to the right block.

**Still missing (building before the layout assignment):**

- [ ] "Pick your element" and the element-detail view as their own pages
- [ ] Swatch images for the elements/moods (cards are text-only for now)
- [ ] "Me" nav link has no target yet (no profile section on the page)

**One thing I couldn't figure out:**

- How to add interactivity — e.g. making a mood card clickable so it opens that
  look. I'd like to learn the right way to do this with event listeners.
