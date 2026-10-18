const compositeur = "Chopin";
const mesures = 32;
const tempsParMesure = 4;
const tempo = 120;

const totalTemps = mesures * tempsParMesure;
const minutes = totalTemps / tempo;

function App() {
    return (
        <div>
            <h1>Compositeur : {compositeur}</h1>
            <p>{mesures} mesures &times; {tempsParMesure} temps = {totalTemps} temps</p>
            <p>Duree : {minutes} minutes</p>
        </div>
    )
}

export default App;