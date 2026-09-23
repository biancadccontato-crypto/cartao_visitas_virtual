let menuReady = false;
window.setTimeout(() => {
  menuReady = true;
}, 80);

document.querySelectorAll("details").forEach((item) => {
  const summary = item.querySelector("summary");

  summary.addEventListener("click", () => {
    item.classList.remove("is-tapped");
    void item.offsetWidth;
    item.classList.add("is-tapped");
  });

  item.addEventListener("toggle", () => {
    if (!item.open) {
      item.classList.remove("animate-in");
      return;
    }

    document.querySelectorAll("details").forEach((other) => {
      if (other !== item) {
        other.open = false;
        other.classList.remove("animate-in");
      }
    });

    if (!menuReady) return;

    item.classList.remove("animate-in");
    void item.offsetWidth;
    item.classList.add("animate-in");
  });
});
