import "./Portada.css"
import { useNavigate } from "react-router-dom"


const Portada = () => {
  const navegacion=useNavigate();
    return (
    <>
    <div className="main">
      <div className="imagen">
        <img src={require(`../assets/logo.png`)} alt=""/>
      </div>
      
      <button className="boton" onClick={()=>navegacion("/juego")}>JUGAR</button>
    </div>
    </>
  )
}

export default Portada
