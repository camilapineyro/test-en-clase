import { Injectable } from '@angular/core';
import { Carrito } from '../constants/interfaces/carrito';
import { Producto } from '../constants/interfaces/productos';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  constructor() {
    const memoria =localStorage.getItem('carrito');
  if(memoria) {3
    this.carrito =JSON.parse(memoria);
  this.calcularTotal();
  };
   }
   carrito: Carrito[] = []
   totalCarrito: number = 0;
  agregarProducto(producto:Producto, cantidad:number){

    this.carrito.push({
      producto:producto,
      cantidad: cantidad
    }) 
    this.actualizarLocalStorage();
    this.calcularTotal();

  }
  eliminarProducto(id:number){
    this.carrito = this.carrito.filter(item => item.producto.id);
    this.actualizarLocalStorage();
    this.calcularTotal();
  }
  limpiarCarrito(){
    this.carrito =[];
    this.actualizarLocalStorage();
    
  }
  actualizarLocalStorage(){
    localStorage.setItem('carrito',JSON.stringify(this.carrito))
  }
  getTotal(){
    
  }
  calcularTotal(){
    this.totalCarrito = 0;
    this.carrito.forEach(item => {
      this.totalCarrito = this.totalCarrito + item.producto.precio * item.cantidad;
    })
  }
  generarMensaje(){
    const primeraParte = "https://wa.me/+5493406642197?text=";
    let parteProductos = ''
    this.carrito.forEach(itemCarrito =>
      parteProductos += `* ${itemCarrito.producto.nombre} - ${itemCarrito.cantidad}`)
  
  
    const ultimaParte = `Se realizo el siguiente pedido:
    Productos:
    ${parteProductos}
    Total: ${this.totalCarrito}
    Direccion de envio: direccion de ejemplo`;
  
    return encodeURI(primeraParte+ultimaParte);
  
  
  }
}
