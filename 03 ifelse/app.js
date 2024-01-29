class App
{
    runApplication()
    {
        
        let title = document.getElementById("newstitle")
        //het Id van de nieuws artiekel
        let newsitem1 = document.getElementsByClassName("Gamenews")[0]
        //de headLine voor het nieuws artiekel
        let newsitem2 = document.getElementsByClassName("Gamenews")[1]
        //de actuele Id van de actuele nieuws
        console.log(title)

        let random = Math.random();
        console.log(random);
        if(random < 0.2)
        {
            title.style.backgroundColor = "#FF0000";
        } else if(random >= 0.2 && random <= 0.6)
        {
            title.style.backgroundColor = "#B833FF";
        } else if(random > 0.6 && random <= 0.75)
        {
            title.style.backgroundColor = "#33FF46";
        } else if(random > 0.75 )
        {
            title.style.backgroundColor = "#FFD433";
        } 

        let random2 = Math.random();
        console.log(random2);
        if(random2 < 0.2)
        {
            newsitem1.style.backgroundColor = "#FF0000";
        } else if(random2 >= 0.2 && random <= 0.6)
        {
            newsitem1.style.backgroundColor = "#B833FF";
        } else if(random2 > 0.6 <= 0.75)
        {
            newsitem1.style.backgroundColor = "#33FF46";
        } else if(random2 > 0.75 )
        {
            newsitem1.style.backgroundColor = "#FFD433";
        } 

        let random3 = Math.random();
        console.log(random3);
        if(random3 < 0.2)
        {
            newsitem2.style.backgroundColor = "#FF0000";
        } else if(random3 >= 0.2 <= 0.6)
        {
            newsitem2.style.backgroundColor = "#B833FF";
        } else if(random3 > 0.6 <= 0.75)
        {
            newsitem2.style.backgroundColor = "#33FF46";
        } else if(random3 > 0.75 )
        {
            newsitem2.style.backgroundColor = "#FFD433";
        }
    }
}
let app = new App();
app.runApplication();