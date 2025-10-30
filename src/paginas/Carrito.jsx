import { Link } from 'react-router-dom'
import { useCarrito } from '../contextos/CarritoContexto.jsx'

export default function Carrito(){
  const { items, total, sumar, restar, quitar, actualizar } = useCarrito()
  return (
    <div className="row g-4">
      <div className="col-12 d-flex justify-content-between align-items-center">
        <h2>Carrito</h2>
        <div className="d-flex gap-2">
          <Link className="btn btn-outline-primary" to="/productos">Seguir comprando</Link>
          <Link className="btn btn-success" to="/checkout">Ir a Checkout</Link>
        </div>
      </div>
      <div className="col-lg-8">
        {items.length===0 ? (
          <div className="card p-4">
            <div className="text-muted">Tu carrito está vacío.</div>
          </div>
        ) : (
          <ul className="list-group">
            {items.map(it=> (
              <li key={it.codigo} className="list-group-item d-flex justify-content-between align-items-center gap-2">
                <div className="d-flex align-items-center gap-3 flex-grow-1">
                  <img src={`/img/${it.codigo}.jpg`} onError={(e)=>{e.currentTarget.src='/img/producto.svg'}} alt={it.nombre} style={{width:56,height:56,objectFit:'contain',background:'#0e0e0e',border:'1px solid #242424',borderRadius:8}} />
                  <div>
                    <strong>{it.nombre}</strong>
                    <div className="small text-muted">${(it.precio).toLocaleString('es-CL')} c/u</div>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <button type="button" className="btn btn-outline-secondary btn-sm" onClick={()=>restar(it.codigo)}>-</button>
                  <input type="number" min="1" className="form-control form-control-sm qty-input" value={it.qty} onChange={e=>{
                    const n = Number(e.target.value); if(Number.isFinite(n)) actualizar(it.codigo, n)
                  }} style={{width:64}} />
                  <button type="button" className="btn btn-outline-primary btn-sm" onClick={()=>sumar(it.codigo)}>+</button>
                </div>
                <div className="text-end" style={{minWidth:120}}>
                  <div>${(it.precio*it.qty).toLocaleString('es-CL')}</div>
                  <button type="button" className="btn btn-sm btn-danger mt-1" onClick={()=>quitar(it.codigo)}>Eliminar</button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="col-lg-4">
        <div className="card p-4">
          <div className="d-flex justify-content-between mb-2">
            <span>Total</span>
            <strong>${total.toLocaleString('es-CL')}</strong>
          </div>
          <Link className="btn btn-success w-100" to="/checkout" disabled={items.length===0}>Ir a Checkout</Link>
        </div>
      </div>
    </div>
  )
}
