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
    console.log(fruit2);//error let solo funcionara en el bloque
    console.log(fruit3);//error const solo funcionara en el bloque
    //ninguna por mas que esten dentro de la funcion va a poder ser llamada fuera del bloque
    
}