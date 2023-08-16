// extends hace el proceso de Herencia
//con el extends, Mexicano se vuelve hijo y Humano se vuelve padre
// extends va ligado a super();
class Mexicano extends Humano{

    constructor(lugarNacimiento,curp,fechaNacimiento,ine, colorPiel, colorOjos, colorCabello, idioma){
        super(colorPiel, colorOjos, colorCabello, idioma); //new Humano
        this.lugarNacimiento = lugarNacimiento;
        this.curp = curp;
        this.fechaNacimiento = fechaNacimiento;
        this.ine = ine;
    }

    trabajar(){
        this.hablar();
        alert("trabajando ocho horas")
    }

    comprar(){

    }

    festejar(){

    }

    hablar(){
        alert("Viva México")
    }
}