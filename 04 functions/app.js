function Mario() {
    console.log("Mario!!!");
}

function Bowser() {
    let Bowser = console.log("BWAHAHA!!!")
    return Bowser
}

function MathIsFun() {
    let m = 3
    let n = 2

    let o = m + n;

    return o
}

let hetAntwoord = MathIsFun();


function heeftEenResultaat() {
    let resultaat = 1;
    return resultaat
}

let hetresultaat = heeftEenResultaat();
console.log(hetresultaat);
console.log(heeftEenResultaat());

let x = 9;
let a = 3;
let b = 4;
let c = 89;

let y = (a * (x * x)) + (b * x) + c;
console.log(y)

function ax2bcWiskunde(x, a, b, c) {
    let y = (a * (x * x)) + (b * x) + c;
    return y
}

let y1 = ax2bcWiskunde(9, 3, 4, 89);
console.log(y1);

let y2 = ax2bcWiskunde(3, 6, 5, 45);
console.log(y2);

let y3 = ax2bcWiskunde(7, 1, 2, 13);
console.log(y3);

function uhl(u, h, l) {
    let logY = Math.log(l) + h + Math.pow(u, 2);
    return logY
}

let logY1 = uhl(9, 8, 15);
console.log(logY1)

function argumentsAreHandy(shoutout) {
    console.log("do you want to give a shoutout?");
    console.log(shoutout);
}

argumentsAreHandy("Super Shout out");
argumentsAreHandy("hou het netjes!");
argumentsAreHandy("AUB");

function superMooieGlobalFunction() {
    console.log("Ik ben global");
    console.log("dus je kan mij overal aanroepen");

}

superMooieGlobalFunction();
superMooieGlobalFunction();
superMooieGlobalFunction();

class App {
    runApplication() {
        console.log("Hello world!");
        superMooieGlobalFunction();

    }

    newClassFunction() {
        console.log("hello world in de nieuwClassFunction");
    }

    PeachClassFunction() {
        console.log("Save me, Mario!");
    }

    anotherFunctionWithArguments(aArguments) {
        console.log("kom maar met je argument");
        console.log("hier:");
        console.log(aArguments);

    }

    Mario() {
        console.log("Mario!!!");
    }

    Bowser() {
        let Bowser = console.log("BWAHAHA!!!")
        return Bowser
    }

    MathIsFun() {
        let m = 3
        let n = 2

        let o = m + n;

        return o
    }
}
let app = new App();
app.runApplication();
app.newClassFunction();
app.anotherFunctionWithArguments("mijn argument is iets...");
Mario();
Bowser();
console.log(hetAntwoord);
app.PeachClassFunction();
app.Mario();
app.Bowser();
let hetAntwoord2 = app.MathIsFun();
console.log(hetAntwoord2);