const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000
});

function factorial(n) {
    var factorial = 1;
    for (i = 1; i <= n; i++) {
        factorial = factorial * i;
    }
    return factorial
}

const sumarterminos = (cont, item) => {
    return cont += item;
}

function e1CalcularSalario() {

    var e1salario = parseFloat(document.getElementById("e1salario").value);
    e1resultado = document.getElementById("e1resultado")
    e1resultado.innerHTML = ""
    var e1salarionuevo = 0;

    if (e1salario > 0) {
        switch (true) {
            case (e1salario > 0 && e1salario <= 9000):
                e1salarionuevo = parseFloat(e1salario) + (e1salario * 0.2);
                break;
            case (e1salario > 9000 && e1salario <= 15000):
                e1salarionuevo = e1salario + (e1salario * 0.1)
                break;
            case (e1salario > 15000 && e1salario <= 20000):
                e1salarionuevo = e1salario + (e1salario * 0.05)
                break;
            case (e1salario > 20000):
                e1salarionuevo = e1salario
                break;
            default:
                e1salarionuevo = 0;
                break;
        }
        e1resultado.innerHTML = 'El nuevo salario es de:  ' + e1salarionuevo + '';
    } else {
        Toast.fire({
            type: 'error',
            title: 'el salario debe ser positvo mayor que 0'
        })
    }
}

function e2CalcularPi() {
    var e2terminos = parseFloat(document.getElementById("e2terminos").value);
    e2resultado = document.getElementById("e2resultado")
    e2resultado.innerHTML = ""
    var e2suma = 0;
    var e2pi = 0;
    if (e2terminos > 0 && (e2terminos % 1) == 0) {
        for (var i = 1; i <= e2terminos; i++) {
            e2suma += 1 / (i ** 2);
        }
        e2pi = Math.sqrt(e2suma * 6);
        e2resultado.innerHTML = "Con " + e2terminos + " terminos, el valor de Pi es: " + e2pi
    } else {
        Toast.fire({
            type: 'error',
            title: 'el numero de terminos debe ser positvo mayor que 0'
        })
    }
}

function e3LlenarN() {
    e3llenarterminos = document.getElementById("e3llenarterminos")
    e3llenarterminos.innerHTML = ""
    var e3nterminos = document.getElementById("e3nterminos").value;
    var e3texto = "";
    if (e3nterminos > 0 && ((e3nterminos % 1) == 0)) {
        for (let index = 0; index < e3nterminos; index++) {
            e3texto += '' +
                '<div class="form-group row">' +
                '<label for="nota1" class="col-sm-3 col-form-label">Termino ' + (index + 1) + '</label>' +
                '<div class="col-sm-9">' +
                '<input type="number" class="form-control" id="e3termino' + index + '"' +
                'placeholder="Ingrese el numero">' +
                '</div>' +
                '</div>'
        }
        e3texto += '<br><center><button type="button" onclick="e3CalcularMayorMenorMedia()"' +
            'class="btn btn-outline-success">Calcular</button></center>'
        e3llenarterminos.innerHTML = e3texto
    } else {
        Toast.fire({
            type: 'error',
            title: 'el numero de terminos debe ser positvo mayor que 0'
        })
    }
}

function e3CalcularMayorMenorMedia() {
    e3resultado = document.getElementById("e3resultado")
    var e3nterminos = document.getElementById("e3nterminos").value;
    e3resultado.innerHTML = ""
    var e3terminos = [];
    for (let index = 0; index < e3nterminos; index++) {
        e3terminos[index] = parseFloat(document.getElementById("e3termino" + index).value);
    }

    var e3mayor = e3terminos[0];
    var e3menor = e3terminos[0];
    var e3media = 0;

    for (let index = 0; index < e3terminos.length; index++) {
        if (e3terminos[index] > e3mayor)
            e3mayor = e3terminos[index];
    }

    for (let index = 0; index < e3terminos.length; index++) {
        if (e3terminos[index] < e3menor)
            e3menor = e3terminos[index];
    }

    for (let index = 0; index < e3terminos.length; index++) {
        e3media = e3media + e3terminos[index];
    }
    e3media = e3media / e3terminos.length;
    e3resultado.innerHTML = 'El mayor es ' + e3mayor + '<br> El menor es ' + e3menor + '<br> La media es ' + e3media;

}

