import { categorias } from "src/app/core/constants/interfaces/categoria";

export const CATEGORIAS: categorias[] = [

     {nombre:"Hamburguesas",
      id:0, 
      imgUrl:"https://bakeitwithlove.com/wp-content/uploads/2022/01/what-to-serve-with-burgers-sq.jpg",
      productos:[{ 
        id: 1,
        nombre:'Simple',
    precio: 2500,
    imagen: "https://deananddennys.com/stage/contenidos/1612363992.jpg",
    ingredientes:["Pan", " carne", " lechuga", " tomate"]
},
       {id: 2,
        nombre:'Hamburguesa con queso',
        precio: 2800,
        imagen: "https://www.clarin.com/img/2022/05/27/0HXb0UR0v_1256x620__2.jpg",
        ingredientes:["Pan", " carne", " queso cheddar"]
      },
      { id: 3,
        nombre:'Triple bacon',
      precio: 4000,
      imagen: "https://ik.imagekit.io/smithfield/farmerjohn/3b1720e5-a9aa-0088-f165-1043ab81f774/4a8e8be6-5c83-4042-b1bd-50bb8ad3567a/Bacon-BBQ-Burger_B_Web_400x250.jpg",
      ingredientes:["Pan", " carne", " queso cheddar", " bacon"]
    },
    { id:4,
      nombre:'4 carnes 4 quesos',
    precio: 5500,
    imagen: "https://media-cdn.tripadvisor.com/media/photo-s/0f/a6/0c/e2/la-fin-del-mundo-4-carnes.jpg",
    ingredientes:["Pan", " carne", " salsa 4 quesos"]

    }
    
    
    ]
    },
      
    {nombre:"Pizzas",
     id:1,
    imgUrl:"https://cremigal.com/archivos/2022/04/CREMIGAL-10-scaled.jpg",
    productos: [{ id: 5,
      nombre: "Pizza simple",
    precio:3000,
    imagen:"https://samskitchen.com.au/wp-content/uploads/2017/07/IMG_3193.jpg",
    ingredientes:["Masa madre", " tomate", " queso", " orégano"]
},
{ id:6,
  nombre:"Pizza Pepperoni",
    precio:4000,
    imagen:"https://placeralplato.com/files/2016/01/Pizza-con-pepperoni-640x480.jpg?width=1200&enable=upscale",
    ingredientes:["Masa madre", " tomate", " queso", " pepperoni"]
},
{ id:7,
  nombre:"Pizza con pollo a la crema",
    precio:4500,
    imagen:"https://i.blogs.es/d35643/pizza-blanca/450_1000.jpg",
    ingredientes:["Masa madre", " tomate", " queso", " pollo", " crema"]
},
{ id:8,
  nombre:"Pizza Cheddar",
    precio:4000,
    imagen:"https://www.yeprecipes.com/data/media/7/bacon-cheddar-pretzel-pizza.jpg",
    ingredientes:["Masa madre", " tomate", " queso", " cheddar"]
}

]
},
    {nombre:"Postres",
    id:2,
    imgUrl:"https://okdiario.com/img/2021/03/05/recetas-chocolate-655x368.jpg",
    productos:[{ id:9,
      nombre:"Chocotorta",
        precio:1500,
        imagen:"https://www.cronista.com/files/image/307/307256/5ffe2f88d2a71_934_695!.jpg?s=6217bd05f06b1335a98deca25fd5d6a7&d=1654442327",
        ingredientes:["Galletitas chocolina", " dulce de leche", " queso crema", " chocolatada"]
    },
    { id: 9,
      nombre:"Lemon Pie",
        precio:1500,
        imagen:"https://www.elmundoeats.com/wp-content/uploads/2017/10/Lemon-Meringue-Pie-2.jpg",
        ingredientes:["Base de galletitas", " relleno de limón", " crema"]
    },
    { id:10,
      nombre:"Bocha de helado",
    precio:1000,
    imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwFn79NXVmPs-l_EBKn1ozHgzZRjtaNc7_pg&usqp=CAU",
    ingredientes:["Chocolate", " vainilla", " dulce de leche"]
},
{ id:11,
  nombre:"Cafetería",
precio:500,
imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRwvyn3bnatzw6CMn7eiSo-XpCkwTQtD70Og&usqp=CAU",
ingredientes:["Café", " lágrima", " café con leche"]
}
    ]
},

    {nombre:"Bebidas",
     id:3,
    imgUrl:"https://www.cocacolaep.com/assets/Spain/Blog-Rojo-y-en-Botella/2021/TENDENCIAS-SIN-AZUCAR/RyB_TENDENCIAS-SIN-AZUCAR_G_900x550__FocusFillWzEyMTAsMTA4MCwieCIsMjc4XQ.jpg",
    productos:[
      { id:12,
        nombre:"Gaseosas",
      precio:600,
      imagen:"https://www.lasucursalpanchos.com.ar/fotos/1610073941pepsi.png",
      ingredientes:["Linea Pepsi"]
      },
      {id:13,
        nombre:"Agua",
      precio:300,
      imagen:"https://cadenaser.com/resizer/h79IXr99IWcrSUN3C4zttx18y80=/736x414/filters:format(jpg):quality(70)/cloudfront-eu-central-1.images.arcpublishing.com/prisaradio/ZGIOCMP7FZOZRO7LKNC7CMWP7Y.jpg",
      ingredientes:[""]
      },
      { id:14,
        nombre:"Sifón de soda",
      precio:400,
      imagen:"https://www.freezy.com.ar/imagenes/1%20L%20galeria.jpg",
      ingredientes:["Agua gasificada"]
      },
      { id:15,
        nombre:"Agua saborizada",
      precio:500,
      imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNMd5LHFH1xGUpiKkjExRKZz-bJR55CBs8hQ&usqp=CAU",
      ingredientes:["Marca Levite"]
      }
    ]
},
    
]