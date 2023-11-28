class App
{
    runApplication()
    {
        let canvas = document.getElementById("canvasId");
        let g = canvas.getContext("2d");
        g.fillStyle = "purple";
        g.fillRect(0,0,canvas.clientWidth,canvas.height);
        g.fillStyle = "green"
        g.fillRect(0,0,10,10);
        console.log(canvas);
        console.log("Hello World!");
        //code gaat hier!
    }
}

let app = new App();
app.runApplication();

