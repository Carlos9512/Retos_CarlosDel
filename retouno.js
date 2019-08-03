operacion = ""
Ans = ""
resultado = ""
parentesis = true
function escribir(numero) {

    if (numero == 10) {
        if (parentesis) {
            operacion += "("
        } else {
            operacion += ")"
        }
        parentesis = !parentesis
    } else {
        if (numero == "ans") {
            operacion += Ans
        } else {
            if (numero == "+" || numero == "-" || numero == "*" || numero == "/") {
                var ultimo = operacion.substring(operacion.length - 1);
                if (ultimo == "+" || ultimo == "-" || ultimo == "*" || ultimo == "/") {
                    operacion = operacion.substring(0, operacion.length - 1)
                }
            }
            operacion += numero
        }
    }

    document.getElementById("resultado").value = ""
    document.getElementById("operacion").value = operacion
}

function calcular() {
    resultado = eval(operacion)
    Ans = resultado
    operacion = Ans
    document.getElementById("resultado").value = resultado
}

function del() {
    operacion = operacion.substring(0, operacion.length - 1)
    document.getElementById("operacion").value = operacion
}

function ac() {
    operacion = ""
    resultado = ""
    document.getElementById("operacion").value = ""
    document.getElementById("resultado").value = ""
}