//creación de una clase
class Humano{
    // el constructor permite ejecutar acciones durante la construcción del objeto
    // caracteristica, el contructor es lo primero que se ejecuta de una clase
    // no es obligatorio  que el constructor lo contenga una clase
    constructor(colorPiel, colorOjos, colorCabello, idioma){
        this.colorPiel = colorPiel; //estas son propiedades
        this.colorOjos = colorOjos;
        this.colorCabello = colorCabello,
        this.idioma = idioma;
    }
    //metodo personalizado
    hablar(){
        alert("Hola soy un humano")
    }

    comer(){
        alert("ñam ñam")
    }
} 

