// Izlenmek istenen video
const video = document.getElementById("vido-before-video-content");
// Gecbuttonu => display none
const gecbutonu = document.getElementById("gecbutonu");
// gereksiz bosluk => display none
const count = document.getElementById("vido-countdown");

// Error Handle
if (video !== null && gecbutonu !== null && count !== null) {
  // display inline
  video.classList.add("getVideo");
  // display none
  gecbutonu.classList.add("outTrash");
  count.classList.add("outTrash");
}
