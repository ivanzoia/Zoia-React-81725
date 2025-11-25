const products = [
    {
       id:'01',
       name:'El Gran Bart',
       description: 'Remera de algodon ......',
       stock:10,
       price:25000,
       category:'productos',
       img:'../img/El Gran Bart.png'
    },
    {
       id:'02',
       name:'Rick and Morty',
       description: 'Remera de algodon ......',
       stock:10,
       price:10000,
       category:'productos',
       img:'../img/Rick and Morty.png'
    },
     {
       id:'03',
       name:'Lionel Hutz',
       description: 'Remera de algodon ......',
       stock:10,
       price:10000,
       category:'ofertas',
       img:'../img/Laionel RA.webp'
    },
    {
       id:'04',
       name:'Homero Novia',
       description: 'Remera de algodon ......',
       stock:10,
       price:10000,
       category:'ofertas',
       img:'../img/Homero novia RN.png'
    },
]

let error = false
export const getProducts = ()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(error){
                reject('Hubo un error intente mas tarde')
            }else{

                resolve(products)
            }
        },3000)
    })
}