var punishment = function () {
    var punishments = ["Make everyone Coffee", 
                        "Write a blog post", 
                        "Come to class in formal attire",  
                        "End conversation with 'lunch is coming' until lunch                         time", 
                        "Sing/dance infront of the class", 
                        "Push up x 2 for every minute late", 
                        "Bow to everyone and apologise seriously", 
                        "Jog to the ferry pier during lunch and take a                              selfie"]

    var randomNum = Math.floor(Math.random() * punishments.length);
        return punishments[randomNum];
}

var myButton = document.getElementById("punisher");

myButton.addEventListener("click", function() {
        elem = document.getElementById("ready_punish");
        elem.innerHTML = punishment();
})


//punishment = function() {
  //var random = Math.ceil(Math.random() * (9 - 0) + 0);

    //if (random === 1) {
      //  return ("Make everyone Coffee")
    //}
    //else if (random ===2){
      //  return ("Write a blog post")
    //}
    //else if (random === 3){
      //  return ("Come to class in formal attire")
    //}
    //else if (random === 4){
     //   return ("End conversation with 'lunch is coming' until lunch time")
   // }
    //else if (random === 5){
      //  return ("Sing/dance infront of the class")
    //}
    //else if (random === 6){
     //   return ("Stand in the corner for for one hour")
    //}
    //else if (random === 7){
     //   return ("Push up x 2 for every minute late")
   // }
    //else if (random === 8){
      //  return ("Bow to everyone and apologise seriously")
    //}
    //else if (random === 9){
    //    return ("Jog to the ferry pier during lunch and take a selfie")
    //}

    //}
 //confirm(punishment());//

