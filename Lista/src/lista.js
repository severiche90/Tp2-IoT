//module.exports = class Lista {

class Lista{

   #elementos;
   claves;
   listaInicio;
   listaFinal;

   constructor(){
     this.#elementos=[];
     this.claves=[];
     this.listaInicio=[];
     this.listaFinal=[];
   }

   count(){
     //return 0;
     return this.#elementos.length;
   }
   
   //busqueda
   find(){
     if(this.#elementos.length == 1){
        return this.#elementos[0].valor; 
     }
     return NaN;
   }
   
   //agrega los datos clave y valor
   add(clave, valor){
      this.#elementos.push({clave, valor});
   } 
   
   //agrega elementos a la lista de claves para el estado vacio
   agregaClaves(clave_1, clave_2, clave_3){
      this.claves.push(clave_1, clave_2, clave_3);
   }

   // agrega elementos a la lista de claves para luego insertar al inicio
   agregaListaInicio(clave_1,clave_2,clave_3){
      this.listaInicio.push(clave_1,clave_2,clave_3);
   }

   // agrega elementos a la lista de claves para luego insertar al final
   agregaListaFinal(clave_1,clave_2,clave_3){
       this.listaFinal.push(clave_1, clave_2, clave_3);
   }

   // agregro una clave al inicio de la lista de claves listaInicio
   agregoInicio(dato){
      this.listaInicio.splice(0, 0, dato);
   }
   
   // agrego una clave al final de la lista de claves listaFinal
   agregoFinal(dato){
      this.listaFinal.splice(this.listaFinal.length, 0, dato);
   }

}

module.exports= Lista;