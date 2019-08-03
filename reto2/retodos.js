const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000
});

function e1CalcularNota() {
    e1nota1 = document.getElementById("e1nota1").value;
    e1nota2 = document.getElementById("e1nota2").value;
    e1nota3 = document.getElementById("e1nota3").value;
    e1nota4 = document.getElementById("e1nota4").value;
    e1tabla = document.getElementById("e1tabla")
    e1resultado = document.getElementById("e1resultado")
    e1tabla.innerHTML = ""
    e1resultado.innerHTML = ""
    if (
        (e1nota1 != "" && e1nota1 >= 0 && e1nota1 < 101) &&
        (e1nota2 != "" && e1nota2 >= 0 && e1nota2 < 101) &&
        (e1nota3 != "" && e1nota3 >= 0 && e1nota3 < 101) &&
        (e1nota4 != "" && e1nota4 >= 0 && e1nota4 < 101)
    ) {
        let e1promedio = (parseFloat(e1nota1) + parseFloat(e1nota2) + parseFloat(e1nota3) + parseFloat(e1nota4)) / 4
        e1tabla.innerHTML += "<tr><td>" + e1nota1 + "</td><td>" + e1LetraValor(e1nota1) + "</td></tr>";
        e1tabla.innerHTML += "<tr><td>" + e1nota2 + "</td><td>" + e1LetraValor(e1nota2) + "</td></tr>";
        e1tabla.innerHTML += "<tr><td>" + e1nota3 + "</td><td>" + e1LetraValor(e1nota3) + "</td></tr>";
        e1tabla.innerHTML += "<tr><td>" + e1nota4 + "</td><td>" + e1LetraValor(e1nota4) + "</td></tr>";
        e1resultado.innerHTML = "Nota final: " + e1promedio + " Puntuación " + e1LetraValor(e1promedio)
    } else {
        Toast.fire({
            type: 'error',
            title: 'Todos los notas deben estar entre 0 y 100'
        })
    }
}

function e1LetraValor(valor) {
    switch (true) {
        case (valor < 60 && valor > 0):
            return "E";
        case (valor < 70 && valor > 59):
            return "D";
        case (valor < 80 && valor > 69):
            return "C";
        case (valor < 90 && valor > 79):
            return "B";
        case (valor < 101 && valor > 89):
            return "A";
        default:
            return "X";
    }
}

function e2CalcularFuerza() {
    e2potenciade8 = Math.pow(10, -8);
    var e2masa1 = document.getElementById("e2masa1").value;
    var e2masa2 = document.getElementById("e2masa2").value;
    var e2distancia = document.getElementById("e2distancia").value;
    e2resultado = document.getElementById("e2resultado")
    e2resultado.innerHTML = ""
    if (e2masa1 > 0 && e2masa2 > 0 && e2distancia > 0) {
        e2fuerza = (parseFloat(6.673 * e2potenciade8) * parseFloat(e2masa1) * parseFloat(e2masa2)) / (Math.pow(e2distancia, 2));
        e2resultado.innerHTML = 'La fuerza entre las masas es de : ' + e2fuerza + " dinas";
    } else {
        Toast.fire({
            type: 'error',
            title: 'Todos los valores deben ser positvos mayores que 0'
        })
    }
}

function e3CalcularEnergia() {

    var e3potenciade10 = Math.pow(10, 10);
    var e3velocidadLuz = 2.997925 * e3potenciade10;
    var e3masa = document.getElementById("e3masa").value;
    e3resultado = document.getElementById("e3resultado")
    e3resultado.innerHTML = ""

    if (parseFloat(e3masa) > 0) {
        e3energia = parseFloat(e3masa) * (Math.pow(e3velocidadLuz, 2))
        e3resultado.innerHTML = 'La energía es ' + e3energia + ' ergios';
    } else {
        Toast.fire({
            type: 'error',
            title: 'La masa debe ser un entero positivo'
        })
    }
}

