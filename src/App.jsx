import { Routes, Route } from 'react-router-dom'
import Encabezado from './componentes/Encabezado.jsx'
import Pie from './componentes/Pie.jsx'
import Inicio from './paginas/Inicio.jsx'
import Productos from './paginas/Productos.jsx'
import DetalleProducto from './paginas/DetalleProducto.jsx'
import Categorias from './paginas/Categorias.jsx'
import Ofertas from './paginas/Ofertas.jsx'
import Checkout from './paginas/Checkout.jsx'
import Exito from './paginas/Exito.jsx'
import ErrorPago from './paginas/ErrorPago.jsx'
import Admin from './paginas/Admin.jsx'
import Blog from './paginas/Blog.jsx'
import Blog1 from './paginas/Blog1.jsx'
import Blog2 from './paginas/Blog2.jsx'
import Contacto from './paginas/Contacto.jsx'
import Carrito from './paginas/Carrito.jsx'
import Nosotros from './paginas/Nosotros.jsx'
import IniciarSesion from './paginas/IniciarSesion.jsx'
import CrearSesion from './paginas/CrearSesion.jsx'

import { CarritoProveedor } from './contextos/CarritoContexto.jsx'

export default function App(){
  return (
    <CarritoProveedor>
      <div className="d-flex flex-column min-vh-100">
        <Encabezado />
        <main className="flex-grow-1 container py-4">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/productos" element={<Productos />} />
            <Route path="/productos/:codigo" element={<DetalleProducto />} />
            <Route path="/categorias" element={<Categorias />} />
            <Route path="/ofertas" element={<Ofertas />} />
            <Route path="/carrito" element={<Carrito />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/checkout/exito" element={<Exito />} />
            <Route path="/checkout/error" element={<ErrorPago />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/iniciar-sesion" element={<IniciarSesion />} />
            <Route path="/crear-sesion" element={<CrearSesion />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/blogs" element={<Blog />} />
            <Route path="/blog1" element={<Blog1 />} />
            <Route path="/blog2" element={<Blog2 />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </main>
        <Pie />
      </div>
    </CarritoProveedor>
  )
}