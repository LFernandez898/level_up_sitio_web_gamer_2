const LS_PRODUCTOS = 'levelup.productos';

const productosIniciales = [
  {
    "codigo": "JM001",
    "categoria": "Juegos de Mesa",
    "nombre": "Catan",
    "precio": 29990,
    "img": "img/catan.jpg"
  },
  {
    "codigo": "JM002",
    "categoria": "Juegos de Mesa",
    "nombre": "Carcassonne",
    "precio": 24990,
    "img": "img/carcassonne.jpg"
  },
  {
    "codigo": "AC001",
    "categoria": "Accesorios",
    "nombre": "Control Xbox Series X",
    "precio": 59990,
    "img": "img/control_xbox.jpg"
  },
  {
    "codigo": "AC002",
    "categoria": "Accesorios",
    "nombre": "HyperX Cloud II",
    "precio": 79990,
    "img": "img/hyperx_cloud_2.jpg"
  },
  {
    "codigo": "CO001",
    "categoria": "Consolas",
    "nombre": "PlayStation 5",
    "precio": 549990,
    "img": "img/ps5.jpg"
  },
  {
    "codigo": "CG001",
    "categoria": "Computadores Gamers",
    "nombre": "PC ASUS ROG Strix",
    "precio": 1299990,
    "img": "img/asus_rog_strix.png"
  },
  {
    "codigo": "SG001",
    "categoria": "Sillas Gamers",
    "nombre": "Secretlab Titan",
    "precio": 349990,
    "img": "img/secretlab_titan.jpg"
  },
  {
    "codigo": "MS001",
    "categoria": "Mouse",
    "nombre": "Logitech G502 HERO",
    "precio": 49990,
    "img": "img/logitech_g502.jpg"
  },
  {
    "codigo": "MP001",
    "categoria": "Mousepad",
    "nombre": "Razer Goliathus",
    "precio": 29990,
    "img": "img/razer_goliathus.jpg"
  },
  {
    "codigo": "PP001",
    "categoria": "Poleras Personalizadas",
    "nombre": "Polera 'Level-Up'",
    "precio": 14990,
    "img": "img/polera_level_up.jpg"
  }
];

function leer(clave, fallback){
  try{ const raw = localStorage.getItem(clave); return raw ? JSON.parse(raw) : fallback }catch(e){ return fallback }
}
function escribir(clave, valor){ localStorage.setItem(clave, JSON.stringify(valor)) }

export function obtenerProductos(){ return leer(LS_PRODUCTOS, productosIniciales) }
export function fijarProductos(arr){ escribir(LS_PRODUCTOS, arr) }