function e4CalcularHipotenusa() {

    var e4ladoa = document.getElementById("e4ladoa").value;
    var e4ladob = document.getElementById("e4ladob").value;
    e4resultado = document.getElementById("e4resultado")
    e4resultado.innerHTML = ""
    var e4Ladoa = parseFloat(e4ladoa);
    var e4Ladob = parseFloat(e4ladob);
    if (e4Ladoa > 0 && e4Ladob > 0) {
        e4hipotenusa = Math.sqrt(Math.pow(e4Ladoa, 2) + Math.pow(e4Ladob, 2));

        e4resultado.innerHTML = 'La hipotenusa es ' + e4hipotenusa + ' centimetros';
    } else {
        Toast.fire({
            type: 'error',
            title: 'Los valores deben ser enteros positivos'
        })
    }
}

function e5CalcularArea() {

    var e5ladoa = document.getElementById("e5ladoa").value;
    var e5ladob = document.getElementById("e5ladob").value;
    var e5ladoc = document.getElementById("e5ladoc").value;
    e5resultado = document.getElementById("e5resultado")
    e5resultado.innerHTML = ""
    var e5Ladoa = parseFloat(e5ladoa);
    var e5Ladob = parseFloat(e5ladob);
    var e5Ladoc = parseFloat(e5ladoc);
    if (e5Ladoa > 0 && e5Ladob > 0 && e5Ladoc > 0) {
        e5p = (e5Ladoa + e5Ladob + e5Ladoc) / 2;
        e5area = Math.sqrt(e5p * (e5p - e5Ladoa) * (e5p - e5Ladob) * (e5p - e5Ladoc));
        e5resultado.innerHTML = 'El area del triangulo es ' + e5area + ' centimetros';
    } else {
        Toast.fire({
            type: 'error',
            title: 'Los valores deben ser enteros positivos'
        })
    }
}

function e6CalcularHora() {
    var e6hora = document.getElementById("e6hora").value;
    e6resultado = document.getElementById("e6resultado")
    e6resultado.innerHTML = ""
    var e6horas = e6hora.split(":");
    var ampm = "AM";
    if (parseInt(e6horas[0]) >= 0 && parseInt(e6horas[0]) < 24 && parseInt(e6horas[1]) >= 0 && parseInt(e6horas[1]) < 60) {

        if (e6horas[0] > 12) {
            nuevahora = parseInt(e6horas[0]) - 12;
            ampm = "PM"
        } else {
            if (e6horas[0] == 12)
                ampm = "PM"
            if (e6horas[0] == 0) {
                nuevahora = "12";
            } else {
                nuevahora = parseInt(e6horas[0]);
            }
        }
        minutos = parseInt(e6horas[1]);
        e6resultado.innerHTML = 'El hora en formato 12 H es ' + nuevahora + ':' + minutos + ' ' + ampm;
    } else {
        Toast.fire({
            type: 'error',
            title: 'No es el formato correcto para 24H'
        })
    }
}


function e7CalcularFecha() {

    var e7fecha = document.getElementById("e7fecha").value;
    e7resultado = document.getElementById("e7resultado")
    e7resultado.innerHTML = ""
    var e7nfecha = e7fecha.split(" ");
    var e7meses = ["ENERO", "FEBRERO", "MARZO", "ABRIL", "MaAYO", "JUNIO", "JULIO", "AGOSTO", "SEPTIEMBRE", "OCTUBRE", "NOVIEMBRE", "DICIEMBRE"];
    e7esta = false
    if (e7nfecha.length == 3) {
        fechadia = parseInt(e7nfecha[0]);
        fechames = e7nfecha[1];
        fechan = fechames.toUpperCase();
        fechaano = parseInt(e7nfecha[2]);

        for (i = 0; i < 12; i++) {
            if (e7meses[i] == fechan) {
                e7esta = true
                fechan = i + 1;
            }
        };
        if (e7esta) {
            e7resultado.innerHTML = 'La fecha es ' + fechadia + ' ' + fechan + ' ' + fechaano;
        } else {
            Toast.fire({
                type: 'error',
                title: 'Formato incorrecto para la entrada'
            })
        }
    } else {
        Toast.fire({
            type: 'error',
            title: 'Formato incorrecto para la entrada'
        })
    }

}

