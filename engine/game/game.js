var ALIKE_LETTERS = [ "iye", 
		      "ckqx", 
		      "sxcz", 
		      "jghy", 
		      "mnñtp",
		      "aeiou"];

var SAME_LETTERS = ["áäâaà", "éëêèe", "íïîìi", "óöôòo", "úüûùu"]
var INSERTION_COST = 15;
var DELETION_COST =15;
var SAME_SUBSTITUTION_COST =0;
var ALIKE_SUBSTITUTION_COST =5;
var SUBSTITUTION_COST =20;

var resources = 100;


function cost_of_insertion(x){ return INSERTION_COST; }

function cost_of_deletion(x) { return DELETION_COST; }

function areTheSame(a, b){
    var same = false;
    if(a==b)
	return true;
    jQuery.each( SAME_LETTERS, function(index, element){
	if(element.indexOf(a) !=-1 && element.indexOf(b) !=-1){
	    same=true;
	    return false;
	}
    });
    if(same) return true;
    return false;
}

function areAlike(a, b) {
    var alike = false;
    jQuery.each( ALIKE_LETTERS, function( index, element){
	if(element.indexOf(a) != -1 && element.indexOf(b) != -1){
	    alike = true;
	    return false;	
	}
    });
    if(alike) return true;
    return false;
}

function cost_of_substitution(a, b){
    if(areTheSame(a,b)){
	return SAME_SUBSTITUTION_COST;
    }
    if(areAlike(a,b)){
	return ALIKE_SUBSTITUTION_COST;
    }
    return SUBSTITUTION_COST;
}

function levenshteinDistance(original, model){
    console.log(
	"finding levenshtein distance between " + original + " and " + model); 

    var dpm = new Array(original.length+1);
    for(i = 0; i<=original.length; i++){
	dpm[i] = new Array(model.length+1);
	dpm[i][0] = i*INSERTION_COST;
    }
    for(i = 1; i<=model.length; i++)
	dpm[0][i] = i*DELETION_COST;

    for(currentOriginal =1; currentOriginal <=original.length; currentOriginal++){
	for(currentModel = 1; currentModel <= model.length; currentModel++){
	    //the costs of executing the operation of... 
	    var insertion = dpm[currentOriginal-1][currentModel]
		+ cost_of_insertion(model.charAt(currentModel-1));

	    var deletion = dpm[currentOriginal][currentModel-1]
		+ cost_of_deletion(original.charAt(currentOriginal-1));
	    var substitution = dpm[currentOriginal-1][currentModel-1]
		+ cost_of_substitution(
		    original.charAt(currentOriginal-1), model.charAt(currentModel-1));
	    
	    //choosing the cheapest between those costs...
	    dpm[currentOriginal][currentModel] 
		= Math.min(insertion, 
			   Math.min(deletion, substitution));
	}
    }
    var x="\n";
    for(a =0; a<=original.length; a++){
	for(b =0; b<=model.length; b++){
	    x += dpm[a][b] + " ";
	}
	x+="\n";
    }
    console.log("dpm matrix of the optimal distance...");
    console.log(x);

    return dpm[original.length][model.length];
}

function startIt(current, goal){
    var lbl = document.getElementById("current");
    lbl.textContent = current;
    
    lbl = document.getElementById("goal");
    lbl.textContent = goal;
    document.getElementById("history").textContent = current;
}

function jump(){
    document.getElementById("total-ed").textContent =
	parseInt(document.getElementById("total-ed").textContent) + 
	parseInt(document.getElementById("temptative-ed").textContent);
    
    document.getElementById("current").textContent =
	document.getElementById("word").value;

    document.getElementById("history").textContent += "-> " +
	document.getElementById("word").value;
    document.getElementById("word").value ="";
    checkCurrentEd();
}

function win(){
    
}

function checkCurrentEd(){
    var current = document.getElementById("current").textContent;
    var goal = document.getElementById("goal").textContent;
    var word = document.getElementById("word").value;
    
    document.getElementById("temptative-ed").textContent
	= levenshteinDistance(word, current);
    document.getElementById("missing-ed").textContent
	= levenshteinDistance(current,goal);
}

window.onload = function(){
    var start = "murcielago";
    var end = "caballo";
    startIt(start, end);
    document.getElementById("word").oninput = function(){
	checkCurrentEd();
    };
    document.getElementById("submit").onclick = function(){
	jump();
    };
};



