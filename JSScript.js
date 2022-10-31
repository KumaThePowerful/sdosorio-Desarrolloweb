function Ejercicio1() {
    let Nombre = prompt("Introduzca su nombre", "");
    console.log(Nombre)
    var Edad = parseInt(prompt("Introduzca su edad", 0));
    console.log(Edad)
    var EdadPA = Edad + 1
    console.log(EdadPA)
    console.log("Hola " + Nombre + " tienes " + Edad + " años y el año que viene tendrás " + EdadPA + " años")
    window.alert("Hola " + Nombre + " tienes " + Edad + " años y el año que viene tendrás " + EdadPA + " años")
}
function Ejercico2() {
    var base; var altura; var radio ; var area;
    let Figura = prompt("Escriba el número de la figura a la cual desa hallar el área \n"+ "1 - Trángulo \n 2 - Rectángulo\n 3 - Círculo ", 0);
    if (Figura == 1) {
        base = parseInt(prompt("Ingrese el valor de la base", 0))
        altura = parseInt(prompt("Ingrese el valor de la altura", 0))
        area = (base * altura) / 2
        window.alert("El área de un triangulo con base " + base + " y altura " + altura + " es " + area)
    }
    if (Figura == 2) {
        base = parseInt(prompt("Ingrese el valor de la base", 0))
        altura = parseInt(prompt("Ingrese el valor de la altura", 0))
        area = (base * altura) 
        window.alert("El área de un rectangulo con base " + base + " y altura " + altura + " es " + area)
    }
    if (Figura == 3) {
        radio=parseInt(prompt("Ingrese el valor del radio ",0))
        area = Math.PI*radio
        window.alert("El área de un círculo de radio " + radio +" es " + area)
    }
    if (Figura!=1 && Figura!=2 && Figura!=3){
        window.alert("La opción introducida es inválida")
    }
}
