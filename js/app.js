console.log('inizio snack 1');
// *SNACK 1*
// Dwayne Johnson ci ha chiesto di creare i segnaposto per il tavolo degli invitati alla sua mega festa vip.
// Ci ha lasciato il nome del tavolo (“Tavolo Vip”) e la lista degli invitati in ordine di posto:
// [ 'Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni', 'Fedez', 'George Clooney', 'Amal Clooney', 'Maneskin']
// Ma la tipografia per stampare il tutto vuole che le mandiamo una lista di ospiti in un formato specifico, per cui dobbiamo fare in modo che ogni ospite sia un oggetto javascript che ha come attributi:
// nome del tavolo,
// nome dell’ospite,
// posto occupato.
// Generiamo e stampiamo in console la lista per i segnaposto.

// creo l'array listaInvitati.
// const listaInvitati = [
//     {
//         nomeTavolo: 'Tavolo Vip',
//         nomeOspite: [],
//         posto: []
//     }
// ];
// // creo l'array nomiOspiti.
// const nomiOspiti = ['Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni', 'Fedez', 'George Clooney', 'Amal Clooney', 'Maneskin'];

// // creo il ciclo che mi pusha il nome ospite e il numero di posto che poi verrà stampato in console.
// for (let i = 0; i < nomiOspiti.length; i++) {

//     listaInvitati[0].nomeOspite.push(nomiOspiti[i]);
//     listaInvitati[0].posto.push(i + 1);

//     const nomeOspite = listaInvitati[0].nomeOspite[i];
//     const posto = listaInvitati[0].posto[i];

//     console.log(`
//     Nome Tavolo: ${listaInvitati[0].nomeTavolo}
//     Nome Ospite: ${nomeOspite}
//     Numero Posto: ${posto}`);
// };

const nomiOspiti = [
    'Brad Pitt',
    'Johnny Depp',
    'Lady Gaga',
    'Cristiano Ronaldo',
    'Georgina Rodriguez',
    'Chiara Ferragni',
    'Fedez',
    'George Clooney',
    'Amal Clooney',
    'Maneskin'
];

const listaSegnaPosto = nomiOspiti.map((elNome, i) => {
    return {
        nomeTavolo: 'Tavolo Vip',
        nomeOspite: elNome,
        posto: i + 1
    };
});

console.log(listaSegnaPosto);
console.log('fine snack 1');


console.log('snack 2');
    // *SNACK 2*
// Abbiamo un elenco degli studenti di una facoltà, identificati da id, Nome e somma totale dei loro voti di esame...
// 1. Per preparare l’aula di un nuovo corso, dobbiamo stampare le targhe col nome degli studenti: creare una lista contenente il loro nome tutto in maiuscolo
// ES (Marco della Rovere => MARCO DELLA ROVERE);
// 2. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70
// 3. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120
// Questo è l’elenco degli studenti:
// Id   Name                    Grades
// 213  Marco della Rovere      78
// 110  Paola Cortellessa       96
// 250  Andrea Mantegna 	      48
// 145  Gaia Borromini          74
// 196  Luigi Grimaldello 	  68
// 102  Piero della Francesca   50
// 120  Francesca da Polenta    84


const listaStudenti = [
    {
        id: 213,
        nome: 'Marco della Rovere ',
        voto: 78
    },
    {
        id: 110,
        nome: 'Paola Cortellessa',
        voto: 96
    },
    {
        id: 250,
        nome: 'Andrea Mantegna',
        voto: 48
    },
    {
        id: 145,
        nome: 'Gaia Borromini',
        voto: 74
    },
    {
        id: 196,
        nome: 'Luigi Grimaldello',
        voto: 68
    },
    {
        id: 102,
        nome: 'Piero della Francesca',
        voto: 50
    },
    {
        id: 120,
        nome: 'Francesca da Polenta',
        voto: 84
    }
];

// lista nomi in maiuscolo
const nomeInMaiuscolo = listaStudenti.map(studente => studente.nome.toUpperCase());
console.log(nomeInMaiuscolo);

