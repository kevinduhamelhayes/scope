//var
var a; //declaration
a = 10; //assignment
var b = 20; //initialization
var c = 30, d = 40, e = 50; //multiple declaration
var c = 40; //redeclaration

//global scope
var fruit = "apple"; //global variable
function getFruit() {
    console.log(fruit);
}
//si esta fuera de las funciones es global
//si esta dentro de una funcion es local ( que se inicialice dentro de la funcion)
//sin ser declarada antes
function countries() {
    country = "Spain"; //esta es global
    var city = "Madrid"; //esta es local
    console.log(country);
    console.log(city);
}
countries();
console.log(country);
//console.log(city);
//console.log(city); //error
//scope block
function Fuits() {
    if (true) {
        var fruit = "apple";
        let fruit2 = "kiwi";
        const fruit3 = "pepino";
        console.log(fruit);
        console.log(fruit2);
        console.log(fruit3);

    }
    console.log(fruit);
    console.log(fruit2);
    console.log(fruit3);
}

