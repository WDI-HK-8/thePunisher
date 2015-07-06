var punishment = function(){

  // Your magic here


  var punishmentArr = ["Buy/Serve Coffee for Everyone", "Write a blog post", 
  					   "Come to next class in formal attire", "End conversations with \"Lunch is coming\" until lunchtime",
  						"Sing/Dance infront of the class", "Stand in the corner for an hour", 
  						"Bow to everyone and apologize sincerely", "Push up for every minute late", 
  						"Jog to ferry pier during lunch and take a selfie"];
   
   return punishmentArr[Math.floor((Math.random()*punishmentArr.length))];

}

document.getElementById('getPunishment').addEventListener("click", function() {
	document.getElementById('thePunisher').innerHTML = punishment();
});