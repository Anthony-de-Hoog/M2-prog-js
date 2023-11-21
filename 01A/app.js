class App
{
    runApplication()
    {
        console.log("Hello world!");
        let appNaam = "Tander";
        let versienummer = 0.9
        let versiedatum = 1.5;
        let autheur = "Anthony Anthonius Antoinette de Hoog";
        let copyright = "AAA industries";
        let distributeur = "Nintendo";
        let darkmode = true;

        console.log(appNaam);
        console.log(versienummer);
        console.log(versiedatum);
        console.log(autheur);
        console.log(copyright);
        console.log(distributeur);
        console.log(darkmode);

    }
}
let app = new App();
app.runApplication();