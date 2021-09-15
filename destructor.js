const person = {
    name: "Abu Mus-ab",
    fatherName: "Abu Basir",
    Location:{
        state: "Irak",
        city: "Bagdad"
    },
    job: "Fighter",
    Rank: 7,
    position: "Leader",
};

const { job, Rank } = person;
const { city } = person.Location;
console.log(job, Rank);
console.log(city);