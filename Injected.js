var found = false;
var quotes = ["Get back to work! >:O", "*insert some 'inspirational' quote here", "RIP ATAR"]
var whitelist = ["Education", "How-to & Style", "Music", "News & Politics", "Science & Technology", "Travel & Events"]

var text = document.getElementById("watch-description-extras").textContent;
var player = document.getElementById("player");
var placeholder = document.getElementById("placeholder-player");

function quoteGenerator() {
	quoteChoice = quotes[Math.floor((Math.random() * 2) + 1)]
	return quoteChoice;
}
//alert(typeof(text));

for(var x=0; x < whitelist.length; x++) {
	if (text.search(whitelist[x]) != -1) {
		found = true;
	}
}

if (found != true) {
	//alert("Illegal video! STAPPPHHHH!!!!!");
	player.remove();
	placeholder.innerHTML = "<b style=\"color:black\;font-size:20px\;\">" + "GET BACK TO WORK." + "<b>";
}
