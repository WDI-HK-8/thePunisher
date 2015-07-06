var punishments = ["Buy a round of coffee", "Write a blog post", "Wear formal attire", "End every conversation: Winter is Coming", "Sing in front of the class", "Stand in the corner for one hour", "Bow to everyone", "Push up x2 for every minute late"]

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
