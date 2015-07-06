window.onload = function(){
    alert(punishment());
}

var penalty_list= [
    "Buy/make coffee and serve everyone!",
    "Write a blog post",
    "Come to next class in formal attire",
    "Sing/dance in front of class",
    "End conversation with \"lunch is coming\" until lunchtime",
    "Stand in the corner for one hour",
    "Bow to everyone and apologize seriously",
    "Do 2 pushups for every minute late",
    "Jog to ferry pier during lunch & take a selfie!"];


var punishment = function(){
    var random_unit=Math.random()*penalty_list.length;
    return penalty_list[Math.floor(random_unit)];
}

var foo = document.getElementById("submit_btn");


var btn_set = document.getElementById("punish").innerHTML;
foo.onlick = function(){
    btn_set ="The punishment is: "+punishment();
}