function e8CalcularNumero() {

    var e8numero = document.getElementById("e8numero").value;
    e8resultado = document.getElementById("e8resultado")
    e8resultado.innerHTML = ""
    excepciones = ["DIEZ", "ONCE", "DOCE", "TRECE", "CATORCE", "QUINCE"]
    decenas = ["DIECI", "VEINT", "TREIN", "CUARE", "CINCU", "SESEN", "SETEN", "OCHEN", "NOVEN"];
    unidades = ["UNO", "DOS", "RES", "TRO", "NCO", "EIS", "ETE", "CHO", "EVE"];
    centenas = ["CIE", "DOS", "TRE", "CUA", "QUI", "SEI", "SET", "OCH", "NOV"];
    num = [];
    vnum = []
    var e8numeroenpartes = e8numero.toUpperCase().split(" ");
    var parte1 = e8numeroenpartes[0];
    var parte2 = e8numeroenpartes[1];
    vnum[0] = undefined;
    vnum[1] = undefined;
    vnum[2] = undefined;
    for (i = 0; i < 9; i++) {
        if (centenas[i] == parte1.substr(0, 3)) {
            vnum[0] = i + 1;
        }
    }

    for (i = 0; i < 9; i++) {
        if (parte2 != undefined && unidades[i] == parte2.substr(-3)) {
            vnum[2] = i + 1;
        } else if (vnum[2] == undefined) {
            vnum[1] = 0;
            vnum[2] = 0;
        }
    }

    for (i = 0; i < decenas.length; i++) {
        if (parte2 != undefined && decenas[i] == parte2.substr(0, 5)) {
            vnum[1] = i + 1;
        } else if ((vnum[1] == undefined)) {
            vnum[1] = 0;
        }
    }

    for (i = 0; i < 6; i++) {
        if (excepciones[i] == parte2) {
            vnum[1] = 1;
            vnum[2] = i;

        }
    }
    if (vnum[0] != undefined && vnum[1] != undefined && vnum[2] != undefined) {
        e8resultado.innerHTML = 'Numero entero: ' + vnum[0] + vnum[1] + vnum[2];
    } else {
        Toast.fire({
            type: 'error',
            title: 'Formato incorrecto para la entrada'
        })
    }
}

function e9CalcularCirculo(opcion) {
    var e9radio = parseFloat(document.getElementById("e9radio").value);
    e9resultado = document.getElementById("e9resultado")
    e9resultado.innerHTML = ""
    var e9diametro = 0;
    console.log(e9radio)
    var e9area = 0;
    var e9circunferencia = 0;
    if (e9radio > 0) {
        switch (opcion) {
            case 1:
                e9circunferencia = 2 * e9radio * (Math.PI);
                e9resultado.innerHTML = 'La circunferencia del circulo es ' + e9circunferencia;
                break;
            case 2:
                e9area = (Math.pow(e9radio, 2)) * (Math.PI);
                e9resultado.innerHTML = 'El area del circulo es ' + e9area;
                break;
            case 3:
                e9diametro = e9radio * 2;
                e9resultado.innerHTML = 'El diametro del circulo es ' + e9diametro;
                break;
            default:
                break;
        }
    } else {
        Toast.fire({
            type: 'error',
            title: 'El radio debe ser entero positivo mayor a 0'
        })
    }
}

