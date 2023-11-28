class App
{
    runApplication()
    {
        let canvas = document.getElementById("canvasId");
        let g = canvas.getContext("2d");
        g.beginPath();
        g.fillStyle = "red";
        g.moveTo(30,10);
        g.lineTo(70,20);
        g.lineTo(60,40);
        g.lineTo(20,30);
        g.closePath();
        g.stroke();
        g.fill();
        
        g.beginPath();
        g.fillStyle = "grey";
        g.moveTo(70,20);
        g.lineTo(80,30);
        g.lineTo(60,40);
        g.closePath();
        g.stroke();
        g.fill();

        g.beginPath();
        g.fillStyle = "grey";
        g.moveTo(80,30)
        g.lineTo(80,50);
        g.lineTo(60,60);
        g.lineTo(60,40);
        g.closePath();
        g.stroke();
        g.fill();

        g.beginPath();
        g.fillStyle = "white";
        g.moveTo(60,40);
        g.lineTo(60,60);
        g.lineTo(20,50);
        g.lineTo(20,30);
        g.closePath();
        g.stroke();
        g.fill();

        g.beginPath();
        g.fillStyle = "brown";
        g.moveTo(36,54);
        g.lineTo(44,56);
        g.lineTo(44,45);
        g.lineTo(36,43);
        g.closePath();
        g.stroke();
        g.fill();

        g.beginPath();
        g.fillStyle = "blue";
        g.moveTo(22,34);
        g.lineTo(24,34);
        g.lineTo(24,32);
        g.lineTo(22,32);
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

