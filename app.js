const app = Vue.createApp({   
    data(){
        return {
            firstName: 'Lionel',
            lastName: 'Messi',
            club: 'PSG',
            position: 'RW',
            country: 'Argentina',
            gender: 'male',
            totalRating: 93,
            pace: 85,
            shooting: 92,
            passing: 91,
            dribbling: 95,
            defending: 34,
            physical: 65,
            picture: "data:image/jpeg;base64,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"
        };
    },
    methods: {
        async getUser(){
            // const headers = {
            //     "X-Auth-Token": "d2886b0076164929a354411014296f2e"
            // };
            const res = await fetch('https://randomuser.me/api');
            // const clubRes = await fetch("http://api.football-data.org/v2/competitions/2021/standings", {
            //     "headers": headers,
            //     mode: "no-cors",
            // });
            const {results} = await res.json();
            // const {clubs} = await clubRes.json();
            // console.log(clubs);
            
            positions = ['GK', 'RB','LB', 'RWB', 'LWB', 'CB', 'DM', 'CM', 'AM',
                        'LM', 'RM', 'RW', 'LW', 'ST', 'CF']
            clubs = ['Manchester City', 'Bayern Munich', 'Chelsea', 'Barcelona',
                        'Liverpool', 'RB Leipzig', 'Real Madrid', 'Manchester United',
                        'Paris Saint Germain', 'Dortmund', 'Atletico Madrid', 'Atalanta',
                        'Arsenal', 'Inter Milan', 'Juventus', 'Sevilla', 'Real Sociedad',
                        'Ajax', 'RB Salzburg', 'Villarreal', 'Napoli', 'AC Milan',
                        'Monaco', 'Wolfsburg', 'Brighton', 'Leicester', 'Tottenham Hotspur',
                        'Zenit', 'Porto', 'Lyon', 'Lille', 'Real Betis', 'Leverkusen',
                        'West Ham', 'Benfica', 'Leeds United', 'Getafe', 'Gladbach',
                        'Eintracht', 'Athletic Bilbao', 'Roma', 'Lazio', 'Flamengo',
                        'Everton', 'Aston Villa', 'Celta Vigo', 'Hoffenheim', 'Sporting',
                        'Rangers', 'Young Boys'];

            this.firstName =  results[0].name.first;
            this.lastName =  results[0].name.last;
            this.club =  clubs[Math.floor(Math.random()*(clubs.length))];
            this.position =  positions[Math.floor(Math.random()*(positions.length))];
            this.country =  results[0].location.country;
            this.gender =  results[0].gender;
            this.totalRating =  Math.floor(Math.random()*101);
            this.pace =  Math.floor(Math.random()*101);
            this.shooting =  Math.floor(Math.random()*101);
            this.passing =  Math.floor(Math.random()*101);
            this.dribbling =  Math.floor(Math.random()*101);
            this.passing =  Math.floor(Math.random()*101);
            this.defending =  Math.floor(Math.random()*101);
            this.physical =  Math.floor(Math.random()*101);
            this.picture = results[0].picture.large;
        }
    }
});

app.mount("#app");