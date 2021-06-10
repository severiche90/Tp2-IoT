/**
 * En una lista vacía hay cero elementos.  ok
 * Cuando se agrega un elemento a una lista vacía hay un elemento.  ok
 * En una lista vacía no se encuentra ninguna clave.  ok
 * Cuando se agrega un elemento a una lista vacía se puede recuperar el valor a partir de la clave. ok
 * Cuando se agrega una clave que ya está en la lista se actualiza el valor correspondiente. ok
 * Cuando se agregan un elemento a una lista vacía la lista de claves esta ordenada. ok
 * Cuando se agrega un elemento al principio la lista de claves esta ordenada. ok
 * Cuando se agrega un elemento al final la lista de claves esta ordenada.  ok
 */

const assert = require("chai").assert;
const Lista = require ("../src/lista.js");   


describe("En una lista vacia", function(){
    
    var lista = new Lista();
    
    it("Hay cero elementos", function(){
       assert.equal(lista.count(),0);
    })

    it("No se encuentra ninguna clave", function(){
       assert.isNaN(lista.find("clave")); 
    })  
})

describe("Cuando se agrega un elemento a una lista vacia", function(){
   
    var lista= new Lista();
    lista.add("clave", "valor");
  
    it("hay un elemento", function (){
       assert.equal(lista.count(),1);
    })

    it("Se puede recuperar el valor a partir de la clave", function(){
       assert.equal(lista.find("clave"),"valor");
    })
})

describe("Cuando se agrega una clave que ya esta en la lista", function(){
   
    var lista=new Lista();
    lista.add("clave","actualizado");

    it("Se actualiza un valor correspondiente", function(){
       assert.equal(lista.find("clave"),"actualizado");
    })
}) 

describe("Cuando se agregan elementos en una lista vacia", function(){
    
    var lista=new Lista();
    lista.agregaClaves("arbol", "casa", "mesa");

    // creo un array ordenado alfabeticamente para comparar con la lista de claves
    array = ["arbol", "casa", "mesa"];
    
    it("La lista de claves esta ordenada", function(){
       for(i=0; i<lista.claves.length; i++){ 
       assert.equal(lista.claves[i],array[i]);
       }
    })
})

describe("Cuando se agrega un elemento al principio", function(){

   var lista=new Lista();
   lista.agregaListaInicio("arbol","casa","mesa");

   // agregro una clave al inicio de la lista de claves listaInicio
   lista.agregoInicio("libro");
   // ordenamos la lista de claves alfabeticamente
   lista.listaInicio.sort();
   // creo un array ordenado alfabeticamente para comparar con la lista de claves
   v = ["arbol", "casa", "libro", "mesa"];

   it("La lista de claves esta ordenada", function(){
       for(i=0; i<lista.listaInicio.length; i++){
          assert.equal(lista.listaInicio[i],v[i]);
       }
   })
})

describe("Cuando se agrega un elemento al final", function(){

   var lista= new Lista();
   lista.agregaListaFinal("arbol","casa","mesa");

   // agrego una clave al final de la lista de claves 
   lista.agregoFinal("libro");
   //ordenamos la lista de claves alfabeticamente
   lista.listaFinal.sort();
   // creo un array ordenado alfabeticamente para comparar con la lista de claves
   v = ["arbol", "casa", "libro", "mesa"];

   it("la lista de claves esta ordenada", function(){
      for(i=0; i<lista.listaFinal.length; i++){
         assert.equal(lista.listaFinal[i], v[i]);
      }
   })
})  