function e10CalcularNumero() {

    var e10numero = document.getElementById("e10numero").value;
    e10resultado = document.getElementById("e10resultado")
    e10resultado.innerHTML = ""
    e10numeropartes = e10numero.split('');
    e10numeroRomano = [];

    if (e10numeropartes.length == 4 && 2001 > e10numero && e10numero > 999 && (e10numero % 1) == 0) {

        switch (e10numeropartes[0]) {
            case "1":
                e10numeroRomano[0] = "M";
                break;
            case "2":
                e10numeroRomano[0] = "MM"
                break;
            default:
                break;
        }
        switch (e10numeropartes[1]) {
            case "0":
                e10numeroRomano[1] = "";
                break;
            case "1":
                e10numeroRomano[1] = "C";
                break;
            case "2":
                e10numeroRomano[1] = "CC";
                break;
            case "3":
                e10numeroRomano[1] = "CCC";
                break;
            case "4":
                e10numeroRomano[1] = "CD";
                break;
            case "5":
                e10numeroRomano[1] = "D";
                break;
            case "6":
                e10numeroRomano[1] = "DC";
                break;
            case "7":
                e10numeroRomano[1] = "DCC";
                break;
            case "8":
                e10numeroRomano[1] = "DCCC";
                break;
            case "9":
                e10numeroRomano[1] = "CM";
                break;
            default:

                break;
        }
        switch (e10numeropartes[2]) {
            case "0":
                e10numeroRomano[2] = "";
                break;
            case "1":
                e10numeroRomano[2] = "X";
                break;
            case "2":
                e10numeroRomano[2] = "XX";
                break;
            case "3":
                e10numeroRomano[2] = "XXX";
                break;
            case "4":
                e10numeroRomano[2] = "XL";
                break;
            case "5":
                e10numeroRomano[2] = "L";
                break;
            case "6":
                e10numeroRomano[2] = "LX";
                break;
            case "7":
                e10numeroRomano[2] = "LXX";
                break;
            case "8":
                e10numeroRomano[2] = "LXXX";
                break;
            case "9":
                e10numeroRomano[2] = "XC";
                break;
            default:

                break;
        }
        switch (e10numeropartes[3]) {
            case "0":
                e10numeroRomano[3] = "";
                break;
            case "1":
                e10numeroRomano[3] = "I";
                break;
            case "2":
                e10numeroRomano[3] = "II";
                break;
            case "3":
                e10numeroRomano[3] = "III";
                break;
            case "4":
                e10numeroRomano[3] = "IV";
                break;
            case "5":
                e10numeroRomano[3] = "V";
                break;
            case "6":
                e10numeroRomano[3] = "VI";
                break;
            case "7":
                e10numeroRomano[3] = "VII";
                break;
            case "8":
                e10numeroRomano[3] = "VIII";
                break;
            case "9":
                e10numeroRomano[3] = "IX";
                break;
            default:

                break;
        }
        e10resultado.innerHTML = 'Numero Romano: ' + e10numeroRomano[0] + e10numeroRomano[1] + e10numeroRomano[2] + e10numeroRomano[3];
    } else {
        Toast.fire({
            type: 'error',
            title: 'El numero debe ser un entero entre 1000 y 2000'
        })
    }
}

function e11CalcularCentena() {
    var e11a = document.getElementById("e11numeroa").value;
    var e11b = document.getElementById("e11numerob").value;
    var e11c = document.getElementById("e11numeroc").value;
    var d = document.getElementById("e11numerod").value;
    e11resultado = document.getElementById("e11resultado")
    e11resultado.innerHTML = ""
    if (e11b.length == 1 && e11c.length == 1 && d.length == 1) {
        if (e11c < 5) {
            e11resultado.innerHTML = 'La decena mas cercana es: ' + e11a + e11b + '00';
        } else {
            if (e11b == 9) {
                e11resultado.innerHTML = 'La decena mas cercana es: '(parseInt(e11a) + 1) + '000';
            } else {
                e11resultado.innerHTML = 'La decena mas cercana es: ' + a + (parseInt(e11b) + 1) + '00';
            }
        }
    } else {
        Toast.fire({
            type: 'error',
            title: 'Los numeros B,C y D, solo pueden tener 1 digito'
        })
    }
}

function e12CalcularEdad() {

    var e12dia = document.getElementById("e12dia").value;
    var e12mes = document.getElementById("e12mes").value;
    var e12ano = document.getElementById("e12ano").value;
    e12resultado = document.getElementById("e12resultado")
    e12resultado.innerHTML = ""
    if (e12dia < 32 && e12dia > 0 && e12mes > 0 && e12mes < 13 && e12ano > 0) {
        var e12fechanacimiento = new Date(e12ano + '-' + e12mes + '-' + e12dia).getTime();
        var e12fechaactual = new Date().getTime();
        var diff = parseInt((e12fechaactual - e12fechanacimiento) / (1000 * 60 * 60 * 24));
        if (diff < 365) {
            if (diff < 30) {
                e12resultado.innerHTML = "La edad del bebé es: " + parseInt(diff) + " dias"
            } else {
                e12resultado.innerHTML = "La edad del bebé es: " + parseInt(diff / 30) + " meses y " + parseInt(diff % 30) + " dias"
            }
        } else {
            e12resultado.innerHTML = "La edad es: " + parseInt(diff / 365) + " Años"
        }
        console.log((diff));
    } else {
        Toast.fire({
            type: 'error',
            title: 'Debe ingresar valores validos para dia, mes y año'
        })
    }
}

