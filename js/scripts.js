var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';
var dinosaur = 'triceratops';

dinosaur = dinosaur.toUpperCase();

var dinosaurCharsAfter = text.replace('Velociraptor', dinosaur);

var halfSentence = dinosaurCharsAfter.length/2;

dinosaurCharsAfter = dinosaurCharsAfter.substring(0, halfSentence);

console.log(dinosaurCharsAfter);
