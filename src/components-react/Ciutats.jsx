import { useState, useEffect } from "react";


const CIUTATS_CAT_20K = [
    {municipi: "Barcelona", poblacio: "100.809", provincia: "Barcelona", comarca: "Barcelonès"},
    {municipi: "L'Hospitalet de Llobregat", poblacio: "257.349", provincia: "Barcelona", comarca: "Barcelonès"},
    {municipi: "Badalona", poblacio: "217.741", provincia: "Barcelona", comarca: "Barcelonès"},
    {municipi: "Terrassa", poblacio: "216.428", provincia: "Barcelona", comarca: "Vallès Occidental"},
    {municipi: "Sabadell", poblacio: "209.931", provincia: "Barcelona", comarca: "Vallès Occidental"},
    {municipi: "Lleida", poblacio: "137.327", provincia: "Lleida", comarca: "Segrià"},
    {municipi: "Tarragona", poblacio: "131.507", provincia: "Tarragona", comarca: "Tarragonès"},
    {municipi: "Mataró", poblacio: "126.127", provincia: "Barcelona", comarca: "Maresme"},
    {municipi: "Santa Coloma de Gramenet", poblacio: "117.597", provincia: "Barcelona", comarca: "Barcelonès"},
    {municipi: "Reus", poblacio: "103.123", provincia: "Tarragona", comarca: "Baix Camp"},
    {municipi: "Girona", poblacio: "100.266", provincia: "Girona", comarca: "Gironès"},
    {municipi: "Sant Cugat del Vallès", poblacio: "89.516", provincia: "Barcelona", comarca: "Vallès Occidental"},
    {municipi: "Cornellà de Llobregat", poblacio: "86.610", provincia: "Barcelona", comarca: "Baix Llobregat"},
    {municipi: "Sant Boi de Llobregat", poblacio: "82.142", provincia: "Barcelona", comarca: "Baix Llobregat"},
    {municipi: "Rubí", poblacio: "75.568", provincia: "Barcelona", comarca: "Vallès Occidental"},
    {municipi: "Manresa", poblacio: "75.152", provincia: "Barcelona", comarca: "Bages"},
    {municipi: "Vilanova i la Geltrú", poblacio: "66.077", provincia: "Barcelona", comarca: "Garraf"},
    {municipi: "Viladecans", poblacio: "65.993", provincia: "Barcelona", comarca: "Baix Llobregat"},
    {municipi: "Castelldefels", poblacio: "65.954", provincia: "Barcelona", comarca: "Baix Llobregat"},
    {municipi: "El Prat de Llobregat", poblacio: "63.897", provincia: "Barcelona", comarca: "Baix Llobregat"},
    {municipi: "Granollers", poblacio: "60.695", provincia: "Barcelona", comarca: "Vallès Oriental"},
    {municipi: "Cerdanyola del Vallès", poblacio: "57.723", provincia: "Barcelona", comarca: "Vallès Occidental"},
    {municipi: "Mollet del Vallès", poblacio: "51.128", provincia: "Barcelona", comarca: "Vallès Oriental"},
    {municipi: "Gavà", poblacio: "46.538", provincia: "Barcelona", comarca: "Baix Llobregat"},
    {municipi: "Figueres", poblacio: "45.961", provincia: "Girona", comarca: "Alt Empordà"},
    {municipi: "Esplugues de Llobregat", poblacio: "45.890", provincia: "Barcelona", comarca: "Baix Llobregat"},
    {municipi: "Sant Feliu de Llobregat", poblacio: "44.198", provincia: "Barcelona", comarca: "Baix Llobregat"},
    {municipi: "Vic", poblacio: "43.964", provincia: "Barcelona", comarca: "Osona"},
    {municipi: "Igualada", poblacio: "39.540", provincia: "Barcelona", comarca: "Anoia"},
    {municipi: "Vilafranca del Penedès", poblacio: "39.532", provincia: "Barcelona", comarca: "Alt Penedès"},
    {municipi: "Blanes", poblacio: "38.813", provincia: "Girona", comarca: "Selva"},
    {municipi: "Ripollet", poblacio: "37.899", provincia: "Barcelona", comarca: "Vallès Occidental"},
    {municipi: "Lloret de Mar", poblacio: "36.878", provincia: "Girona", comarca: "Selva"},
    {municipi: "Sant Adrià de Besòs", poblacio: "36.624", provincia: "Barcelona", comarca: "Barcelonès"},
    {municipi: "El Vendrell", poblacio: "36.568", provincia: "Tarragona", comarca: "Baix Penedès"},
    {municipi: "Montcada i Reixac", poblacio: "35.063", provincia: "Barcelona", comarca: "Vallès Occidental"},
    {municipi: "Olot", poblacio: "34.194", provincia: "Girona", comarca: "Garrotxa"},
    {municipi: "Sant Joan Despí", poblacio: "33.873", provincia: "Barcelona", comarca: "Baix Llobregat"},
    {municipi: "Tortosa", poblacio: "33.445", provincia: "Tarragona", comarca: "Baix Ebre"},
    {municipi: "Barberà del Vallès", poblacio: "32.860", provincia: "Barcelona", comarca: "Vallès Occidental"},
    {municipi: "Cambrils", poblacio: "32.855", provincia: "Tarragona", comarca: "Baix Camp"},
    {municipi: "Sant Pere de Ribes", poblacio: "30.142", provincia: "Barcelona", comarca: "Garraf"},
    {municipi: "Salt", poblacio: "29.836", provincia: "Girona", comarca: "Gironès"},
    {municipi: "Sitges", poblacio: "28.527", provincia: "Barcelona", comarca: "Garraf"},
    {municipi: "Premià de Mar", poblacio: "28.049", provincia: "Barcelona", comarca: "Maresme"},
    {municipi: "Sant Vicenç dels Horts", poblacio: "27.982", provincia: "Barcelona", comarca: "Baix Llobregat"},
    {municipi: "Martorell", poblacio: "27.681", provincia: "Barcelona", comarca: "Baix Llobregat"},
    {municipi: "Sant Andreu de la Barca", poblacio: "27.303", provincia: "Barcelona", comarca: "Baix Llobregat"},
    {municipi: "Pineda de Mar", poblacio: "26.349", provincia: "Barcelona", comarca: "Maresme"},
    {municipi: "Salou", poblacio: "26.233", provincia: "Tarragona", comarca: "Tarragonès"},
    {municipi: "Santa Perpètua de Mogoda", poblacio: "25.574", provincia: "Barcelona", comarca: "Vallès Occidental"},
    {municipi: "Molins de Rei", poblacio: "25.492", provincia: "Barcelona", comarca: "Baix Llobregat"},
    {municipi: "Calafell", poblacio: "24.898", provincia: "Tarragona", comarca: "Baix Penedès"},
    {municipi: "Valls", poblacio: "24.112", provincia: "Tarragona", comarca: "Alt Camp"},
    {municipi: "Castellar del Vallès", poblacio: "23.776", provincia: "Barcelona", comarca: "Vallès Occidental"},
    {municipi: "Olesa de Montserrat", poblacio: "23.552", provincia: "Barcelona", comarca: "Baix Llobregat"},
    {municipi: "El Masnou", poblacio: "23.288", provincia: "Barcelona", comarca: "Maresme"},
    {municipi: "Palafrugell", poblacio: "22.725", provincia: "Girona", comarca: "Baix Empordà"},
    {municipi: "Vila-seca", poblacio: "21.993", provincia: "Tarragona", comarca: "Tarragonès"},
    {municipi: "Esparreguera", poblacio: "21.889", provincia: "Barcelona", comarca: "Baix Llobregat"},
    {municipi: "Sant Feliu de Guíxols", poblacio: "21.721", provincia: "Girona", comarca: "Baix Empordà"},
    {municipi: "Vilassar de Mar", poblacio: "20.636", provincia: "Barcelona", comarca: "Maresme"},
    {municipi: "Amposta", poblacio: "20.572", provincia: "Tarragona", comarca: "Montsià"},
    {municipi: "Manlleu", poblacio: "20.007", provincia: "Barcelona", comarca: "Osona"}
    ];

    function Ciutats(){
    
        const [ciutats, setCiutats] = useState(CIUTATS_CAT_20K);
        const [inputValue, setInputValue] = useState('');

        function manejarCambioBusqueda(event){
            const valor = event.target.value;
            setInputValue(valor);
            const ciudadesFiltradas = CIUTATS_CAT_20K.filter(ciudad => 
                ciudad.municipi.toLowerCase().includes(valor.toLowerCase())
            );
            setCiutats(ciudadesFiltradas);
        };
        function ordenarPoblacio() {
               const ordenades =  [...ciutats].sort((a,b) => {
                const poblacioA = parseInt(a.poblacio.replace(/\./g, ""));
                const poblacioB = parseInt(b.poblacio.replace(/\./g, ""));
                    return poblacioB - poblacioA;
                });
                setCiutats(ordenades);
        }

        function ordernarGirona(){
            const girona = [...ciutats].filter(el => el.provincia === "Girona");
            setCiutats(girona);
        }

        
        return (
            <>
            <table>
            <tr>
                    <button onClick={ordenarPoblacio}>Ordena per poblacio</button>
                    <button onClick={ordernarGirona}>Ciutats de Girona</button>
                </tr>
                <tr>
                    <th>Municipi</th>
                    <th>Població</th>
                    <th>Provincia</th>
                    <tr>
                    <input type="text" value={inputValue} onChange={manejarCambioBusqueda}/>
                        <tr>
                        </tr>
                    </tr>
                </tr>
                    {
                    ciutats.map(el => {
                        return <tr><td>{el.municipi}</td><td>{el.poblacio}</td>
                            <td>{el.provincia}</td></tr>
                    })
                    }
            </table>
                
            </>
        )
    }
    
    export default Ciutats;
    
    