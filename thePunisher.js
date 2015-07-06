var punishment = function randomNumber(order) {
	return parseInt((Math.random() * 8));
}

function punishment() {
    if (order === 0) {
	return 'Buy/make coffee and serve everyone';
} else if (order == 1) { 
	return 'Jog to ferry pier during lunch and take a selfie';
} else if (order == 2) {
	return 'Write blog post';
} else if (order == 3) {
	return 'Come to next class in formal attire';
} else if (order == 4) {
	return 'End every conversation with Winter is Coming';
} else if (order == 5) {
	return 'Sing/dance in front of everyone';
} else if (order == 6) {
	return 'Stand in the corner for one hour';
} else if (order == 7) {
	return 'Bow to everyone and apologize seriously';
} else {
	return 'Push up x2 for every min late';
} 
}


console.log("The punishment is: ", punishment());





