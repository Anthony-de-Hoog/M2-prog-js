class App {
    runApplication() {
        console.log("Hello world!");

    }
}

class Greet {
    constructor() {
        this.greeting = "Greetings!"
    }
    showGreeting() {
        console.log("greeting van binnen: " + this.greeting);
    }
}
let greet = new Greet()
greet.showGreeting();

class Goodbye {
    constructor() {
        this.farewell = "Bye bye!"
    }
    showBye() {
        console.log("Bye bye van binnen: " + this.farewell);
    }
}
let bye = new Goodbye()
bye.showBye();

greet.showGreeting();
bye.showBye();

greet.showGreeting();
bye.showBye();

greet.showGreeting();
bye.showBye();

console.log("greeting van buiten: " + greet.greeting);
console.log("Bye bye van buiten: " + bye.farewell);

let app = new App();
app.runApplication();