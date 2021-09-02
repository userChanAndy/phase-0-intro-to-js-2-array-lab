// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    cats.push(name);
}
function destructivelyPrependCat(name){
    cats.unshift(name);
}
function destructivelyRemoveLastCat(name){
    cats.pop(name);
}
function destructivelyRemoveFirstCat(){
    cats.shift();
}

function appendCat(Broom){
    var copyCats = cats.slice();
    copyCats.push(Broom);
    return copyCats
}
function prependCat(name){
    var copyCats = cats.slice();
    copyCats.unshift(name);
    return copyCats
}
function removeLastCat(){
    var copyCats = cats.slice();
    copyCats.pop();
    return copyCats
}
function removeFirstCat(){
    var copyCats = cats.slice();
    copyCats.shift();
    return copyCats
}