//POO
//funciones generadoras o constructoras
function Persona(nombre, altura, peso, edad, colorOjos){
    this.nombre = nombre;
    this.altura = altura;
    this.peso = peso;
    this.edad = edad;
    this.colorOjos = colorOjos;
} //esto es una abstracción

// creación de objetos
const pedro = new Persona("Pedro", 1.72, 100, 32, "cafes"); //esto es un proceso de instancia

// agregar metodos
//modificando  el prototype

Persona.prototype.saludar = function(){
    alert("Hola mi nombre es " + this.nombre)
}

Persona.prototype.comer = function(){
    alert(this.nombre + "ñan ñan")
}