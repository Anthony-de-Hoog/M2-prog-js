class App
{
    runApplication()
    {
        this.greeting = "Starting up"
        this.appNaam = "Tander";
        this.versienummer = 1.5;
        this.versiedatum = "Tue Nov 21 2023 15:31:00 GMT+0100 (central European Time)";
        this.autheur = "Anthony Anthonius Antoinette de Hoog";
        this.copyright = "AAA industries";
        this.distributeur = "Nintendo";
        this.darkmode = true;
        let groteEgo = true;
        let hamsterNaam = "Wilhelm III";
        let bugs = 99;
        this.likable = false;
        this.naamBanaan = "Eduardo"
        this.loveInterest = 0;

        console.log("Grote ego: " + groteEgo);
        console.log("Hamster naam: " + hamsterNaam);
        console.log("Aantal bugs: " + bugs);

    }
}

let app = new App();
app.runApplication();

console.log(app.greeting);
console.log("Appnamm: " + app.appNaam);
console.log("Versienummer: " + app.versienummer);
console.log("Versiedatum: " + app.versiedatum);
console.log("Autheur: " + app.autheur);
console.log("Copyright " + app.copyright);
console.log("Distributeur: " + app.distributeur);
console.log("Darkmode: " + app.darkmode);
console.log("Mensen die mij mogen: " + app.likable);
console.log("Naam van mijn banaan: " + app.naamBanaan);
console.log("Hoeveel vriendinnen die ik ooit gehad heb: " + app.loveInterest)