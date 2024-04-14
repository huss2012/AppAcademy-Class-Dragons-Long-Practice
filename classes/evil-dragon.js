// Your code here

const Dragon = require("./dragon");

class EvilDragon extends Dragon{
    constructor(name, color, evilDoings, nemesis) {
        super(name, color, evilDoings, nemesis);
        this.evilDoings = evilDoings;
        this.nemesis = nemesis;
    }

    dontInviteThemOverForDinner() {
        this.evilDoings.forEach(evileDoing => {
            console.log(`${this.name} will ${evileDoing}`);
        });
    };

    burnsNemesis() {
        return `${this.name} destroys ${this.nemesis} with fire! WHOOOSH!!!`;
    }
}






//---------Local Test-----------------------
const enderDragon = new EvilDragon(
    "Ender Dragon",
    "black", [
    "spit a fireball at Steve",
    "rule over all the Endermen",
    "destroy all blocks in its way"
],
    "Steve"
);
// console.log(enderDragon);
// enderDragon.dontInviteThemOverForDinner();
// console.log(enderDragon.breathesFire());
// console.log(enderDragon.burnsNemesis());
// const drogon = new EvilDragon(
//     "Drogon",
//     "black-red",
//     [
//         "eat all your livestock",
//         "burn down your castle in Westeros",
//         "burn your father and brother"
//     ],
//     "Night King"
// );
// console.log(drogon);
// drogon.dontInviteThemOverForDinner();
// console.log(drogon.breathesFire());
// console.log(drogon.burnsNemesis());

//------------Exporting the module----------
try {
    module.exports = EvilDragon;
} catch {
    module.exports = null;
}
