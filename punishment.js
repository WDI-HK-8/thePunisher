var punishment = function(){
    punish=Math.random();
    if (punish<(1/9)){
        return "buying or making everyone coffee.";
    } else if (punish<(2/9)){
        return "writing a blog post for this class.";
    } else if (punish<(3/9)){
        return "coming to next class in a formal attire.";
    } else if (punish<(4/9)){
        return "ending each conversation with 'winter is coming' until the end of lunch.";
    } else if (punish<(5/9)){
        return "singing and dancing in front of the class.";
    } else if (punish<(6/9)){
        return "bowing to everyone and apologizing seriously.";
    } else if (punish<(7/9)){
        return "standing in the corner for one hour.";
    } else if (punish<(8/9)){
        return "doing two push ups for every minute late.";
    } else {
        return "jogging to the ferry and taking a selfie as proof.";
    }
};

console.log("The punishment is: "+punishment());
