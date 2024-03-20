console.log('inizio snack 3');
// SNACK 3
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare in console la bici con peso minore utilizzando destructuring e template literal

const elencoBici = [
    {
        nome: 'Mountain Crusher',
        peso: 12
    },
    {
        nome: 'Speed Demon',
        peso: 15
    },
    {
        nome: 'Urban Cruiser',
        peso: 9
    },
    {
        nome: 'Stealth Rider',
        peso: 18
    },
    {
        nome: 'Electric Thunder',
        peso: 11
    }
];


let biciPiuLeggera = elencoBici[0];

for (let i = 1; i < elencoBici.length; i++) {

    const bici = elencoBici[i];
    // console.log(bici);

    if (bici.peso < biciPiuLeggera.peso) {

        biciPiuLeggera = bici;

        console.log(`
               bici più leggera: ${biciPiuLeggera.nome}  
               peso: ${biciPiuLeggera.peso} kg
               `);
    }
}

console.log('fine snack 3');

console.log('inizio snack 4');
// SNACK 4
// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti.
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

const squadre = [
    {
        nome: 'Milan',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'Roma',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'Real Madrid',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'Barcellona',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'PSG',
        puntiFatti: 0,
        falliSubiti: 0
    }
];

    // console.log(squadre);
for (let i = 0; i < squadre.length; i++) {
    const puntiFatti = parseInt((Math.random() * 20))
    const falliSubiti = parseInt((Math.random() * 20) )
    const nome = squadre[i].nome;

    // console.log(puntiFatti);
    // console.log(falliSubiti);
    // console.log(`
    //                Squadra: ${nome}  
    //                Punti fatti: ${puntiFatti} 
    //                Falli Subiti: ${falliSubiti} 
    //                `);
    const  nomiEFalliSubiti = { nome, falliSubiti }
    console.log(nomiEFalliSubiti)
};

console.log('fine snack 4');