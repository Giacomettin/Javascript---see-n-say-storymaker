// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables */
var synth = window.speechSynthesis;
var textToSpeak = '';
var speakButton = document.getElementById('speakButton');
var subjectButton = document.getElementById('subjectButton');
var verbButton = document.getElementById('verbButton');
var adjectiveButton = document.getElementById('adjectiveButton');
var nounButton = document.getElementById('nounButton');
var placeButton = document.getElementById('placeButton');

var subjectArray = ['The turkey', 'Mom', 'Dad', 'The dog', 'My Teacher', 'The elephant', 'The cat'];
var verbArray = ['sat on', 'ate', 'danced with', 'saw', 'doesnt like', 'kissed'];
var adjectiveArray = ['a funny', 'a scary', 'a goofy', 'a slimy', 'a barking', 'a fat'];
var nounArray = ['goat', 'monkey', 'fish', 'cow', 'frog', 'bug', 'worm'];
var placeArray = ['on the moon', 'on the chair', 'in my spaghetti', 'in my soup', 'on the grass', 'in my shoes'];


function speakNow(string) {
    var utterThis = new SpeechSynthesisUtterance(string);
    synth.speak(utterThis);
}

function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

subjectButton.onclick = function() {
    textToSpeak += getRandomElement(subjectArray) + ' ';
};

verbButton.onclick = function() {
    textToSpeak += getRandomElement(verbArray) + ' ';
};

adjectiveButton.onclick = function() {
    textToSpeak += getRandomElement(adjectiveArray) + ' ';
};

nounButton.onclick = function() {
    textToSpeak += getRandomElement(nounArray) + ' ';
};

placeButton.onclick = function() {
    textToSpeak += getRandomElement(placeArray);
};

speakButton.onclick = function() {
    speakNow(textToSpeak);
};
