import TarjetaProducto from '../componentes/TarjetaProducto.jsx'
import { obtenerProductos } from '../datos/store.js'
import { useCarrito } from '../contextos/CarritoContexto.jsx'

export default function Ofertas(){
  const { agregar } = useCarrito()
  const lista = obtenerProductos().filter(p=> (p.oferta===true) || (Number(p.precio)||0) <= 50000)
  return (
    <div>
      <h2>Ofertas</h2>
      <div className="row g-3">
        {lista.map(p=> (
          <div className="col-sm-6 col-md-4 col-lg-3" key={p.codigo}>
            <TarjetaProducto producto={p} onAdd={agregar} />
          </div>
        ))}
        {lista.length===0 && <p className="text-muted">No hay ofertas disponibles.</p>}
      </div>
    </div>
  )
}