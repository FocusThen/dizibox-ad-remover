function getDomElement(id) {
  return document.getElementById(id);
}
function multiSelector(rel) {
  return document.querySelectorAll(rel);
}

function selector(el) {
  return document.querySelector(el);
}

// Izlenmek istenen video
const video = getDomElement("vido-before-video-content");

// display none
const adsToRemove = [
  "#pageskin",
  ".box-header-bottom",
  ".reklam2",
  ".box-sidebar",
  "#vido-before-video",
  "#gecbutonu",
  "#vido-countdown",
  "#btaglink",
];

adsToRemove.filter((ads) => {
  const el = selector(ads);
  if (el === null) {
    return;
  }
  el.classList.add("outTrash");
});

if (video !== null) {
  video.classList.add("getVideo");
}
