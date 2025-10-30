import { createContext, useContext, useEffect, useState } from 'react'
const CarritoContexto = createContext()

export function CarritoProveedor({ children }){
  const [items, setItems] = useState(()=>{
    const raw = localStorage.getItem('levelup.carrito')
    return raw ? JSON.parse(raw) : []
  })
  useEffect(()=>{
    localStorage.setItem('levelup.carrito', JSON.stringify(items))
  }, [items])

  const agregar = (producto)=>{
    setItems(prev=>{
      const i = prev.findIndex(p=>p.codigo===producto.codigo)
      if(i>=0){
        const copy = [...prev]; copy[i] = { ...copy[i], qty: copy[i].qty + 1 }; return copy
      }
      return [...prev, { ...producto, qty: 1 }]
    })
  }
  const quitar = (codigo)=> setItems(prev=> prev.filter(p=>p.codigo!==codigo))
  const limpiar = ()=> setItems([])
  const total = items.reduce((acc, it)=> acc + (it.precio||0)*it.qty, 0)
  const count = items.reduce((acc, it)=> acc + (it.qty||0), 0)

  const actualizar = (codigo, qty)=>{
    setItems(prev=>{
      if(qty<=0) return prev.filter(p=>p.codigo!==codigo)
      const i = prev.findIndex(p=>p.codigo===codigo)
      if(i<0) return prev
      const copy = [...prev]
      copy[i] = { ...copy[i], qty }
      return copy
    })
  }
  const sumar = (codigo)=>{
    setItems(prev=>{
      const i = prev.findIndex(p=>p.codigo===codigo)
      if(i<0) return prev
      const copy = [...prev]
      copy[i] = { ...copy[i], qty: copy[i].qty + 1 }
      return copy
    })
  }
  const restar = (codigo)=>{
    setItems(prev=>{
      const i = prev.findIndex(p=>p.codigo===codigo)
      if(i<0) return prev
      const nextQty = prev[i].qty - 1
      if(nextQty<=0) return prev.filter(p=>p.codigo!==codigo)
      const copy = [...prev]
      copy[i] = { ...copy[i], qty: nextQty }
      return copy
    })
  }

  return <CarritoContexto.Provider value={{ items, agregar, quitar, limpiar, total, count, actualizar, sumar, restar }}>{children}</CarritoContexto.Provider>
}
export const useCarrito = ()=> useContext(CarritoContexto)