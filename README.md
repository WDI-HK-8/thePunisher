var punishment_item= [
    "Buy/make coffee and serve everyone!",
    "Write a blog post",
    "Come to next class in formal attire",
    "Sing/dance in front of class",
    "End conversation with 'lunch is coming' until lunchtime",
    "Stand in the corner for one hour",
    "Bow to everyone and apologize seriously",
    "Do 2 pushups for every minute late",
    "Jog to ferry pier during lunch & take a selfie!"];

var punishment = function(){
    var random_num=Math.random()*punishment_item.length;
    return punishment_item[Math.floor(random_num)];
}

console.log ("The punishment is: ", punishment());
