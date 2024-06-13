import { useState, useEffect } from "react";

const urlApi = "https://pokeapi.co/api/v2/pokemon/";


function Poke() {

    const [llista, setllista] = useState([]);

    useEffect(() => {
        async function consulta() {
            let resposta = await fetch(urlApi);
            let json = await resposta.json();
            setllista(json.results);
        }

        consulta();
    }, []);

    return (
        <>
            {
                llista.map(el => {
                    return <li key={el.name}>{el.name}</li>
                })
            }
        </>
    )
}

export default Poke;