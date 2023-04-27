// Definición de función constructora
function Persona(rut,nombre,apellido,region = null) {
    //Definición de atributos
    this.rut = rut
    this.nombre = nombre 
    this.apellido = apellido
    this.region = region

    //Definición de métodos
    this.saludar = function() {
        let saludo = `Hola ${this.nombre} ${this.apellido}`
        if(region){
            saludo += ` ud es de ${region}`
        } else {
            saludo +=" ud no tiene región asignada"
        }
        console.log(saludo)
    }
}

//Definición primer objeto
var persona1 = new Persona('12345678-5','Osman','Pérez',"Santiago")
// console.log("Persona1", persona1);
// persona1.saludar()

//Definición segundo objeto
var persona2 = new Persona('20111222-5','Luis','López')
// console.log("Persona2", persona2);
// persona2.saludar()


// Primer Ejemplo de objeto sin utilizar clase
var persona3 = {
    rut: '21986357-4',
    nombre: 'María',
    apellido: 'Morales',
    saludar: function() {
        console.log(`Hola ${this.nombre} ${this.apellido}`)
    }
}
// console.log("Persona3", persona3);
// persona3.saludar();


// Segundo Ejemplo de objeto sin utilizar clase
var persona4 = {
    rut: '21986357-4',
    nombre: 'Juana',
    apellido: 'Morales'
}
// persona4.saludar()







//**************************** Segundo ejemplo**************************/
function Rectangulo(nombre, base, altura) {
    this.nombre = nombre
    this.base = base
    this.altura = altura
    this.calcularArea = function() {
        return this.base * this.altura
    }
}
//**************************** Fin Segundo ejemplo**************************/

// Ejemplo para comprobar la estructura de la clase Rectángulo
// const rectangulo1 = new Rectangulo("Pruebas", 10, 4)
// console.log(rectangulo1)

let rectangulos = []
// Definición de ciclo para solicitar los datos de 3 rectángulos
for (let index = 1; index <= 2; index++) {
    alert(`Por favor ingresar el rectangulo ${index}`)
    var nombre = prompt(`Ingrese el nombre del rectángulo ${index}`)
    var base = prompt(`Ingrese la base del rectángulo ${index}`)
    var altura = prompt(`Ingrese la altura del rectángulo ${index}`)

    var objetoRectangulo = new Rectangulo(nombre, base, altura)
    rectangulos.push(objetoRectangulo)
}
// console.log(rectangulos);


rectangulos.forEach(function(rectangulo){
    console.log(rectangulo.nombre, "Área: ", rectangulo.calcularArea());
})