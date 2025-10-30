import { Link } from 'react-router-dom'
import { obtenerProductos } from '../datos/store.js'

export default function Categorias(){
  const cats = Array.from(new Set(obtenerProductos().map(p=>p.categoria)))
  return (
    <div>
      <h2>Categorías</h2>
      <div className="d-flex flex-wrap gap-2">
        {cats.map(c=>(
          <Link key={c} className="badge text-bg-primary text-decoration-none p-3" to={`/productos?categoria=${encodeURIComponent(c)}`}>{c}</Link>
        ))}
      </div>
    </div>
  )
}