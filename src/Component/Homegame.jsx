import { useState } from 'react';
import '../Styles/Homegame.css';
import PlayBall from './PlayBall';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';

const Homegame = () => {
    const [importo, setImporto] = useState(0);
    const [numeriDaGiocare, setNumeriDaGiocare] = useState(Array(10).fill('')); // Inizializza un array di 10 elementi vuoti
    const navigate = useNavigate();

    const handleNumero = (index) => (e) => {
        const value = e.target.value;
        // Controlla se il valore è un numero valido tra 1 e 90 o vuoto
        if (value === '' || (Number(value) >= 1 && Number(value) <= 90)) {
            const newNumeriDaGiocare = [...numeriDaGiocare];
            newNumeriDaGiocare[index] = value; // Aggiorna il valore dell'input corrispondente
            setNumeriDaGiocare(newNumeriDaGiocare); // Aggiorna lo stato
        }
    };

    const handleImporto = (e) => {
        // Logica che l'importo deve essere maggiore di 0, se è vuoto l'input non permette l'handlePlayBallClick
        setImporto(e.target.value);
    };

    const getNumeri = () => {
        // Filtra i numeri validi e li converte in numeri
        const giocati = numeriDaGiocare
            .filter(num => num !== '') // Rimuove gli input vuoti
            .map(num => Number(num)); // Converte i valori in numeri

        console.log(giocati); // Stampa i numeri giocati
        return giocati; // Restituisce l'array di numeri giocati
    };

    const handlePlayBallClick = () => {
        const numeriGiocati = getNumeri(); // Ottieni i numeri giocati
        console.log(numeriGiocati); // Stampa i numeri giocati
    
        // Controlla se l'importo è valido (maggiore di 0)
        if (importo === '' || Number(importo) <= 0) {
            alert("L'importo deve essere maggiore di 0.");
            return; // Non procedere se l'importo non è valido
        }

        if (numeriGiocati.length <1){
            alert("Inserire almeno un numero per giocare")
            return
        }
    
        // Controlla se ci sono duplicati nei numeri giocati
        const numeriUnici = new Set(numeriGiocati);
        if (numeriUnici.size !== numeriGiocati.length) {
            alert("I numeri giocati non possono contenere duplicati.");
            return; // Non procedere se ci sono duplicati
        }
    
        navigate('/home/game', { state: { numeriGiocati, importo } }); // Naviga alla pagina successiva con i numeri giocati e l'importo
    };
    

    return (
        <div className='main-div'>
            <div className='home-title'>
                <h1 className='game-title'>10eLotto</h1>
            </div>
            <div className='info-1'>
                <h3 className='infotext'>Numeri da giocare</h3>
            </div>
            <div className='div-scommessa'>
                {numeriDaGiocare.map((numero, index) => (
                    <input
                        key={index}
                        className="casella"
                        type="text"
                        value={numero}
                        onChange={handleNumero(index)}
                    />
                ))}
            </div>
            <div className='info-2'>
                <h3 className='infotext'>Importo in €</h3>
            </div>
            <div className='div-scommessa'>
                <input className="casella-importo" type="text" name='casellaImporto' id="casellaImporto" value={importo} onChange={handleImporto} />
            </div>
            <div className='div-main-ball'>
                <PlayBall onClick={handlePlayBallClick} />
            </div>
            <Footer />
        </div>
    );
};

export default Homegame;
