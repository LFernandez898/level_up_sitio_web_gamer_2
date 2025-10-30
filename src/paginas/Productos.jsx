import { useMemo, useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import TarjetaProducto from '../componentes/TarjetaProducto.jsx'
import { obtenerProductos } from '../datos/store.js'
import { useCarrito } from '../contextos/CarritoContexto.jsx'

export default function Productos(){
  const [searchParams] = useSearchParams()
  const [q, setQ] = useState('')
  const [categoria, setCategoria] = useState('')
  useEffect(()=>{ const cat = searchParams.get('categoria'); if(cat) setCategoria(cat) }, [searchParams])
  const { agregar } = useCarrito()
  const productos = obtenerProductos()

  const categorias = useMemo(()=> Array.from(new Set(productos.map(p=>p.categoria))), [productos])
  const lista = productos.filter(p=>{
    const matchQ = p.nombre.toLowerCase().includes(q.toLowerCase())
    const matchC = categoria ? p.categoria===categoria : true
    return matchQ && matchC
  })

  return (
    <div>
      <h2>Productos</h2>
      <div className="row g-3 align-items-end mb-3">
        <div className="col-md-6">
          <label className="form-label">Buscar</label>
          <input className="form-control" placeholder="Nombre..." value={q} onChange={e=>setQ(e.target.value)} />
        </div>
        <div className="col-md-4">
          <label className="form-label">Categoría</label>
          <select className="form-select" value={categoria} onChange={e=>setCategoria(e.target.value)}>
            <option value="">Todas</option>
            {categorias.map(c=>(<option key={c} value={c}>{c}</option>))}
          </select>
        </div>
      </div>
      <div className="row g-3">
        {lista.map(p=> (
          <div className="col-sm-6 col-md-4 col-lg-3" key={p.codigo}>
            <TarjetaProducto producto={p} onAdd={agregar} />
          </div>
        ))}
        {lista.length===0 && <p className="text-muted">Sin resultados.</p>}
      </div>
    </div>
  )
}