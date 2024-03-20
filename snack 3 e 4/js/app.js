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

for (let i = 0; i < elencoBici.length; i++) {

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


console.log('fine snack 4');