export class Dino
{
    constructor(naam, vleeseter, leeftijd)
    {
        this.naam = naam;
        this.vleeseter = vleeseter
        this.leeftijd =  leeftijd
        this.leeft = true
        this.honger = true
    }

    eatFood(foodToEat) 
    {
        foodToEat.leeft=false;
        this.honger=false;
        console.log("ik ben een " + this.naam)
        console.log("ik eet nu " + foodToEat.naam)
        console.log("mijn honger: " + this.honger)
    }
}