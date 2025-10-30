import { Link, NavLink } from 'react-router-dom'
import { useCarrito } from '../contextos/CarritoContexto.jsx'

export default function Encabezado(){
  const { count } = useCarrito()
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container">
        <Link className="navbar-brand fw-semibold" to="/">Level Up</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="nav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item"><NavLink className="nav-link" to="/productos">Productos</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/categorias">Categorías</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/ofertas">Ofertas</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/blogs">Blog</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/contacto">Contacto</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/nosotros">Nosotros</NavLink></li>
          </ul>
          <div className="d-flex gap-2 align-items-center">
            <NavLink className="btn btn-warning btn-sm position-relative" to="/carrito">
              Carrito
              {count>0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark text-light border border-success">
                  {count}
                </span>
              )}
            </NavLink>
            <NavLink className="btn btn-outline-primary btn-sm" to="/iniciar-sesion">Iniciar sesión</NavLink>
            <NavLink className="btn btn-outline-primary btn-sm" to="/crear-sesion">Crear cuenta</NavLink>
          </div>
        </div>
      </div>
    </nav>
  )
}