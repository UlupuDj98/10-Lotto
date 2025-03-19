function scommessa(giocati, estratti) {
    
    let vincenti = [];
    let errore = 'Scommessa non accettata, scommettere almeno 1 numero';
    
    
    if (giocati.length < 1) {
        console.log(errore);
        return errore;
    }

    for (let i = 0; i < giocati.length; i++) {
        for (let j = 0; j < estratti.length; j++) {
            if (giocati[i] === estratti[j]) {
                vincenti.push(estratti[j]);
            }
        }
    }

    return vincenti;
}

export default scommessa;
