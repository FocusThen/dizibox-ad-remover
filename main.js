function getDomElement(id) {
  return document.getElementById(id);
}
function multiSelector(rel) {
  return document.querySelectorAll(rel);
}
function selector(el) {
  return document.querySelector(el);
}

// ads
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

function arrAds(arr) {
  return arr.map((ads) => selector(ads));
}

async function main() {
  await arrAds(adsToRemove).filter((ads) => {
    if (ads === null) {
      return;
    }
    ads.classList.add("outTrash");
  });
}

// Izlenmek istenen video
const video = getDomElement("vido-before-video-content");

if (video !== null) {
  video.classList.add("getVideo");
}
main();