function e4CalcularDomingoPascua() {
    e4resultado = document.getElementById("e4resultado")
    e4resultado.innerHTML = ""
    var e4ano = document.getElementById("e4ano").value;
    if (e4ano < 2001 && e4ano > 1989 && ((e4ano % 1) == 0)) {
        var a = e4ano % 19;
        var b = e4ano % 4;
        var c = e4ano % 7;
        var d = (19 + a + 24) % 30;
        var e = ((2 * b) + (c * 4) + (6 * d) + 5) % 7;
        var n = (22 + d + e);
        if (n > 31) {
            n = n - 31;
            e4resultado.innerHTML += 'En ' + e4ano + ' el domingo de pascua es el ' + (parseFloat(n)) + ' de Abril';
        }
        else {

            e4resultado.innerHTML += ' En ' + e4ano + ' el domingo de pascua es el ' + (parseFloat(n)) + ' de Marzo';
        }
    } else {
        Toast.fire({
            type: 'error',
            title: 'el el año debe estar entre 1990 y 2000'
        })
    }
}

function e5CalcularBisiesto() {
    e5resultado = document.getElementById("e5resultado")
    e5resultado.innerHTML = ""
    e5ano = document.getElementById("e5ano").value;
    if (e5ano > 1799 && e5ano < 2001 && (e5ano % 1 == 0)) {
        if (((e5ano % 4) == 0) && ((e5ano % 100) != 0)) {
            e5resultado.innerHTML = e5ano + ' es un Año Bisiesto';
        } else if (((e5ano % 100) == 0) && ((e5ano % 400) == 0)) {
            e5resultado.innerHTML = e5ano + ' es un Año Bisiesto';
        } else {
            e5resultado.innerHTML = e5ano + ' no es un Año Bisiesto';
        }
    } else {
        Toast.fire({
            type: 'error',
            title: 'el el año debe estar entre 1800 y 2000'
        })
    }

}

function e6CalcularCuadroMagico() {
    var e6ordenN = document.getElementById("e6ordenn").value;
    e6resultado = document.getElementById("e6resultado")
    e6resultado.innerHTML = ""
    if (e6ordenN % 2 && e6ordenN > 0) {
        var e6cuadro = new Array(parseInt(e6ordenN));
        for (let index = 0; index < e6cuadro.length; index++) {
            e6cuadro[index] = new Array(parseInt(e6ordenN));
        }
        for (let i = 0; i < e6ordenN; i++) {
            for (let j = 0; j < e6ordenN; j++) {
                e6cuadro[i][j] = 0;
            }
        }
        var x = 0;
        var y = parseInt(e6ordenN / 2);
        e6cuadro[x][y] = 1;
        for (let p = 1; p < (e6ordenN * e6ordenN); p++) {
            var xAnterior = x;
            var yAnterior = y;
            if (x == 0) {
                x = (e6ordenN - 1);
            } else {
                x = x - 1;
            }
            if (y == (e6ordenN - 1)) {
                y = 0;
            } else {
                y = y + 1;
            }
            if (e6cuadro[x][y] != 0) {
                if (xAnterior == (e6ordenN - 1)) {
                    x = 0;
                } else {
                    x = xAnterior + 1;
                }
                y = yAnterior;
            }
            e6cuadro[x][y] = (p + 1);
        }
        var imprimir = "";
        for (let i = 0; i < e6ordenN; i++) {
            imprimir += "<tr>";
            for (let j = 0; j < e6ordenN; j++) {
                imprimir += "<td>" + e6cuadro[i][j] + "</td>";
            }
            imprimir += "</tr>";
        }
        e6resultado.innerHTML = imprimir;
    } else {
        Toast.fire({
            type: 'error',
            title: 'n debe ser un impar entre 3 y 11'
        })
    }
}

function e7CalcularNumerosPerfectos() {
    e7resultado = document.getElementById("e7resultado")
    e7resultado.innerHTML = ""
    var e7divisores = [];
    var e7numeroperfectos = [];
    var j = 1;
    while (e7numeroperfectos.length < 3) {
        j++
        i = 1;
        e7sumdiv = 0;
        e7divisores.splice(0, e7divisores.length);
        for (i = 1; i < j; i++) {
            if ((j % (i)) === 0) {
                e7divisores.push(i)
                e7sumdiv = e7divisores.reduce(sumarterminos, 0)
            }
        }
        if (e7sumdiv === j) {
            e7numeroperfectos.push(j)
        }
    }
    e7resultado.innerHTML = 'Los primeros 3 numeros perfectos son: <br> ' + e7numeroperfectos
}

