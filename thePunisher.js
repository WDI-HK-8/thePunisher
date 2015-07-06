var punishmentItems = ["Buy/make coffee and serve everyone",
						"Write a blog post",
						"Come to the next class in formal attire",
						"End convo of 'lunch is coming'",
						"Sing and dance infront of the class",
						"Stand in the corner for one hour",
						"Bow to everyone and apologize seriously",
						"Push up x2 for every minute late",
						"Jog to ferry pier during lunch and take a selfie"]




var punishment = function(){
var randomNum = Math.random();
var division = parseInt(randomNum*9);
return punishmentItems[division];
}

console.log("The punishment is: ", punishment());