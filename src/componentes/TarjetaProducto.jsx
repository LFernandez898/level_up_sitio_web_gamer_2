import { Link } from 'react-router-dom'

export default function TarjetaProducto({ producto, onAdd }){
  return (
    <div className="card h-100 shadow-sm">
      <img
        src={ producto.img ? `/${String(producto.img).replace(/^\/+/, '')}` : `/img/${producto.codigo}.jpg` }
        onError={(e)=>{
          const img = e.currentTarget; const src = img.getAttribute('src')||'';
          const codeJpg = `/img/${producto.codigo}.jpg`;
          const codePng = `/img/${producto.codigo}.png`;
          if(src !== codeJpg && src !== codePng){ img.src = codeJpg; return }
          if(src === codeJpg){ img.src = codePng; return }
          img.onerror = null; img.src = '/img/producto.svg';
        }}
        className="card-img-top" alt={producto.nombre}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{producto.nombre}</h5>
        <p className="card-text text-muted mb-1">{producto.categoria}</p>
        <p className="price mb-3">${(producto.precio||0).toLocaleString('es-CL')}</p>
        <div className="mt-auto d-flex gap-2">
          <Link className="btn btn-outline-primary btn-sm" to={`/productos/${producto.codigo}`}>Ver</Link>
          {onAdd && <button className="btn btn-primary btn-sm" onClick={()=>onAdd(producto)}>Agregar</button>}
        </div>
      </div>
    </div>
  )
}