function e13CalcularXyY() {
    var e13coa = document.getElementById("e13coa").value;
    var e13cob = document.getElementById("e13cob").value;
    var e13coc = document.getElementById("e13coc").value;
    var e13cod = document.getElementById("e13cod").value;
    var e13coe = document.getElementById("e13coe").value;
    var e13cof = document.getElementById("e13cof").value;
    e13resultado = document.getElementById("e13resultado")
    e13resultado.innerHTML = ""
    var x = (e13coc * e13coe - e13cob * e13cof) / (e13coa * e13coe - e13cob * e13cod);
    var y = (e13coa * e13cof - e13coc * e13cod) / (e13coa * e13coe - e13cob * e13cod);
    e13resultado.innerHTML = 'El Resultado es X= ' + x + ' y Y= ' + y;
}

function e14CalcularAnoBisiesto() {
    e14anobi = document.getElementById("e14ano").value;
    e14resultado = document.getElementById("e14resultado")
    e14resultado.innerHTML = ""
    if ((e14anobi % 1 == 0)) {
        if ((e14anobi % 4 == 0) && (!(e14anobi % 100 == 0))) {
            e14resultado.innerHTML = '' + e14anobi + ' es un Año Bisiesto';
        } else if ((e14anobi % 100 == 0) && (e14anobi % 400 == 0)) {
            e14resultado.innerHTML = '' + e14anobi + ' es un Año Bisiesto';
        } else {
            e14resultado.innerHTML = '' + e14anobi + ' no es un Año Bisiesto';
        }
    } else {
        Toast.fire({
            type: 'error',
            title: 'El año debe ser un entero positivo'
        })
    }
}

function e15CalcularDiasMes() {
    var e15mes = document.getElementById("e15mes").value;
    var e15ano = document.getElementById("e15ano").value;
    var e15meses = ["31", "28", "31", "30", "31", "30", "31", "31", "30", "31", "30", "31"];
    e15resultado = document.getElementById("e15resultado")
    e15resultado.innerHTML = ""

    if (e15mes < 13 && e15mes > 0 && e15ano > 0) {
        for (let index = 0; index < e15meses.length; index++) {
            if (e15mes == (index + 1)) {
                if (e15mes == 2) {
                    if ((e15ano % 4 == 0) && (!(e15ano % 100 == 0))) {
                        e15resultado.innerHTML = 'El mes ' + e15mes + ' del Año ' + e15ano + ' tiene 29 dias';
                    } else if ((e15ano % 100 == 0) && (e15ano % 400 == 0)) {
                        e15resultado.innerHTML = 'El mes ' + e15mes + ' del Año ' + e15ano + ' tiene 29 dias';
                    } else {
                        e15resultado.innerHTML = 'El mes ' + e15mes + ' del Año ' + e15ano + ' tiene 28 dias';
                    }
                } else {
                    e15resultado.innerHTML = 'El mes ' + e15mes + ' del Año ' + e15ano + ' tiene ' + e15meses[index] + ' dias';
                }
            }

        }
    } else {
        Toast.fire({
            type: 'error',
            title: 'El año y el mes deben ser un entero positivo'
        })
    }
}

