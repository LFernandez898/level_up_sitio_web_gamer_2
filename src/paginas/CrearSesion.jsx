import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

export default function CrearSesion(){
  const [form, setForm] = useState({ nombre:'', email:'', password:'', confirm:'' })
  const nav = useNavigate()
  const handle = e=> setForm({ ...form, [e.target.name]: e.target.value })
  const enviar = e=>{
    e.preventDefault()
    if(!form.nombre || !form.email || !form.password){ alert('Completa tus datos'); return }
    if(form.password !== form.confirm){ alert('Las contraseñas no coinciden'); return }
    localStorage.setItem('levelup.auth', JSON.stringify({ email: form.email, nombre: form.nombre, logged:true }))
    alert('Cuenta creada (simulada). Sesión iniciada.')
    nav('/', { replace:true })
  }
  return (
    <div className="row g-4">
      <div className="col-12"><h2>Crear cuenta</h2></div>
      <div className="col-md-6">
        <form className="card p-4" onSubmit={enviar}>
          <div className="mb-3">
            <label className="form-label">Nombre</label>
            <input name="nombre" className="form-control" value={form.nombre} onChange={handle} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input name="email" type="email" className="form-control" value={form.email} onChange={handle} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Contraseña</label>
            <input name="password" type="password" className="form-control" value={form.password} onChange={handle} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Confirmar contraseña</label>
            <input name="confirm" type="password" className="form-control" value={form.confirm} onChange={handle} required />
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <button className="btn btn-primary" type="submit">Crear cuenta</button>
            <small className="text-muted">¿Ya tienes cuenta? <Link to="/iniciar-sesion">Iniciar sesión</Link></small>
          </div>
        </form>
      </div>
    </div>
  )
}
