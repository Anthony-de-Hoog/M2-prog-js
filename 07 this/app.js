class User
{
    constructor(name)
    {
        this.name = name
    }
    
    wieBenIk()
    {
        console.log(this.name)
    }
}

class App
{
    runApplication()
    {
        console.log("Hello world!");

        let user1 = new User("Willem")
        let user2 = new User("Willhelm")
        let user3 = new User("Willard")
        let user4 = new User("Williard")
        let user5 = new User("William")
        let user6 = new User("Larry")

        user6.wieBenIk(); //Larry
        user5.wieBenIk(); //William
        user2.wieBenIk(); //Willhelm
        user3.wieBenIk(); //Willard
        user1.wieBenIk(); //Willem
        user6.wieBenIk(); //Larry
        user4.wieBenIk(); //Williard
        user2.wieBenIk(); //Willhelm
        user3.wieBenIk(); //Willard
        user2.wieBenIk(); //Willhelm
        //alles goed
    }
}


let app = new App();
app.runApplication();