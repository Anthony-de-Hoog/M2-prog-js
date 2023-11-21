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