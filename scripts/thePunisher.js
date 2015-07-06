var punishment = function(){
    var punish = "";
    punish = Math.floor(Math.random() * (9.5 - 1) + 1);
    switch (punish) {
        case 1:
            return "Buy make coffee and serve everyone";
        case 2:
            return "Write a blog post";
        case 3:
            return "Come to class in former attire";
        case 4:
            return "End conversation with LUNCH IS COMING";
        case 5:
            return "Sing or dance in front of the class";
        case 6:
            return "Stand in the corner for 1 hour";
        case 7:
            return "Bow to everyone and apologize seriously";
        case 8:
            return "Push up x2 for every minute late";
        case 9:
            return "Jog to Ferry Pier during lunch and take a selfie (with a hot girl)";
    }
}

console.log("The punishment is: ", punishment());

document.getElementById("punishment").innerHTML=punishment();