function e16CalcularSalario() {
    e16impuestototal = 0
    var e16horas = parseFloat(document.getElementById("e16horas").value);
    var e16tarifa = parseFloat(document.getElementById("e16tarifa").value);
    e16resultado = document.getElementById("e16resultado")
    e16resultado.innerHTML = ""

    if (e16tarifa > 0 && e16horas > 0) {
        if (e16horas < 39) {
            e16salario = (e16horas * e16tarifa)
        }

        if (e16horas > 38) {
            e16hextras = (e16horas - 38);
            e16salario = (38 * e16tarifa) + (e16hextras * (e16tarifa + (0.5 * e16tarifa)))
        }

        if (e16salario > 50000) {
            e16impuesto = e16salario / 100;
            e16impuestototal = e16impuesto * 10;
            e16salario = e16salario - e16impuestototal;

        }

        e16resultado.innerHTML = 'El salario es de ' + e16salario + ' y el impuesto es de ' + e16impuestototal;
    } else {
        Toast.fire({
            type: 'error',
            title: 'Los valores deben ser enteros positivos'
        })
    }
}

function e17CalcularCambio() {

    var e17dinero = document.getElementById("e17dinero").value;
    e17resultado = document.getElementById("e17resultado")
    e17resultado.innerHTML = ""
    e17cambio = "";
    billete50 = 0;
    billete20 = 0;
    billete10 = 0;
    billete5 = 0;
    billete2 = 0;
    billete1 = 0;
    moneda500 = 0;
    moneda200 = 0;
    moneda100 = 0;
    moneda50 = 0;

    if (e17dinero > 0) {

        while (e17dinero >= 50000) {
            e17dinero = e17dinero - 50000;
            billete50++
        }
        if (billete50 > 0) {
            e17cambio += billete50 + " Billetes de 50.000 <br>"
        }
        while (e17dinero >= 20000) {
            e17dinero = e17dinero - 20000;
            billete20++
        }
        if (billete20 > 0) {
            e17cambio += billete20 + " Billetes de 20.000 <br>"
        }
        while (e17dinero >= 10000) {
            e17dinero = e17dinero - 10000;
            billete10++
        }
        if (billete10 > 0) {
            e17cambio += billete10 + " Billetes de 10.000 <br>"
        }
        while (e17dinero >= 5000) {
            e17dinero = e17dinero - 5000;
            billete5++
        }
        if (billete5 > 0) {
            e17cambio += billete5 + " Billetes de 5.000 <br>"
        }
        while (e17dinero >= 2000) {
            e17dinero = e17dinero - 2000;
            billete2++
        }
        if (billete2 > 0) {
            e17cambio += billete2 + " Billetes de 2.000 <br>"
        }
        while (e17dinero >= 1000) {
            e17dinero = e17dinero - 1000;
            billete1++
        }
        if (billete1 > 0) {
            e17cambio += billete1 + " Billetes de 1.000 <br>"
        }
        while (e17dinero >= 500) {
            e17dinero = e17dinero - 500;
            moneda500++
        }
        if (moneda500 > 0) {
            e17cambio += moneda500 + " Monedas de 500 <br>"
        }
        while (e17dinero >= 200) {
            e17dinero = e17dinero - 200;
            moneda200++
        }
        if (moneda200 > 0) {
            e17cambio += moneda200 + " Monedas de 200 <br>"
        }
        while (e17dinero >= 100) {
            e17dinero = e17dinero - 100;
            moneda100++
        }
        if (moneda100 > 0) {
            e17cambio += moneda100 + " Monedas de 100 <br>"
        }
        while (e17dinero >= 50) {
            e17dinero = e17dinero - 50;
            moneda50++
        }
        if (moneda50 > 0) {
            e17cambio += moneda50 + " Monedas de 50 <br>"
        }
        e17resultado.innerHTML = e17cambio
    } else {
        Toast.fire({
            type: 'error',
            title: 'El dinero debe ser un entero positivo'
        })
    }
}

function e18CalcularNumero() {
    var e18numero = document.getElementById("e18numero").value;
    e18resultado = document.getElementById("e18resultado")
    e18resultado.innerHTML = ""
    if (e18numero > 0) {
        e18resultado.innerHTML = 'El numero ' + e18numero + ' es mayor que 0';
    } else if (e18numero == 0) {
        e18resultado.innerHTML = 'El numero es 0';
    } else {
        e18resultado.innerHTML = 'El numero ' + e18numero + ' es menor que 0';
    }
}