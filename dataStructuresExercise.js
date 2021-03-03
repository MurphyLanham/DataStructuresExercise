const jedi = []
jedi [jedi.length] = "Luke";
jedi.push("Obi-Wan Kenobi")
jedi.unshift("Yoda")
console.log(jedi[1]);
jedi.splice(2,1)
jedi.splice(0,1)
const sithLords = ["Darth Vader","Darth Sidious","Darth Maul"]
const imperialOfficers = ["Grand Moff Tarkin", "Orson Krennic"]
const starWarsVillains = sithLords.concat(imperialOfficers)
console.log(starWarsVillains.slice(0,2));
const droids = {
    astromech: "R2-D2",
    protocol: "C-3PO",
    assassin: "IG-88"
}
console.log(droids["astromech"]);
console.log(droids.protocol);
droids.assassin = "IG-11"
console.log(droids);

console.log(jedi);
console.log(starWarsVillains);