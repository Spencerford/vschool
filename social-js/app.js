var soccerPlayer = {
    name: "spencer",
    age: 25,
    positions: ["forward", "midfield", "Defense"],
    favoriteTeams: [],
    teammates: [
        {
            name: "Danyon",
            age: 25,
            positions: ["forward", "midfield"],
            starter: function () {
                console.log("Danyon is a starter!!!")
            },
            favoriteTeam: [
                {
                    teamName: "RSL",
                    player: "Rimando",
                },
            ]
        },
        {
            name: "Dakota",
            age: 24,
            positions: ["Defense", "Forward"],
            starter: function () {
                conole.log("Dakota is a starter!!!")
            },
            favoriteTeam: [
                {
                    teamName: "Manchester United",
                    player: "Rooney",
                },
            ]
        },
        {
            name: "Jordan",
            age: 21,
            positions: ["Forward", "Defense"],
            favoriteTeam: [
                {
                    teamName: "Barcelona",
                    player: "Messi",
                },
            ]
        },
        {
            name: "Joseph",
            age: 22,
            positions: ["Midfield"],
            favoriteTeam: [
                {
                    teamName: "Real Madrid",
                    player: "Cristiano Ronaldo",
                },
            ]
        }
    ]
}

console.log(soccerPlayer.teammates[0].name);
soccerPlayer.teammates[0].starter();