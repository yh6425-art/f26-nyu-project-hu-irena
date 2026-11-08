// 今天这套 look 里,用户可以注意到的 6 个"出彩点"(内容是你的审美判断)
const aspects = [
  { label: "Element mix",
    why: "Hard meets soft — a studded, fringed leather jacket over a delicate floral dress. Pairing a tough element with a romantic one is what makes it modern, not pure biker or pure boho." },
  { label: "Print mixing",
    why: "Paisley, florals and ruffles all fight at once — but they share a small folk motif and a vintage mood, so the clash reads curated, not random." },
  { label: "Color clash",
    why: "Warm folk reds and mustard sit against cool blues and soft pastels. It holds because every colour is slightly muted and vintage-toned, so nothing screams." },
  { label: "Statement accessories",
    why: "The beaded head-chain, oversized hoops, layered pendants and fringe bag carry the look. Bold accessories can push an outfit all the way to runway." },
  { label: "Silhouette",
    why: "A short, boxy jacket over a long, fluid dress creates a cropped-over-long proportion that lengthens the body — a reliable way to add shape." },
  { label: "Texture play",
    why: "Metal studs and fringe, soft chiffon ruffles, fine lace — mixing textures adds richness even within one colour story." },
];

// spottedCount: 用户点亮了几个出彩点 —— 它决定顶部给什么进度反馈
let spottedCount = 0;

const buttonsBox = document.getElementById("aspect-buttons");
const cardsBox = document.getElementById("aspect-cards");
const feedback = document.getElementById("spot-feedback");

aspects.forEach((a) => {
  // 造按钮
  const btn = document.createElement("button");
  btn.textContent = a.label;
  btn.className = "aspect-btn";

  // 造它对应的讲解卡(一开始隐藏)
  const card = document.createElement("div");
  card.className = "aspect-card is-hidden";
  const h = document.createElement("h3");
  h.textContent = a.label;
  const p = document.createElement("p");
  p.textContent = a.why;
  card.appendChild(h);
  card.appendChild(p);

  // 点按钮:展开/收起它的卡,并改变计数
  btn.addEventListener("click", () => {
    if (card.classList.contains("is-hidden")) {
      card.classList.remove("is-hidden");   // 展开
      btn.classList.add("active");
      spottedCount = spottedCount + 1;
    } else {
      card.classList.add("is-hidden");      // 收起
      btn.classList.remove("active");
      spottedCount = spottedCount - 1;
    }

    // if/else 读 spottedCount,决定反馈文字
    if (spottedCount === aspects.length) {
      feedback.textContent = "You're reading this look like a stylist.";
    } else if (spottedCount > 0) {
      feedback.textContent = "Nice eye — there's more going on, keep looking.";
    } else {
      feedback.textContent = "Tap what stands out to you.";
    }

    console.log("spottedCount:", spottedCount);
  });

  buttonsBox.appendChild(btn);
  cardsBox.appendChild(card);
});