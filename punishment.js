
var punishment = function(){
    var PunArray = ["Write a blog post",
    "Come to next class in formal attire",
    "Stand in the corner for one hour",
    "Sing / dance in front of class",
    "Buy/Make coffee and serve everyone",
    "End every conversation with Lunch is coming until lunchtime",
    "Bow to everyone and apologize seriously",
    "Push up x2 for every min. late",
    "Jog to ferry pier during lunch time and take a selfie"];
    
    var a = Math.random();
    var b = PunArray.length;
    var c = Math.floor((a/(1/b)));
    
    // Solution
    // var num = Math.floor(Math.random()*PunArray.length)
    
    return PunArray[c];
};

var button = document.getElementById("punisher");

button.addEventListener("click", function(){
    var elem = document.getElementById("ready_punish");
    elem.innerHTML = punishment();
})