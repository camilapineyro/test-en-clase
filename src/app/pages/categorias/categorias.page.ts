import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CATEGORIAS } from 'src/app/core/constants/constants/categorias';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.page.html',
  styleUrls: ['./categorias.page.scss'],
})
export class CategoriasPage implements OnInit {

  constructor(private activatedRoute : ActivatedRoute) {
    activatedRoute.params.subscribe(params => {
      console.log(params)
      if(params['id']){
       const categoriaEncontrada = CATEGORIAS.find(categoria => categoria.id == params['id']);
       if(categoriaEncontrada){
        this.categoriaActual = categoriaEncontrada;
       }
      }



    })
   }

  ngOnInit() {
  }
  categoriaActual = CATEGORIAS[0];
}
