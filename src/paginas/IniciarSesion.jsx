import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

export default function IniciarSesion(){
  const [form, setForm] = useState({ email:'', password:'' })
  const nav = useNavigate()
  const handle = e=> setForm({ ...form, [e.target.name]: e.target.value })
  const enviar = e=>{
    e.preventDefault()
    if(!form.email || !form.password){ alert('Completa tus datos'); return }
    localStorage.setItem('levelup.auth', JSON.stringify({ email: form.email, logged:true }))
    alert('Inicio de sesión simulado (sin backend)')
    nav('/', { replace:true })
  }
  return (
    <div className="row g-4">
      <div className="col-12"><h2>Iniciar sesión</h2></div>
      <div className="col-md-6">
        <form className="card p-4" onSubmit={enviar}>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input name="email" type="email" className="form-control" value={form.email} onChange={handle} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Contraseña</label>
            <input name="password" type="password" className="form-control" value={form.password} onChange={handle} required />
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <button className="btn btn-primary" type="submit">Ingresar</button>
            <small className="text-muted">¿No tienes cuenta? <Link to="/crear-sesion">Crear cuenta</Link></small>
          </div>
        </form>
      </div>
    </div>
  )
}
