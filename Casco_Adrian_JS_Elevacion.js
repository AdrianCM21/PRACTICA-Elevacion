// 1
console.log(hello);  //undefined                                 
var hello = 'world';                                 
// var hello ;
// console.log(hello);
// hello='world';


/*------------------------------------------------------------------------------*/
//2
var needle = 'haystack';
test();//magnet
function test(){
    var needle = 'magnet';
    console.log(needle);
}
//var needle;
// function test(){
//     var needle; 
//     needle = 'magnet';
//     console.log(needle);(magnet)
// }
// needle='haystack';
// test();


/*------------------------------------------------------------------------------*/
//3
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);//super cool
// var breandan;
// function print(){
//     brendan = 'only okay';
//     console.log(brendan);
// }
// brendan= 'super cool';
// console.log(brendan);

/*------------------------------------------------------------------------------*/
//4
var food = 'chicken';
console.log(food);//chicken
eat();//half-chicken
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
// var food ;
// function eat(){
//     var food;
//     food = 'half-chicken';
//     console.log(food);
//     food = 'gone';
// }
// food = 'chicken';
// console.log(food);
// eat();


/*-----------------------------------------------------------------------------------------------------------*/
//5
// mean();//mean no es una funcion
// console.log(food);//food no esta definido
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);
//var mean
//mean()
//console.log(food);
// mean = function() {
//     var food; 
//     food= "chicken";
//     console.log(food);
//     var food = "fish";
//     console.log(food);
// }


/*-----------------------------------------------------------------------------------------------------------*/
//6
console.log(genre);//undefined
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);//rock
    var genre = "r&b";
    console.log(genre);//r&b
}
console.log(genre);//disco
//var genre;
// function rewind() {
//     var genre;
//     genre = "rock";
//     console.log(genre);
//     var genre = "r&b";
//     console.log(genre);
// }
//console.log(genre);
//genre = "disco";
//rewind();
//console.log(genre);


/*-----------------------------------------------------------------------------------------------------------*/
//7
dojo = "san jose";
console.log(dojo);//san jose
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);//seattle
    var dojo = "burbank";
    console.log(dojo);//burbank
}
console.log(dojo);//sanjose
// function learn() {
//     var dojo;
//     dojo = "seattle";
//     console.log(dojo);
//     dojo = "burbank";
//     console.log(dojo);
// }
// dojo = "san jose";
// console.log(dojo);
// learn();
//console.log(dojo);


