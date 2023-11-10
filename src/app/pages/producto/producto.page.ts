import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CATEGORIAS } from 'src/app/core/constants/constants/categorias';
import { Producto } from 'src/app/core/constants/interfaces/productos';
import { CarritoService } from 'src/app/core/service/carrito.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.page.html',
  styleUrls: ['./producto.page.scss'],
})
export class ProductoPage implements OnInit {
  router = inject(Router)

  constructor(private activatedRoute : ActivatedRoute,
    private carritoService: CarritoService) {
    activatedRoute.params.subscribe(params =>{
      console.log(params)
      CATEGORIAS.forEach(categoria => {
       const productosEncontrado = categoria.productos.find(productos => productos.id == params['id']);
       if(productosEncontrado){
        this.producto = productosEncontrado
       }
      })
    })
   }

  ngOnInit() {
  }
producto:Producto ={
  id: 0,
  nombre: '',
  precio: 0,
  imagen: '',
  ingredientes: []
}
cantidad=1;
onAgregarAlCarritoClick(){
  console.log('clickeado')
  this.carritoService.agregarProducto(this.producto,this.cantidad);
  console.log(this.carritoService.agregarProducto)
  this.router.navigate(['tabs/tab1'])
}


}
