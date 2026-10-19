// Mock ads for the demo page. The EasyList filter "/js/flyad.js" blocks this file, so with Atlas on
// none of these boxes appear.
(() => {
  const t = demo.ad;
  const el = (tag, className, text) => {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text) node.textContent = text;
    return node;
  };
  const chrome = (box) => {
    const bar = el("div", "ad-chrome");
    bar.append(el("span", "ad-badge", t.badge), el("span", "ad-close", "✕"));
    box.prepend(bar);
    return box;
  };

  const banner = chrome(el("div", "ad ad-banner"));
  const copy = el("div", "ad-copy");
  copy.append(el("strong", "", t.sale), el("span", "", t.saleLine));
  banner.append(copy, el("span", "ad-button", t.shop));
  document.getElementById("ad-top").append(banner);

  const stories = el("div", "ad ad-stories");
  stories.append(el("p", "ad-heading", t.sponsored));
  for (const [title, tone] of [[t.story1, "tone-a"], [t.story2, "tone-b"]]) {
    const card = el("div", "ad-story");
    card.append(el("div", "ad-thumb " + tone), el("p", "", title), el("small", "", t.label));
    stories.append(card);
  }
  document.getElementById("ad-inline").append(chrome(stories));

  const prize = chrome(el("div", "ad ad-prize"));
  prize.append(el("div", "ad-gift"), el("strong", "", t.prize), el("span", "", t.prizeLine), el("span", "ad-button", t.claim));
  document.getElementById("ad-side").append(prize);
})();
