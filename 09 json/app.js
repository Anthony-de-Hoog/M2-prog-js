class App {
    runApplication() {
        console.log("Hello world!");
        let magickaart = {
            attack: 3,
            defence: 2,
            name: "basic creature",
            cost: ["R1", "1B"],
            Text: "This basic creatures is better at attacking"
        };

        let Majesty = {
            artist: "Ghost",
            title: "Majesty",
            album: "Meliora",
            trackNumber: 7,
            genre: "Heavy Metal"
        }

        let Teenagers = {
            artist: "My Chemical Romance",
            title: "Teenagers",
            album: "Black Parade",
            trackNumber: 11,
            genre: "Rock"
        }

        let IDontKnowWhatWeAreTalkingAboutAndIHaventForAWhile = {
            artist: "Ninja Sex Party",
            title: "I Don't Know What We Are Talking About (And I Haven't For A While)",
            album: "The Prophecy",
            trackNumber: 5,
            genre: "rock or synth-pop-oriented humorous songs"
        }
        let Artist = {
            artistName: "Ghost",
            age: 18,
            grammyCount: 1,
            number1HitsCount: 6,
            genre: "Heavy Metal, Doom metal, Hard Rock, Pop Rock, Progressive Rock, Arena Rock"
        };

        let spotifyPlaylist = {
            accountName: "leraar",
            songs: [{ Majesty }, { Teenagers }, { IDontKnowWhatWeAreTalkingAboutAndIHaventForAWhile }],
            favoriteArtist: { Artist }
        };

        let coolJson = '{"legosetname":"Geluksdraak","itemnumber":80112,"pieces":1171,"releaseDate":"Binnenkort op 1 januari 2024","price":79.99}';

        fetch("lego.json")
            .then((httpResponse) => {
                console.log("From the net===========")
                console.log(httpResponse);
                return httpResponse.json();
            })
            .then((json) => {
                console.log(json);
            });

        fetch("nope.json")
            .then((httpResponse) => {
                console.log("From the net===========")
                console.log(httpResponse);
                if(httpResponse.status != 200)
                {
                    throw new Error("something went wrong");
                }
                return httpResponse.json();
            })
            .then((json) => {
                console.log(json);
            })
            .catch((error) => {
                console.log("Error: " + error)
            });

        console.log(magickaart);
        console.log("You play: " + magickaart.name);
        console.log(magickaart.Text);
        console.log(magickaart.name + " has " + magickaart.attack + " attack");
        console.log(magickaart.name + " has " + magickaart.defence + " defence");
        console.log("You played: " + magickaart.cost[0] + " and " + magickaart.cost[1]);
        console.log(spotifyPlaylist);
        console.log(Artist);
        console.log(Majesty);
        console.log(Teenagers);
        console.log(IDontKnowWhatWeAreTalkingAboutAndIHaventForAWhile);

        console.log(magickaart);
        let dataToSend = JSON.stringify(magickaart);
        console.log(dataToSend);

        console.log(spotifyPlaylist);
        let dataToSend2 = JSON.stringify(spotifyPlaylist);
        console.log(dataToSend2);

        let objectFromString = JSON.parse(coolJson);
        console.log(objectFromString);

        console.log("name: " + objectFromString.legosetname);
        console.log("itemnumber: " + objectFromString.itemnummer);
        console.log("pieces: " + objectFromString.pieces);
        console.log("releaseDate: " + objectFromString.releaseDate);
        console.log("price: " + objectFromString.price);
    }
}



let app = new App();
app.runApplication();