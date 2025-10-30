import { Link } from 'react-router-dom'

export default function Inicio(){
  return (
    <div className="hero">
      <div className="container">
        <div className="row align-items-center gy-4">
          <div className="col-lg-6">
            <div className="hero-panel p-4 p-lg-5">
              <div className="mb-2 text-uppercase small" style={{letterSpacing:'.08em', color:'var(--neon)'}}>Level-Up Gamer</div>
              <h1 className="hero-title mb-2">Bienvenido a Level Up</h1>
              <p className="lead mb-4">Tu tienda gamer</p>
              <div className="d-grid d-sm-inline-flex gap-3">
                <Link className="btn btn-primary btn-lg" to="/productos">Ver Productos</Link>
                <Link className="btn btn-outline-secondary btn-lg" to="/ofertas">Ofertas</Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6 text-center">
            <img src="/img/logo.jpg" alt="Level Up" style={{ maxHeight: '240px' }} />
            <h2 className="mt-3 tagline">¡Desafía tus límites con Level-Up Gamer!</h2>
          </div>
        </div>
      </div>
    </div>
  )
}