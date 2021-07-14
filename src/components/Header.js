import React, { useState , useEffect } from 'react'
import { useHistory } from 'react-router-dom'


const loginBtn = { name: "Connexion" , route: "/login" }

const logoutBtn = { name: "Se deconnecter" , route: "/"}



const Header = props => {
    let history = useHistory();
    const [log, setLog] = useState(loginBtn)


    useEffect(() => {
        // Je met à jour le header
        login()
    })

    const logout = () => {
        // Je set le log en "Connexion"
        setLog(loginBtn)
        // Je supprime le token, l'utilisateur va devoir se reconnecter
        localStorage.removeItem("JWT")
        // Je redirige à l'acceuil
        history.push('/')
    }

    const login = () => {
        // Si le Token est présent : je set le log en "Déconnexion"
        (localStorage.getItem("JWT")) && setLog(logoutBtn)
    }

    const connexion = () => {
        // Si j'ai un token : je souhaite me déconnecter
        if(localStorage.getItem("JWT")){
            logout()
        }else{
            // J'en ai pas : je souhaite me connecter
            history.push('/login')
        }
    }


    return (
        <nav>
            <ul>
                <li onClick={connexion}>{log.name}</li>
                {/* <li>Inscription</li> */}
                
                <li>Panier</li>
            </ul>
        </nav>
    )
}

export default Header
