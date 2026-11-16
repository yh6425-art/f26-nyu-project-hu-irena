// Polka Dot 的五种风格 —— "一个元素,多种风格" 这块的数据
const polkaDotStyles = [
  { mood: "Elegant / Chic", tagline: "Classic & Refined · Large Dots" },
  { mood: "Vintage",        tagline: "Retro Romance · Large Dots" },
  { mood: "Sweet",          tagline: "Mini Dots · Ruffled Trim" },
  { mood: "Cool / Street",  tagline: "Urban Edge · Bold Dots" },
  { mood: "Casual",         tagline: "Everyday Comfort · Soft Dots" },
];

const container = document.getElementById("polka-styles");
const moodCount = document.getElementById("mood-count");

// selectedMoods: （这行注释请换成你自己的话，说明这个变量记住什么、为什么）
let selectedMoods = [];

// render: draws the mood cards, highlights the selected ones, and shows the count
function render() {
  // 1. 清空旧卡片，避免重复
  container.innerHTML = "";

  // 2. 遍历数组，if 读 state 决定这张卡是否高亮
  polkaDotStyles.forEach(function (style) {
    const card = document.createElement("div");
    card.className = "mood-card";

    if (selectedMoods.includes(style.mood)) {
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
      if (selectedMoods.includes(style.mood)) {
        // 已选中 → 取消选中
        selectedMoods = selectedMoods.filter(function (m) {
          return m !== style.mood;
        });
      } else {
        // 没选中 → 加进去
        selectedMoods.push(style.mood);
      }
      render(); // 只改 state，然后重画
    });
  });

  // 3. 计数由 state 算出来，不是手写的
  moodCount.textContent =
    selectedMoods.length + " of " + polkaDotStyles.length + " moods selected";
}

render();