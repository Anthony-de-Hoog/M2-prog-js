class App
{
    runApplication()
    {
        let canvas = document.getElementById("canvasId");
        let g = canvas.getContext("2d");
        g.beginPath();
        g.fillStyle = "red";
        g.moveTo(300,100);
        g.lineTo(700,200);
        g.lineTo(600,400);
        g.lineTo(200,300);
        g.closePath();
        g.stroke();
        g.fill();
        
        g.beginPath();
        g.fillStyle = "grey";
        g.moveTo(700,200);
        g.lineTo(800,300);
        g.lineTo(600,400);
        g.closePath();
        g.stroke();
        g.fill();

        g.beginPath();
        g.fillStyle = "grey";
        g.moveTo(800,300)
        g.lineTo(800,500);
        g.lineTo(600,600);
        g.lineTo(600,400);
        g.closePath();
        g.stroke();
        g.fill();

        g.beginPath();
        g.fillStyle = "white";
        g.moveTo(600,400);
        g.lineTo(600,600);
        g.lineTo(200,500);
        g.lineTo(200,300);
        g.closePath();
        g.stroke();
        g.fill();
        console.log(canvas);
        console.log("Hello World!");
        //code gaat hier!
    }
}

let app = new App();
app.runApplication();

