

export function Prueba({Nombre,Apellido}){
   const products = [
    { title: 'Col', id: 1 , description:'La col es una de las verduras más peculiares y sanas que tenemos'},
    { title: 'Ajo', id: 2 ,description:'El tallo del ajo no es muy alto, y sus hojas, en una época bien determinada'},
    { title: 'Manzana', id: 3,description: 'Las manzanas tienen muchos beneficios. Son ricas en vitamina C' },
];


    return (
     <>
    <h1>
        Hola {Nombre} {Apellido}
    </h1>

    
        {products.map((producto, i) => {
            return(
                <div key={producto.id}>
                <div classname="fondo">
                    <h3 className="para centrar">{producto.title}: </h3>
                    <p>{producto.description}</p>
                </div>

               
    
        </div>
            
            
            )
        })}

 
    </>
    
    );
}
