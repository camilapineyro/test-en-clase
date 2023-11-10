import { Producto } from "./productos"

export interface categorias{
    nombre:string
    id:number
    imgUrl:string
    productos: Producto[]
}