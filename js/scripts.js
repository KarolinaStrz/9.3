var text = "Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.";

var dinosaur = "triceratops";

 var dinosaurUpperCased = dinosaur.toUpperCase();

var ChangeName = text.replace('Velociraptor', dinosaurUpperCased);

var partOftext = ChangeName.slice(0,ChangeName.length/2);

console.log(partOftext);