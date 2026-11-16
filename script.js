// Polka Dot 的五种风格；detail 是点开后看到的更多内容
const polkaDotStyles = [
  { mood: "Elegant / Chic", tagline: "Classic & Refined · Large Dots",
    detail: "Large dots on a clean cut read polished." },
  { mood: "Vintage",        tagline: "Retro Romance · Large Dots",
    detail: "Large dots with a retro cut feel like the 1950s. " },
  { mood: "Sweet",          tagline: "Mini Dots · Ruffled Trim",
    detail: "Tiny dots plus ruffles feel soft and playful." },
  { mood: "Cool / Street",  tagline: "Urban Edge · Bold Dots",
    detail: "Bold dots against tough pieces feel edgy." },
  { mood: "Casual",         tagline: "Everyday Comfort · Soft Dots",
    detail: "Soft dots on easy fabrics feel relaxed." },
];

const container = document.getElementById("polka-styles");
const moodCount = document.getElementById("mood-count");
const moodDetail = document.getElementById("mood-detail");

// selectedMood: （换成你自己的话：它记住什么、为什么）
let selectedMood = null;

// render: draws the mood cards, highlights the picked one, and shows its detail and a status line
function render() {
  container.innerHTML = "";
  moodDetail.innerHTML = "";

  polkaDotStyles.forEach(function (style) {
    const card = document.createElement("div");
    card.className = "mood-card";

    if (style.mood === selectedMood) {
      card.classList.add("selected");
    }

    const name = document.createElement("h3");
    name.textContent = style.mood;
    const tag = document.createElement("p");
    tag.textContent = style.tagline;

    card.appendChild(name);
    card.appendChild(tag);
    container.appendChild(card);

    card.addEventListener("click", function () {
      if (selectedMood === style.mood) {
        selectedMood = null;          // 再点一次 → 取消
      } else {
        selectedMood = style.mood;    // 选这一个
      }
      render();
    });

    // 选中的这一张：同时画出详情区
    if (style.mood === selectedMood) {
      const dTitle = document.createElement("h3");
      dTitle.textContent = style.mood;
      const dText = document.createElement("p");
      dText.textContent = style.detail;
      moodDetail.appendChild(dTitle);
      moodDetail.appendChild(dText);
    }
  });

  // 状态行也由 state 算出来
  if (selectedMood === null) {
    moodCount.textContent = "Pick a mood to see how it reads.";
  } else {
    moodCount.textContent = "Selected: " + selectedMood;
  }
}

render();