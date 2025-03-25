function Bienvenido({ user, setUser }) {
    const cerrarSesion = () => {
      setUser([])
    }
  
    return (
      <>
        <h1>Portal Los Robles</h1>
        <h2>Bienvenido {user}</h2>
        <button onClick={cerrarSesion}>Cerrar Sesión</button>
  
      </>
    )
  }
  
  export default Bienvenido;