var dbName = "dictionary";
var dbVersion =1;

var db;
var request = indexedDB.open(dbName, dbVersion);

request.onerror = function (event) {
    console.error("i couldn't open the indexedDB, sorry :(", event);
};
request.onsuccess = function (event) {
    console.log("i opened the database! :D", event);
    db = event.target.result;
};

request.onerror = function(e){console.log(e);}

request.onupgradeneeded = function (event){
    console.log("an upgrade was needed o_O", event);
    db = event.target.result;

    console.log("creating objectStore for words...");
    var wordsStore = db.createObjectStore("words", {
	keyPath: "id",
	autoIncrement: true
    });
    wordsStore.createIndex("category", "category", { 
	unique: false
    });

    console.log("Adding sample word");
    var sampleWord = new Word();
    sampleWord.category = "regular";
    sampleWord.word = "keepcoding";
    wordsStore.add(sampleWord);

};

var xhr = new XMLHttpRequest();
xhr.onload = function(event){
    var data = event.target.response;
    for(key in data){
 	event.target.result.getObjectStore("words").put(key, initData[key])
    }
    console.log("added the words to the database :D");
};
xhr.open("GET", "dic/dictionary.dic.json", true);
xhr.type='json';
xhr.overrideMimeType("application/json");
xhr.send(null);

function Word() {
    this.category = "all";
    this.word = "";
}

function addWord(inWord, inCallback){
    var transaction = db.transaction(["words"], "readwrite");
    console.log("adding a new word");
    transaction.oncomplete = function (event) {
	console.log("word added");
    };

    transaction.onerror = function (event) {
	console.error("couldn't add the word :(", event);
	inCallback({ error: event }, null);
    };

    var wordStore = transaction.wordStore("words");

    var request = wordStore.put(inWord);
    request.onsuccess = function (event){
	console.log("word added with id: " + request.result);
	inCallback(null, request.result);
    };
}


