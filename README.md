# A Second Pair of Eyes

A mobile learning experience that helps young adults (18–30) build their own
aesthetic judgment — learning to see and shape their personal style, one
element at a time.

## 🎨 Mockups

Most up-to-date mockups (Figma): [View the mockups](https://www.figma.com/design/UeViHRMMMt485MUjagHG79/Irena_LandingPage?node-id=57-317&t=HFPB6aBDMUlaw7d4-1)

## Project Log
### Week 9 — 2026-11-15

**Render Plan**
- **User story:** As a learner exploring how one element can carry many styles, I want to tap the polka-dot moods that appeal to me and see which ones I've picked so that I can compare moods actively instead of just reading them.
- **State:** `selectedMood`, the name of the one mood the learner picked. It starts as `null` (nothing picked).
- **What changes it:** Clicking a mood card sets `selectedMood` to that mood. Clicking the same card again sets it back to `null`.
- **What render() draws:** The mood cards from `polkaDotStyles`, plus a detail panel under them for the picked mood.
- **The if inside the loop:** For each mood, `if` it equals `selectedMood`, the card gets the `selected` class.
- **What else render() works out:** A status line ("Pick a mood to see how it reads" or "Selected: Vintage") and the detail panel's text, both from `selectedMood`.

**What changed:** I made the Polka Dot mood cards on the homepage interactive. Clicking a card selects that mood. A `render()` function in `script.js` now draws all five cards from my `polkaDotStyles` array, adds the `selected` class to the one that matches `selectedMood`, draws a detail panel for it, and writes a status line ("Pick a mood to see how it reads." or "Selected: Vintage"). I added a `detail` field to each object in the array and a `#mood-detail` container in `index.html`.

**Patching vs. rendering:** In Week 8, my click handler changed the card class, the button class, the counter, and the feedback text one by one, and it even read the page (`classList.contains("is-hidden")`) to figure out what was open. Now the click handler only does two things: it updates `selectedMood` and calls `render()`. Because the highlight, the detail panel, and the status line are all drawn from the same variable each time, they can't disagree with each other.

**What was hard, and what I tried:** My first plan was multi-select with a "3 of 5 moods selected" count, and I built it. When I looked at the result, I realized it didn't match my user story: on the homepage a learner should pick one mood and then read more about it. The multi-select behavior belongs to my Week 8 Look of the Day page. I rewrote the Render Plan to single-select, changed `selectedMoods` (an array) to `selectedMood` (one value, starting at `null`), and moved the extra content into a detail panel. I also got confused about which page I was testing: `daily.html` and `index.html` look similar in the browser, and Safari hides the file name. I fixed it by checking the page title and which script file each page loads.

**What happened when I tried to break it:**
- At the start: the status line said "Pick a mood to see how it reads.", no card was highlighted, and there was no detail panel. [SELECTED]
- Normal use: I clicked Vintage and only Vintage was highlighted, the detail panel showed Vintage, and the status line said "Selected: Vintage". Clicking another card moved all three together.
- At the limit: I clicked the same card ten times and ended with [SELECTED or NOT SELECTED] and the status line matched.
- Random order: I clicked cards in random order and the highlight, detail panel, and status line always agreed. [SELECTED]
- Console: no red errors.

**What I learned or changed my mind about:** I used to think of the page as something I update after each click. Now I think of it as something I redraw from a variable. It also taught me to check my plan against my user story before coding: my first plan was the wrong interaction for this page.


**Next week's goal:** Add the style spotlight card from my Week 8 goal, and put the Look of the Day looks into an array so a new one can appear each round. 

**AI use:** I used Claude to explain the assignment, check my plan, and draft code. I made the interaction decisions (single-select, a detail panel, clicking again to deselect, a status line) and answered Claude's questions about them. 

### Week 8 — 2026-11-08

**State Plan**

- **User story:** As a learner building my eye for style, I want to look at a bold runway look and tap the parts that stand out to me — then read why they work — so that I actively practice noticing elements instead of just scrolling past.
- **What does the page remember?** `spottedCount` — how many standout details the learner has tapped.
- **What does it start at?** 0 (nothing tapped yet).
- **What changes it?** Clicking an aspect button (Element mix, Print mixing, Color clash, Statement accessories, Silhouette, Texture play). Tapping adds one; tapping again removes one — multi-select.
- **What does the user see?** The explanation card for each tapped aspect opens, and a progress line at the top changes with how many they've spotted.
- **What does the `if/else` decide?** It reads `spottedCount`: all six → "you're reading this like a stylist"; one or more → "nice eye, keep looking"; zero → "tap what stands out to you."

**What changed:** Added a "Look of the Day" page (daily.html + daily.js). It shows a bold runway look and lets the learner tap the parts that stand out; each tap reveals a short "why" card and updates a progress line.

**What was hard, and what I tried:** Getting the cards to start hidden. At first all six showed, because I hadn't written the `.is-hidden { display: none }` rule yet — the class was on the cards but the CSS wasn't acting on it until I added the rule.

**What happened when I tried to break it:** I reloaded (all hidden, prompt shows), toggled each on and off, and clicked all six then rapid-clicked. The count and feedback stayed correct, because each button checks its own card's state before changing spottedCount, so it can't go below 0 or above 6.

**What I learned or changed my mind about:** Changing a variable doesn't change the screen by itself — I also had to toggle a class and update the text. And a class does nothing until there's a CSS rule for it.

**Next week's goal:** Turn the Look of the Day into a rotating daily challenge — store several looks in an array (each with its own image and aspects) so a new one appears each round — and add a light reward for finishing, like a streak or "style points." Also add a **style spotlight card**: once the learner has explored a look, reveal a fun card that names its overall style (e.g. Bohemian) and introduces where it comes from and its history.

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

## Weekly Update — Week 7 (CSS Grid Layout)

**Key changes**

- Turned the page from a single stacked column into a real layout. Made `<main>`
  a grid for even vertical rhythm, and gridded the sections that are genuinely
  two-dimensional.
- "How it works" is three columns on desktop (one media query); "Browse by
  element" and the Polka Dot moods are auto-fit card grids; the nav is a Flexbox
  row (logo left, links right).

**Challenges**

- Remembering the media query must sit below the base rule, and that grid gap
  replaces the old section margins (otherwise spacing doubles up).

**Next week**

- Add a second breakpoint and refine spacing/hierarchy against the Style Tile.
