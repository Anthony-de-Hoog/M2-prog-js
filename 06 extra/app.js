let lijst = [["boom", "#00FF00", 0.6], ["huis", "#FF0000", 2.4]]

class App {

    runApplication()
    {
        for (let g = 0; g < 10; g++){
            let item = [lijst[Math.round(Math.random())][0], lijst[Math.round(Math.random())][1], lijst[Math.round(Math.random())][2]]
            if (item[0] == "boom"){
                this.tekenKerstboom(Math.round(Math.random()*500), Math.round(Math.random()*500), item[1], item[2])
            } else if (item[0] == "huis"){
                this.tekenHuis2(Math.round(Math.random()*500), Math.round(Math.random()*500), item[1], item[2])
            }
            console.log(item)
        }
    }


    tekenHuis2(x, y, k, j) {
        let canvas = document.getElementById("canvasId");
        let g = canvas.getContext("2d");


        g.beginPath();
        g.fillStyle = k;
        g.moveTo(j * 30 + x, y+10*j);
        g.lineTo(j * 70 + x, y+20*j);
        g.lineTo(j * 60 + x, y+40*j);
        g.lineTo(j * 20 + x, y+30*j);
        g.closePath();
        g.stroke();
        g.fill();

        g.beginPath();
        g.fillStyle = "grey";
        g.moveTo(j * 70 + x, y+20*j);
        g.lineTo(j * 80 + x, y+30*j);
        g.lineTo(j * 60 + x, y+40*j);
        g.closePath();
        g.stroke();
        g.fill();

        g.beginPath();
        g.fillStyle = "grey";
        g.moveTo(j * 80 + x, y+30*j)
        g.lineTo(j * 80 + x, y+50*j);
        g.lineTo(j * 60 + x, y+60*j);
        g.lineTo(j * 60 + x, y+40*j);
        g.closePath();
        g.stroke();
        g.fill();

        g.beginPath();
        g.fillStyle = "white";
        g.moveTo(j * 60 + x, y+40*j);
        g.lineTo(j * 60 + x, y+60*j);
        g.lineTo(j * 20 + x, y+50*j);
        g.lineTo(j * 20 + x, y+30*j);
        g.closePath();
        g.stroke();
        g.fill();

        g.beginPath();
        g.fillStyle = "brown";
        g.moveTo(j * 36 + x, y+54*j);
        g.lineTo(j * 44 + x, y+56*j);
        g.lineTo(j * 44 + x, y+45*j);
        g.lineTo(j * 36 + x, y+43*j);
        g.closePath();
        g.stroke();
        g.fill();

        g.beginPath();
        g.fillStyle = "blue";
        g.moveTo(j * 22 + x, y+34*j);
        g.lineTo(j * 24 + x, y+34*j);
        g.lineTo(j * 24 + x, y+32*j);
        g.lineTo(j * 22 + x, y+32*j);
        g.closePath();
        g.stroke();
        g.fill();
        console.log(canvas);
        console.log("Hello World!");
        //code gaat hier!
    }

    tekenKerstboom(x, y, k, j) {
        let canvas = document.getElementById("canvasId")
        let g = canvas.getContext("2d");
        g.beginPath()
        g.fillStyle = "brown"
        g.moveTo(j * 45 + x, y+95*j)
        g.lineTo(j * 55 + x, y+95*j)
        g.lineTo(j * 55 + x, y+35*j)
        g.lineTo(j * 45 + x, y+35*j)
        g.lineTo(j * 45 + x, y+95*j)
        g.closePath()
        g.stroke()
        g.fill()

        g.beginPath()
        g.fillStyle = k
        g.moveTo(j * 50 + x, y+10*j)
        g.lineTo(j * 70 + x, y+30*j)
        g.lineTo(j * 55 + x, y+30*j)
        g.lineTo(j * 75 + x, y+50*j)
        g.lineTo(j * 60 + x, y+50*j)
        g.lineTo(j * 80 + x, y+70*j)
        g.lineTo(j * 20 + x, y+70*j)
        g.lineTo(j * 40 + x, y+50*j)
        g.lineTo(j * 25 + x, y+50*j)
        g.lineTo(j * 45 + x, y+30*j)
        g.lineTo(j * 30 + x, y+30*j)
        g.lineTo(j * 50 + x, y+10*j)
        g.closePath()
        g.stroke()
        g.fill()

        for (let i = 0; i < Math.round(Math.random() * 6) + 11; i++) {
            g.beginPath()
            g.fillStyle = "#" + (Math.round((Math.random() * 255)).toString(16)) + (Math.round((Math.random() * 255)).toString(16)) + (Math.round((Math.random() * 255)).toString(16));
            g.arc(x + (Math.random() * 60) + 20, y + (Math.random() * 50) + 20, 4, 0, 2 * Math.PI);
            g.stroke();
            g.fill()
        }



        g.beginPath()
        g.fillStyle = ("yellow")
        g.moveTo(j * 50 + x, y+3*j)
        g.lineTo(j * 52 + x, y+9*j)
        g.lineTo(j * 60 + x, y+ 9*j)
        g.lineTo(j * 54 + x, y+13*j)
        g.lineTo(j * 57 + x, y+19*j)
        g.lineTo(j * 50 + x, y+14*j)
        g.lineTo(j * 43 + x, y+19*j)
        g.lineTo(j * 46 + x, y+13*j)
        g.lineTo(j * 40 + x, y+9*j)
        g.lineTo(j * 48 + x, y+9*j)
        g.lineTo(j * 50 + x, y+3*j)
        g.stroke()
        g.fill()

    }



}


let app = new App();
app.runApplication();
console.log(Math.round((Math.random()*55)+200))