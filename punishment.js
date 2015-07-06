var punishment = function(){
    var punishments = ["Buy/make coffee and serve everyone","Write a blog post","Come to next class in formal attire","End convo with 'lunch is coming' until lunchtime","Sing / dance in front of class","Stand in the corner for one hour","Bow to everyone and apologize seriously","Push up x2 for every min. late","Jog to farry pier during lunch and take a selfie"];
    var temp = Math.random();
    var length = punishments.length
    return punishments[Math.floor(temp/(1/length))]
}

console.log("The punishment is: ", punishment());

document.write(punishment())
