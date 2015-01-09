
var pirateWords = {
  "bathroom" : "head",
  "cool" : "shipshape",
  "dollar" : "doubloon",
  "dollars" : "doubloons",
  "everyone" : "all hands",  
  "fuck" : "shiver me timbers", 
  "gun" : "bluderbuss",
  "hello" : "ahoy",
  "hey" : "ahoy",
  "hi" : "ahoy",
  "left" : "port",
  "lol" : "blimey",
  "might": "migh'",
  "my" : "me",
  "no" : "nay",
  "omg" : "shiver me timbers",
  "right" : "starboard",
  "rotf" : "rollin' on the decks",
  "shit" : "shiver me timbers", 
  "yes" : "aye aye",
  "you" : "ye",
  "yup" : "aye",
  "are" : 'arrrr'
}

$(document).ready(function(){
  $('*').each(function(index, element){
    var $el = $(element);
    var words = $el.text().split('');
    $el.html('');
    for(var i = 0; i<words.length; i++){
    	var word = words[i];
    	//pass each string through function that checks and replaces
        //if nothing is found, leave.
        $el.append(translate(word));
    }
  })
//pirateWords = object of pirate words and translations
  var translate = function(string){
  	for(var j in pirateWords){
  		if(j===string){
  			return pirateWords[j];
  		}
  		else{
  			return string;
  		}
  	}
  }
});
