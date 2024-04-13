console.log("1-vazifa");

let a = 10;
let b = 23;
let c;
c = a + b;

console.log("Jami " + c);



console.log("2-vazifa");



let d = Number("12");
console.log(typeof (d) + "\n" + d);



console.log("3-vazifa");

let random = Math.floor(Math.random() * 50)

console.log(random);

if (random % 2 == 0) {
    console.log("Bu son juft");
} else {
    console.log("Bu son toq");
}



alert("4-vazifa");
let sovol = prompt(`Bita so'z kiriting`)
if (sovol == "Mars") {
    alert(sovol)
} else {
    alert(`mars IT school`)
}



console.log("5-vazifa");
let array = prompt("5 ta soz kiriting");
let longWordsArray = [];

for (let i = 0; i < array.length; i++) {
    if (array[i].length >= 5) {
        longWordsArray.push(array[i]);
    }
}
console.log("Uzunligi 5 va 5 dan ortiq sozlar:", longWordsArray);


console.log("6-vazifa");

let juftsonlar = [];
let toqsonlar = [];

for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        juftsonlar.push(i);
    } else {
        toqsonlar.push(i);
    }
}

console.log("Juft sonlar", juftsonlar);
console.log("Toq sonlar", toqsonlar);







