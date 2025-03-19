import '../Styles/Game.css';
import { useState, useEffect } from 'react';
import NumberBall from './NumberBall';
import { useLocation, useNavigate } from 'react-router-dom';
import scommessa from '../Utils/GameLogic';
import win from '../Utils/WinLogic';

const Game = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { numeriGiocati } = location.state || { numeriGiocati: [] }; // Ottieni i numeri giocati
    const { importo } = location.state || { importo: 0 }; // Imposta un valore predefinito per importo

    const [randomNumbers, setRandomNumbers] = useState([]);
    const [displayedNumbers, setDisplayedNumbers] = useState([]);
    const [importoVinto, setImportoVinto] = useState(null); // Stato per gestire l'importo vinto

    useEffect(() => {
        const generateRandomNumbers = () => {
            const numbers = new Set(); // Usa un Set per evitare duplicati
            while (numbers.size < 20) {
                const randomNumber = Math.floor(Math.random() * 90) + 1; // Genera un numero tra 1 e 90
                numbers.add(randomNumber); // Aggiungi il numero al Set
            }
            setRandomNumbers(Array.from(numbers)); // Converti il Set in un array
        };
        generateRandomNumbers();
    }, []); 

    useEffect(() => {
        if (randomNumbers.length > 0) {
            randomNumbers.forEach((number, index) => {
                setTimeout(() => {
                    setDisplayedNumbers(prev => [...prev, number]);
                    // Controlla se siamo all'ultimo numero
                    if (index === randomNumbers.length - 1) {
                        // Calcola l'importo vinto solo dopo che tutti i numeri sono stati visualizzati
                        let vincenti = scommessa(numeriGiocati, randomNumbers);
                        console.log(vincenti);
                        let importoVintoCalcolato = win(importo, vincenti.length, numeriGiocati.length);
                        setImportoVinto(importoVintoCalcolato); // Aggiorna l'importo vinto
                    }
                }, index * 800); // Aggiungi ogni numero dopo un intervallo di 800 millisecondi
            });
        }
    }, [randomNumbers]);


    function renderNumeriGiocati(numeriGiocati) {
        // Unisci gli elementi dell'array in una stringa separata da spazi
        const numeriStringa = numeriGiocati.join(' '); 
        return <h2 className='game-result'>Numeri giocati : {numeriStringa}</h2>;
    }

    return (
        <div className='main-div'> 
            <div className='div-all-rows'>
                <h2 className='game-title'>Gullo | Vertical ~ 10eLotto</h2>
                {displayedNumbers.reduce((rows, number, index) => {
                    // Inizia una nuova riga ogni 10 numeri
                    if (index % 10 === 0) {
                        rows.push([]); // Inizia una nuova riga
                    }
                    rows[rows.length - 1].push(
                        <NumberBall key={number} number={number} />
                    );
                    return rows;
                }, []).map((row, rowIndex) => (
                    <div className='div-row' key={`row-${rowIndex}`}>
                        {row}
                    </div>
                ))}
            </div>
            <div className='dettagli-scommessa'>
            <h2 className='game-result'>Importo scommesso : {importo} €</h2>
            {renderNumeriGiocati(numeriGiocati)}
            {importoVinto !== null && <h2 className='game-result'>Vincita totale : {importoVinto} €</h2>} {/* Mostra l'importo vinto solo se è stato calcolato */}
            </div>
            <button className='button-menu' onClick={() => navigate('/')}>Menu</button>
        </div>
    );
}

export default Game;
