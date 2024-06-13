import React, { useState, useEffect } from "react";

function Password({ secret }) {
    const [valors, setValors] = useState(secret.map(() => 0));

    useEffect(() => {
        setValors(secret.map(() => 0));
    }, [secret]);

    function arrays_iguales(a, b){
        if (a.length !== b.length) return false;
        for (let i = 0; i < a.length; i++) {
            if (a[i] !== b[i]) return false;
        }
        return true;
    }

    const updateValue = (index) => {
        setValors((prevValors) =>
            prevValors.map((value, i) => (i === index ? (value + 1) % 2 : value))
        );
    };

    let mensaje_a_mostrar = '---';
    if (arrays_iguales(valors, secret)){
        mensaje_a_mostrar = "ADELANTE!";
    }

    return (
        <div className="password">
            {valors.map((value, index) => (
                <button
                    key={index}
                    style={{
                        backgroundColor: value === 1 ? 'green' : 'red',
                        borderRadius: '30px',
                        height: '50px',
                        width: '50px',
                        margin: '5px'
                    }}
                    onClick={() => updateValue(index)}
                ></button>
            ))}
            <div className="missatge">
                {mensaje_a_mostrar}
            </div>
        </div>
    );
}

export default Password;