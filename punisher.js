var punishments = ["Buy coffee", "Write a blog post", "formal attire", "end conversation: winter is coming", "sing in front of the class", "stand in the corner for one hour", "bow to everyone", "push up x2 for every minute late"]

var punish = function() {
  return punishments[Math.floor(Math.random() * punishments.length)];
}

// https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById
button = document.getElementById('punisher');

// https://developer.mozilla.org/en/docs/Web/API/EventTarget/addEventListener
// https://developer.mozilla.org/en-US/docs/Web/Events
button.addEventListener("click", function() {

  banner = document.getElementById('punishment');

  banner.innerHTML = punish();
}, false);
