import { useState, useEffect } from "react";
import "./Login.css";

function Login({nom,contra}){

    const [userName, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [login, setLogin] = useState("");

    function comprobarLogin(){
        if(userName === nom && password === contra){
            setLogin("ENDAVANT");
        }else{
            setLogin("STOP");
        }
    }

    return(
        <>
            <div class="container">
        <div class="login-form">
            <h2>Login</h2>
            <div class="form-group">
                <label for="login">Login</label>
                <input type="text" id="login" value={userName} onChange={(e) => setUsername(e.target.value)} name="login" required/>
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} name="password" required/>
            </div>
            <div class="form-group">
            </div>
            <button onClick={comprobarLogin}>Submit</button>
            <p>{login}</p>
</div>
    </div>
        </>
    )
}

export default Login;