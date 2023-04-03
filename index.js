
class Moneda{
    constructor(nombre, valor, sigla){
        this.nombre = nombre;
        this.valor = valor;
        this.sigla = sigla;
    }
}

const pesoChileno = new Moneda("Peso Chileno", 0.0013, "CLP");
const realBrasilero = new Moneda("Real Brasilero", 0.20, "BLR");
const solPeruano = new Moneda("Sol Peruano", 0.27, "PEN");
const euro = new Moneda("Euro", 1.09, "EUR");
const dolar = new Moneda("Dolar", 1, "USD");

const monedas = [pesoChileno, realBrasilero, solPeruano, euro, dolar];


function crearSelect(){
    let select1 = document.getElementById("tipoMoneda");
    let select2 = document.getElementById("monedaCambiada");

    for(let elemento of monedas){
        let option = document.createElement("option");
        let option2 = document.createElement("option");
        option.text = elemento.nombre;
        option.value = elemento.sigla;
        option2.text = elemento.nombre;
        option2.value = elemento.sigla;
        select1.add(option);
        select2.add(option2);
    }

}

function calcula(){
    
    let siglaSelect1 = document.getElementById("tipoMoneda").value;
    let siglaSelect2 = document.getElementById("monedaCambiada").value;
    let monto = document.getElementById("monto").value;
    const valorDolar = dolar.valor;
    let valorSelect1;
    let valorSelect2;

    for(let elemento of monedas){
        if (elemento.sigla == siglaSelect1){
            valorSelect1 = elemento.valor;
        }
        if (elemento.sigla == siglaSelect2){
            valorSelect2 = elemento.valor;
        }
    }

    let resultado = (valorSelect1 / valorSelect2) * monto;

    document.getElementById("resultado").value = resultado;
    
}



