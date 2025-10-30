import { useParams, Link } from 'react-router-dom'
import { obtenerProductos } from '../datos/store.js'
import { useCarrito } from '../contextos/CarritoContexto.jsx'

export default function DetalleProducto(){
  const { codigo } = useParams()
  const producto = obtenerProductos().find(p=>p.codigo===codigo)
  const { agregar } = useCarrito()
  if(!producto) return <p>Producto no encontrado</p>
  return (
    <div className="row g-4">
      <div className="col-md-6">
        <img
          className="product-img-detail img-fluid"
          src={ producto.img ? `/${String(producto.img).replace(/^\/+/, '')}` : `/img/${producto.codigo}.jpg` }
          onError={(e)=>{
            const img = e.currentTarget; const src = img.getAttribute('src')||'';
            const codeJpg = `/img/${producto.codigo}.jpg`;
            const codePng = `/img/${producto.codigo}.png`;
            if(src !== codeJpg && src !== codePng){ img.src = codeJpg; return }
            if(src === codeJpg){ img.src = codePng; return }
            img.onerror = null; img.src = '/img/producto.svg';
          }}
          alt={producto.nombre}
        />
      </div>
      <div className="col-md-6">
        <h2>{producto.nombre}</h2>
        <p className="text-muted">{producto.categoria}</p>
        <p className="fs-4 fw-bold">${(producto.precio||0).toLocaleString('es-CL')}</p>
        <div className="d-flex gap-2">
          <button className="btn btn-primary" onClick={()=>agregar(producto)}>Agregar al carrito</button>
          <Link to="/productos" className="btn btn-outline-secondary">Volver</Link>
        </div>
      </div>
    </div>
  )
}