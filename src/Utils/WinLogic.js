
function win(importo, numeriVincenti, numeriGiocati) {
    // Mappa dei premi
    const premi = {
        1: { 1: 3.00 },
        2: { 2: 14.00 },
        3: { 2: 2.00, 3: 45.00 },
        4: { 2: 1.00, 3: 10.00, 4: 90.00 },
        5: { 2: 1.00, 3: 4.00, 4: 15.00, 5: 140.00 },
        6: { 3: 2.00, 4: 10.00, 5: 100.00, 6: 1000.00 },
        7: { 4: 4.00, 5: 40.00, 6: 400.00, 7: 1600.00 },
        8: { 5: 20.00, 6: 200.00, 7: 800.00, 8: 10000.00 },
        9: { 0: 2.00, 5: 10.00, 6: 40.00, 7: 400.00, 8: 2000.00, 9: 100000.00 },
        10: { 0: 2.00, 5: 5.00, 6: 15.00, 7: 150.00, 8: 1000.00, 9: 20000.00, 10: 1000000.00 }
    };

    // Controlla se ci sono premi per il numero di numeri giocati
    if (premi[numeriGiocati] && premi[numeriGiocati][numeriVincenti]) {
        const premioBase = premi[numeriGiocati][numeriVincenti];
        return premioBase * importo; // Moltiplica il premio per l'importo scommesso
    } else {
        return 0; // Nessun premio
    }
}

export default win
