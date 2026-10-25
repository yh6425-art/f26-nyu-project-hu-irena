// Polka Dot 的五种风格 —— "一个元素,多种风格" 这块的数据
const polkaDotStyles = [
  { mood: "Elegant / Chic", tagline: "Classic & Refined · Large Dots" },
  { mood: "Vintage",        tagline: "Retro Romance · Large Dots" },
  { mood: "Sweet",          tagline: "Mini Dots · Ruffled Trim" },
  { mood: "Cool / Street",  tagline: "Urban Edge · Bold Dots" },
  { mood: "Casual",         tagline: "Everyday Comfort · Soft Dots" },
];

console.log(polkaDotStyles); 
// 1. 找到页面上那个空容器
const container = document.getElementById("polka-styles");

// 2. 遍历每一种风格,给它造一张卡
polkaDotStyles.forEach(function (style) {
  // 造卡片外壳
  const card = document.createElement("div");
  card.className = "mood-card";

  // 造风格名 (h3) + 说明 (p),并填入数据
  const name = document.createElement("h3");
  name.textContent = style.mood;

  const tag = document.createElement("p");
  tag.textContent = style.tagline;

  // 把 h3、p 装进卡片
  card.appendChild(name);
  card.appendChild(tag);

  // 把卡片装进容器
  container.appendChild(card);
});