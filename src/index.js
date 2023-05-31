/** Precio de ropa
 * Para calcular la ganancia que se asignará a la venta de una ropa, simplemente
 * se incrementa el 20% del costo de la prenda
 * Para el caso de ropa íntima se tiene: la ganancia es el 30% del costo si es de hombre
 * y 40% si es de mujer
 * Se tienen los siguientes datos de una ropa: nombre, costo, tipo(1=general, 2=íntima) y sexo ('M'-'F')
 * Se requiere calcular el precio de venta de la ropa, usando herencia
 */
class Cl_mRopa {
  constructor(nombre = "", costo = "") {
    this.nombre = nombre;
    this.costo = costo;
  }

  precio() {
    return this.costo + this.ganancia();
  }

  ganancia() {
    return this.costo * 0.2;
  }
}

class Cl_mIntimo extends Cl_mRopa {
  constructor(nombre = "", costo = "", sexo = "") {
    super(nombre, costo);
    this.sexo = sexo;
  }

  ganancia() {
    return this.costo * (this.sexo === "M" ? 0.3 : 0.4);
  }
}

let prenda1 = new Cl_mRopa("Pantalón", 10);
let prenda2 = new Cl_mIntimo("Brasier", 20, "F");

let salida = document.getElementById("app");
salida.innerHTML = "RESULTADOS:";
salida.innerHTML += "<br>Precio ...1= " + prenda1.precio();
salida.innerHTML += "<br>Precio ...2= " + prenda2.precio();
