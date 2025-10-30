import { useMemo, useState } from 'react'
import { obtenerProductos, fijarProductos } from '../datos/store.js'

export default function Admin(){
  const [q, setQ] = useState('')
  const [nuevo, setNuevo] = useState({ codigo:'', nombre:'', categoria:'', precio:0, img:'' })
  const [tick, setTick] = useState(0)
  const productos = useMemo(()=> obtenerProductos(), [tick])

  const filtrados = productos.filter(p=> p.nombre.toLowerCase().includes(q.toLowerCase()))

  const agregar = (e)=>{
    e.preventDefault()
    const list = obtenerProductos()
    if(list.some(p=>p.codigo===nuevo.codigo)){ alert('Código duplicado'); return }
    list.push({ ...nuevo, img:`img/${nuevo.codigo}.jpg`, precio:Number(nuevo.precio) || 0 })
    fijarProductos(list); setNuevo({ codigo:'', nombre:'', categoria:'', precio:0, img:'' }); setTick(x=>x+1)
  }

  const eliminar = (codigo)=>{
    const list = obtenerProductos().filter(p=>p.codigo!==codigo)
    fijarProductos(list); setTick(x=>x+1)
  }

  return (
    <div>
      <h2>Admin de Productos</h2>
      <form className="row g-3" onSubmit={agregar}>
        <div className="col-md-3"><input className="form-control" placeholder="Código" value={nuevo.codigo} onChange={e=>setNuevo(s=>({...s,codigo:e.target.value}))} required /></div>
        <div className="col-md-3"><input className="form-control" placeholder="Nombre" value={nuevo.nombre} onChange={e=>setNuevo(s=>({...s,nombre:e.target.value}))} required /></div>
        <div className="col-md-3"><input className="form-control" placeholder="Categoría" value={nuevo.categoria} onChange={e=>setNuevo(s=>({...s,categoria:e.target.value}))} required /></div>
        <div className="col-md-2"><input className="form-control" placeholder="Precio" type="number" value={nuevo.precio} onChange={e=>setNuevo(s=>({...s,precio:e.target.value}))} required /></div>
        <div className="col-md-1 d-grid"><button className="btn btn-primary">Agregar</button></div>
      </form>

      <hr className="my-4" />
      <div className="row mb-3">
        <div className="col-md-4"><input className="form-control" placeholder="Buscar..." value={q} onChange={e=>setQ(e.target.value)} /></div>
      </div>
      <div className="table-responsive bg-white rounded shadow-sm">
        <table className="table table-striped">
          <thead><tr><th>Código</th><th>Nombre</th><th>Categoría</th><th>Precio</th><th>Imagen</th><th></th></tr></thead>
          <tbody>
            {filtrados.map(p=>(
              <tr key={p.codigo}>
                <td>{p.codigo}</td><td>{p.nombre}</td><td>{p.categoria}</td>
                <td>${(p.precio||0).toLocaleString('es-CL')}</td>
                <td>{`/img/${p.codigo}.jpg`}</td>
                <td><button className="btn btn-sm btn-outline-danger" onClick={()=>eliminar(p.codigo)}>Eliminar</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}