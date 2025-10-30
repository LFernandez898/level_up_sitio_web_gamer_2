import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCarrito } from '../contextos/CarritoContexto.jsx'

export default function Checkout(){
  const { items, total, limpiar, sumar, restar, quitar, actualizar } = useCarrito()
  const nav = useNavigate()
  const [form, setForm] = useState({ nombre:'', email:'', direccion:'', comuna:'', region:'' })
  const handle = e => setForm({ ...form, [e.target.name]: e.target.value })

  const pagar = (e)=>{
    e.preventDefault()
    if(items.length===0) return alert('El carrito está vacío')
    const ok = Math.random() > 0.2
    if(ok){ limpiar(); nav('/checkout/exito', { replace:true }) }
    else{ nav('/checkout/error', { replace:true }) }
  }

  return (
    <div className="row g-4">
      <div className="col-md-7">
        <h2>Checkout</h2>
        <form className="row g-3" onSubmit={pagar}>
          <div className="col-md-6">
            <label className="form-label">Nombre</label>
            <input name="nombre" className="form-control" required value={form.nombre} onChange={handle} />
          </div>
          <div className="col-md-6">
            <label className="form-label">Email</label>
            <input name="email" type="email" className="form-control" required value={form.email} onChange={handle} />
          </div>
          <div className="col-12">
            <label className="form-label">Dirección</label>
            <input name="direccion" className="form-control" required value={form.direccion} onChange={handle} />
          </div>
          <div className="col-md-6">
            <label className="form-label">Comuna</label>
            <input name="comuna" className="form-control" required value={form.comuna} onChange={handle} />
          </div>
          <div className="col-md-6">
            <label className="form-label">Región</label>
            <input name="region" className="form-control" required value={form.region} onChange={handle} />
          </div>
          <div className="col-12 d-flex justify-content-end">
            <button className="btn btn-success">Pagar ${total.toLocaleString('es-CL')}</button>
          </div>
        </form>
      </div>
      <div className="col-md-5">
        <h3>Resumen</h3>
        {items.length===0 ? (
          <div className="card p-3 mb-3">
            <div className="text-muted">Tu carrito está vacío.</div>
          </div>
        ) : (
          <ul className="list-group mb-3">
            {items.map(it=>(
              <li key={it.codigo} className="list-group-item d-flex justify-content-between align-items-center gap-2">
                <div className="flex-grow-1">
                  <strong>{it.nombre}</strong>
                  <div className="small text-muted">${(it.precio).toLocaleString('es-CL')} c/u</div>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <button type="button" className="btn btn-outline-secondary btn-sm" onClick={()=>restar(it.codigo)}>-</button>
                  <input
                    type="number"
                    min="1"
                    className="form-control form-control-sm qty-input"
                    value={it.qty}
                    onChange={e=>{
                      const n = Number(e.target.value)
                      if(Number.isFinite(n)) actualizar(it.codigo, n)
                    }}
                    style={{width:64}}
                  />
                  <button type="button" className="btn btn-outline-primary btn-sm" onClick={()=>sumar(it.codigo)}>+</button>
                </div>
                <div className="text-end" style={{minWidth:100}}>
                  <div>${(it.precio*it.qty).toLocaleString('es-CL')}</div>
                  <button type="button" className="btn btn-sm btn-danger mt-1" onClick={()=>quitar(it.codigo)}>Eliminar</button>
                </div>
              </li>
            ))}
          </ul>
        )}
        <div className="d-flex justify-content-between">
          <span>Total</span>
          <strong>${total.toLocaleString('es-CL')}</strong>
        </div>
      </div>
    </div>
  )
}