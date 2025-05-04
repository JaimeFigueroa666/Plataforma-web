import { useState } from "react";
import './Login.css'
// crear una base de datos ficcticio
const users = [
  { username: 'admin', password: '123' },
  { username: 'user', password: '123' },
  { username: 'jaime figueroa herrera', password: '123' }
]

function Login({ setUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // enviar y validar datos 
  const validandoDatos = (e) => {
    e.preventDefault();
    // evalua datos 
    if (username === "" || password === "") {
      setError(true);
      setErrorMessage("Todos los campos son obligatorios");
      return;
    }

    // busca usuario en la base de datos
    const user = users.find(
      (u) => u.username === username && u.password === password
    );
    // si el usuario existe, lo establece como usuario activo
    if (user) {
      setError(false);
      setUser(username)
    }
    // si el usuario no existe, muestra mensaje de error
    else {
      setError(true);
      setErrorMessage("Nombre de usuario o contraseña incorrectos");
    }
    // limpia los campos
    setUsername("");
    setPassword("");

  };

  return (
    <>
       <div className="container">
          <h1>Iniciar Sesión</h1>
          <h2>Residentes</h2>
          <form action="" onSubmit={validandoDatos}>
            <input className="input"
              type="text"
              placeholder="Nombre de Usuario"
              value={username}
              onChange={(x) => setUsername(x.target.value)}
              name="username"
            />
            <input className="input"
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(x) => setPassword(x.target.value)}
              name="password"
            />
            <button type="submit">Iniciar Sesión</button>
          </form>
        </div>
        {error && <p>{errorMessage}</p>}
      
    </>
  )
}

export default Login;