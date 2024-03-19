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
const listaInvitati = [
    {
        nomeTavolo: 'Tavolo Vip',
        nomeOspite: [],
        posto: []
    }
];
// creo l'array nomiOspiti.
const nomiOspiti = ['Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni', 'Fedez', 'George Clooney', 'Amal Clooney', 'Maneskin'];

// creo il ciclo che mi pusha il nome ospite e il numero di posto che poi verrà stampato in console.
for (let i = 0; i < nomiOspiti.length; i++) {

    listaInvitati[0].nomeOspite.push(nomiOspiti[i]);
    listaInvitati[0].posto.push(i + 1);
    
    const nomeOspite = listaInvitati[0].nomeOspite[i];
    const posto = listaInvitati[0].posto[i];
    
    console.log(`
    Nome Tavolo: ${listaInvitati[0].nomeTavolo}
    Nome Ospite: ${nomeOspite}
    Numero Posto: ${posto}`);
};