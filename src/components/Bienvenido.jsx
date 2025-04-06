function Bienvenido({ user, setUser }) {
    const cerrarSesion = () => {
      setUser([])
    }
  
    return (
      <>
      
      <nav className="navbar">
                <a id="noticias" href="noticiasmas.html">Noticias</a>
                <a id="notificaciones" href="notificaciones.html">Notificaciones</a>
                <a id="pagos" href="paypal.html">Cuotas</a>
            </nav>
     
        <h1>Portal Los Robles</h1>
        <h2>Bienvenido {user}</h2>
        <button onClick={cerrarSesion}>Cerrar Sesión</button>
        
      </>
    )
  }
  
  export default Bienvenido;