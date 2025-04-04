function Bienvenido({ user, setUser }) {
    const cerrarSesion = () => {
      setUser([])
    }
  
    return (
      <>
      <div id="noticias"><a href="noticiasmas.html">Noticias</a></div>
      <div id="notificaciones"><a href="notificaciones.html">Notificaciones</a></div>
     
        <h1>Portal Los Robles</h1>
        <h2>Bienvenido {user}</h2>
        <button onClick={cerrarSesion}>Cerrar Sesión</button>
        
      </>
    )
  }
  
  export default Bienvenido;