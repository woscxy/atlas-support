// Mock consent wall for the demo page. The EasyList Cookie List filter "/_cookienotice.js" blocks
// this file, so with Atlas on it never appears.
(() => {
  const t = demo.cookie;
  const shade = document.createElement("div");
  shade.className = "consent-shade";
  const card = document.createElement("div");
  card.className = "consent";
  const title = document.createElement("strong");
  title.textContent = t.title;
  const body = document.createElement("p");
  body.textContent = t.body;
  const buttons = document.createElement("div");
  buttons.className = "consent-buttons";
  for (const [label, kind] of [[t.manage, "secondary"], [t.accept, "primary"]]) {
    const button = document.createElement("span");
    button.className = "consent-button " + kind;
    button.textContent = label;
    buttons.append(button);
  }
  card.append(title, body, buttons);
  document.body.append(shade, card);
})();