function e8CalcularEX() {
    e8resultado = document.getElementById("e8resultado")
    e8resultado.innerHTML = ""
    var e8x = parseInt(document.getElementById("e8x").value);
    var e8valores = [];
    var e8imprimir = ""
    for (n = 1; n < 101; n++) {
        valor = (Math.pow(e8x, n)) / factorial(n)
        e8valores.push(valor)

    }
    sumdiv = e8valores.reduce(sumarterminos, 0)
    e8imprimir += "Euler elevado " + e8x + " es: " + sumdiv + "<br><br> Los primeros 100 terminos son: <br><br>1"
    for (i = 0; i < e8valores.length; i++) {
        e8imprimir += " +" + e8valores[i] + "";
    }
    e8resultado.innerHTML = e8imprimir
}

function e9CalcularMesesConejos() {
    e9resultado = document.getElementById("e9resultado")
    e9resultado.innerHTML = ""
    var e9parejasconejos = parseInt(document.getElementById("e9parejasconejos").value);
    a = 1; b = 1; c = 0; i = 0;
    if (e9parejasconejos == 1) {
        e9resultado.innerHTML = 'Pasan ' + e9parejasconejos + ' meses hasta tener ' + e9parejasconejos + ' parejas de conejos';
    }
    else {
        for (i = 2; i < (e9parejasconejos * 2); i++) {
            c = a + b; a = b; b = c;
            if (c == e9parejasconejos) {
                e9resultado.innerHTML = 'Pasan ' + i + ' meses hasta tener ' + e9parejasconejos + ' parejas de conejos';
                i = 0;
                break
            }
            else if (e9parejasconejos < c) {
                e9resultado.innerHTML = 'Pasan ' + (i) + ' meses hasta tener ' + e9parejasconejos + ' parejas de conejos';
                i = 0;
                break

            }
        }
    }
}

function e10CalcularMCD() {
    e10resultado = document.getElementById("e10resultado")
    e10resultado.innerHTML = ""
    var e10numero1 = document.getElementById("e10numero1").value;
    var e10numero2 = document.getElementById("e10numero2").value;
    if (e10numero1 > 0 && (e10numero1 % 1 == 0) && (e10numero2 % 1 == 0) && e10numero2 > 0) {
        if (e10numero1 < e10numero2) {
            cambio = e10numero1;
            e10numero1 = e10numero2;
            e10numero2 = cambio;
        }
        while ((e10numero1 % e10numero2) != 0) {
            cambio = e10numero1;
            e10numero1 = e10numero2;
            e10numero2 = cambio % e10numero1;
        }
        e10resultado.innerHTML = 'El MCD entre ' + document.getElementById("e10numero1").value + ' y ' + document.getElementById("e10numero2").value + ' es: <br><br>' + e10numero2
    } else {
        Toast.fire({
            type: 'error',
            title: 'Los numeros deben ser enteros positivos'
        })
    }
}

function e11CalcularPrimo() {
    e11resultado = document.getElementById("e11resultado")
    e11resultado.innerHTML = ""
    var e11numero = document.getElementById("e11numero").value;
    e11contador = 0;
    for (i = 1; i <= e11numero; i++) {
        if (e11numero % i == 0) {
            e11contador = e11contador + 1;
            if (e11contador == 2) {
                e11resultado.innerHTML = e11numero + ' Es primo';
            }
            else if (e11contador != 2) {
                e11resultado.innerHTML = e11numero + ' No es primo';
            }
        }
    }
}

function e12CalcularSuma() {
    e12resultado = document.getElementById("e12resultado")
    e12resultado.innerHTML = ""
    var e12n = document.getElementById("e12n").value;
    var e12contador = 0;
    if (e12n > 0 && (e12n % 1) == 0) {
        for (let i = 1; i < (parseInt(e12n) + 1); i++) {
            e12contador += parseFloat(1 / i);
        }
        e12resultado.innerHTML = 'Para ' + e12n + ' terminos, la suma es: <br> ' + parseFloat(e12contador)
    } else {
        Toast.fire({
            type: 'error',
            title: 'El valor de N debe ser un entero positivo'
        })
    }
}

function e13CalcularSuma() {
    e13resultado = document.getElementById("e13resultado")
    e13resultado.innerHTML = ""
    var e13n = document.getElementById("e13n").value;
    var e13contador = 0;
    if (e13n > 0 && (e13n % 1) == 0) {
        for (let i = 1; i <= parseInt(e13n); i++) {
            e13contador += parseFloat(i / (Math.pow(2, i)));
        }
        e13resultado.innerHTML = 'Para ' + e13n + ' terminos, la suma es: <br> ' + parseFloat(e13contador)
    } else {
        Toast.fire({
            type: 'error',
            title: 'El valor de n debe ser un entero positivo'
        })
    }
}

