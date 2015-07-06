var list = ["Everyone needs caffiene","Remind us, what happened?","Respect yourself, dress better tomorrow","Is lunch time is coming? Say it!","Clear your throat with a song!","Stand in the corner, boy!","Be polite and bow","Look like you need some guns!","Ready, get set and go!"]

var getRandom = function(){
    
    return Math.floor(Math.random() * (list.length-1));
};


var punishment = function () {
    return list[getRandom()]
}

console.log("The punishment is :", punishment())

var button = document.querySelector("button");
button.addEventListener("click", changeBg);
console.log(button);