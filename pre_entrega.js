function calcular_prestamo (dinero , cuotas){

    dinero =parseFloat(dinero);
    cuotas = parseInt(cuotas);

    let prestamo = 0;

    if(dinero >0 && cuotas == 3){
        prestamo = dinero + (dinero * 0.20);
        return prestamo
    }
    else if(monto > 0 && cuotas == 6){
        prestamo = dinero + (dinero * 0.45);
        return prestamo
    }
    else if(monto > 0 && cuotas == 12){
        prestamo = dinero + (dinero * 0.75);
        return prestamo
     }    
    else if(monto > 0 && cuotas == 1){
       return prestamo

        }
    




}





console.log ("Bienvenidosa PrestaPlata");
 
let dinero ="";

while(dinero != "finalizar"){
    
    dinero = prompt ("Ingrese la cantidad de dinero deseada o escriba finalizar")

    if(dinero != "finalizar"){

        let cuotas = prompt ("Que cantidad de cuotas desea? 1, 3, 6 o 12")

        let total = calcular_prestamo(dinero , cuotas)

        console.log("Pediste", dinero);
        console.log("Cantidad de cuotas", cuotas);
        console.log("Total a devolver", total)
}

}