function e14ImprimirLineas() {
    e14lineas = (document.getElementById("e14lineas").value);
    e14resultado = document.getElementById("e14resultado")
    e14resultado.innerHTML = ""
    var lineas = "";
    if (e14lineas > 0 && (e14lineas % 1 == 0)) {
        for (let index = 1; index <= e14lineas; index++) {
            for (let i = 0; i < index; i++) {
                lineas += "*"
            }
            lineas += '<br>';
        }
        e14resultado.innerHTML = lineas
    } else {
        Toast.fire({
            type: 'error',
            title: 'El valor de n debe ser un entero positivo'
        })
    }
}

function e15CalcularPerfectos(){
    e15resultado = document.getElementById("e15resultado")
    e15limite = (document.getElementById("e15limite").value);
    e15resultado.innerHTML = ""
    var e15divisores = [];
    var e15numeroperfectos = [];
    for (j = 2; j <= e15limite; j++) {       
        i = 1;
        e15sumdiv = 0;
        e15divisores.splice(0, e15divisores.length);
        for (i = 1; i < j; i++) {
            if ((j % (i)) === 0) {
                e15divisores.push(i)
                e15sumdiv = e15divisores.reduce(sumarterminos, 0)
            }
        }
        if (e15sumdiv === j) {
            e15numeroperfectos.push(j)
        }
    }
    e15resultado.innerHTML = 'Los numeros perfectos son entre 0 y : '+e15limite+' son <br> ' + e15numeroperfectos
}

function e16CalcularNTerminos(){
    e16resultado = document.getElementById("e16resultado")
    e16valor = (document.getElementById("e16valor").value);
    e16resultado.innerHTML = ""
    var e16suma = 0;
    for (i = 0; e16suma <= e16valor; i++) {
        e16suma = e16suma + i;
        if(e16valor==1 || e16valor==0){
            e16resultado.innerHTML = 'El numero N es ' + e16valor 
         } else if (e16suma > e16valor) {
            e16resultado.innerHTML = 'El numero N es ' + i
            i = e16suma;
        } 
    }
}

function e17LlenarN() {
    e17llenarterminos = document.getElementById("e17llenarterminos")
    e17llenarterminos.innerHTML = ""
    var e17nterminos = document.getElementById("e17nterminos").value;
    var e17texto = "";
    if (e17nterminos > 0 && ((e17nterminos % 1) == 0)) {
        for (let index = 0; index < e17nterminos; index++) {
            e17texto += '' +
                '<div class="form-group row">' +
                '<label for="nota1" class="col-sm-3 col-form-label">Termino ' + (index + 1) + '</label>' +
                '<div class="col-sm-9">' +
                '<input type="number" class="form-control" id="e17termino' + index + '"' +
                'placeholder="Ingrese el numero">' +
                '</div>' +
                '</div>'
        }
        e17texto += '<br><center><button type="button" onclick="e17CalcularMayorMenorMedia()"' +
            'class="btn btn-outline-success">Calcular</button></center>'
        e17llenarterminos.innerHTML = e17texto
    } else {
        Toast.fire({
            type: 'error',
            title: 'el numero de terminos debe ser positvo mayor que 0'
        })
    }
}

function e17CalcularMayorMenorMedia() {
    e17resultado = document.getElementById("e17resultado")
    var e17nterminos = document.getElementById("e17nterminos").value;
    e17resultado.innerHTML = ""
    var e17terminos = [];
    for (let index = 0; index < e17nterminos; index++) {
        e17terminos[index] = parseFloat(document.getElementById("e17termino" + index).value);
    }

    var e17mayor = e17terminos[0];
    var e17menor = e17terminos[0];
    var e17media = 0;

    for (let index = 0; index < e17terminos.length; index++) {
        if (e17terminos[index] > e17mayor)
            e17mayor = e17terminos[index];
    }

    for (let index = 0; index < e17terminos.length; index++) {
        if (e17terminos[index] < e17menor)
            e17menor = e17terminos[index];
    }

    for (let index = 0; index < e17terminos.length; index++) {
        e17media = e17media + e17terminos[index];
    }
    e17media = e17media / e17terminos.length;
    e17resultado.innerHTML = 'El mayor es ' + e17mayor + '<br> El menor es ' + e17menor + '<br> La media es ' + e17media;

}