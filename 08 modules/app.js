import { MaakDino, MaakPlant } from "./fabriek.mjs";
let maakdino = MaakDino();
let maakplant = MaakPlant();
console.log(maakdino.naam);
console.log(maakplant.naam);

import { Dino } from "./dino.mjs";
let dino = new Dino("modulosaurus");
console.log(dino.naam);

import { Plant } from "./plant.mjs";
let plant = new Plant("moduloris");
console.log(plant.naam);

class App
{
    runApplication()
    {
        console.log("Hello world!");


    }
}
let app = new App();
app.runApplication();