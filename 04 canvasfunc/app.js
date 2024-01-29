


class App {

    

    tekenHuis2(x, y) {
        let canvas = document.getElementById("canvasId");
        let g = canvas.getContext("2d");
        

        g.beginPath();
        g.fillStyle = "red";
        g.moveTo(30 + x, 10 + y);
        g.lineTo(70 + x, 20 + y);
        g.lineTo(60 + x, 40 + y);
        g.lineTo(20 + x, 30 + y);
        g.closePath();
        g.stroke();
        g.fill();

        g.beginPath();
        g.fillStyle = "grey";
        g.moveTo(70 + x, 20 + y);
        g.lineTo(80 + x, 30 + y);
        g.lineTo(60 + x, 40 + y);
        g.closePath();
        g.stroke();
        g.fill();

        g.beginPath();
        g.fillStyle = "grey";
        g.moveTo(80 + x, 30 + y)
        g.lineTo(80 + x, 50 + y);
        g.lineTo(60 + x, 60 + y);
        g.lineTo(60 + x, 40 + y);
        g.closePath();
        g.stroke();
        g.fill();

        g.beginPath();
        g.fillStyle = "white";
        g.moveTo(60 + x, 40 + y);
        g.lineTo(60 + x, 60 + y);
        g.lineTo(20 + x, 50 + y);
        g.lineTo(20 + x, 30 + y);
        g.closePath();
        g.stroke();
        g.fill();

        g.beginPath();
        g.fillStyle = "brown";
        g.moveTo(36 + x, 54 + y);
        g.lineTo(44 + x, 56 + y);
        g.lineTo(44 + x, 45 + y);
        g.lineTo(36 + x, 43 + y);
        g.closePath();
        g.stroke();
        g.fill();

        g.beginPath();
        g.fillStyle = "blue";
        g.moveTo(22 + x, 34 + y);
        g.lineTo(24 + x, 34 + y);
        g.lineTo(24 + x, 32 + y);
        g.lineTo(22 + x, 32 + y);
        g.closePath();
        g.stroke();
        g.fill();
        console.log(canvas);
        console.log("Hello World!");
        //code gaat hier!
    }

    tekenKerstboom(x, y)
    {
        let canvas = document.getElementById("canvasId")
        let g = canvas.getContext("2d");
        g.beginPath()
        g.fillStyle = "brown"
        g.moveTo(45 + x, 95 + y)
        g.lineTo(55 + x, 95 + y)
        g.lineTo(55 + x, 35 + y)
        g.lineTo(45 + x, 35 + y)
        g.lineTo(45 + x, 95 + y)
        g.closePath()
        g.stroke()
        g.fill()
        
        g.beginPath()
        g.fillStyle = "green"
        g.moveTo(50 + x, 10 + y)
        g.lineTo(70 + x, 30 + y)
        g.lineTo(55 + x, 30 + y)
        g.lineTo(75 + x, 50 + y)
        g.lineTo(60 + x, 50 + y)
        g.lineTo(80 + x, 70 + y)
        g.lineTo(20 + x, 70 + y)
        g.lineTo(40 + x, 50 + y)
        g.lineTo(25 + x, 50 + y)
        g.lineTo(45 + x, 30 + y)
        g.lineTo(30 + x, 30 + y)
        g.lineTo(50 + x, 10 + y)
        g.closePath()
        g.stroke()
        g.fill()

        for (let i = 0; i <Math.round(Math.random()*6)+11; i++){
            g.beginPath()
            g.fillStyle = "#"+(Math.round((Math.random()*255)).toString(16))+(Math.round((Math.random()*255)).toString(16))+(Math.round((Math.random()*255)).toString(16));
        g.arc(x+(Math.random()*60)+20, y+(Math.random()*50)+20, 4, 0, 2* Math.PI);
        g.stroke();
        g.fill()
        }



        g.beginPath()
        g.fillStyle = ("yellow")
        g.moveTo(50 + x, 3 + y)
        g.lineTo(52 + x, 9 + y)
        g.lineTo(60 + x, 9 + y)
        g.lineTo(54 + x, 13 + y)
        g.lineTo(57 + x, 19 + y)
        g.lineTo(50 + x, 14 + y)
        g.lineTo(43 + x, 19 + y)
        g.lineTo(46 + x, 13 + y)
        g.lineTo(40 + x, 9 + y)
        g.lineTo(48 + x, 9 + y)
        g.lineTo(50 + x, 3 + y)
        g.stroke()
        g.fill()

    }


    runApplication() {



        this.tekenHuis2(0,0)
        this.tekenHuis2(500, 3)
        this.tekenHuis2(200, 700)
        this.tekenKerstboom(69,420)
    }


}

let app = new App();
app.runApplication();

