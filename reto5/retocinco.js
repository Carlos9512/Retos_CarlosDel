Vue.component('modal', {
    template: '#modal-template'
})

let factura = new Vue({
    el: '#factura',
    data: {
        showModal: false,
        idmostrar: 0,
        nombre: '',
        cedula: '',
        nombreproducto: '',
        idbuscar: '',
        idproducto: '',
        precio: '',
        iva: '',
        cantidad: '',
        fecha: '',
        subtotal: '',
        total: '',
        descuento: '',
        anotaciones: '',
        correo: '',
        gtotal: 0,
        contador: 0,
        productos: []
    },
    filters: {
        numero: function (x) {
            return Number.parseFloat(x).toFixed(2);
        }
    },
    methods: {
        mostrar: function (id) {
            this.showModal = true
            let index = productos.findIndex((p) => {
                return p.idproducto == id
            })
            this.idmostrar = index
        },
        eliminar: function (id, restarTotal) {
            this.gtotal -= Number.parseFloat(restarTotal).toFixed(2)
            let index = productos.findIndex((p) => {
                return p.idproducto == id
            }
            )
            this.productos.splice(index, 1)
        },

        submit: function () {
            nombre = this.nombre
            cedula = this.cedula
            correo = this.correo
            nombreproducto = this.nombreproducto
            idproducto = this.idproducto
            precio = this.precio
            fecha = new Date().getDate()
                + "/" +
                (new Date().getMonth() + 1)
                + "/" +
                new Date().getFullYear()
                + " " +
                new Date().getHours()
                + ":" +
                new Date().getMinutes()
                + ":" +
                new Date().getSeconds()
            console.log(fecha)
            descuento = this.descuento
            cantidad = this.cantidad
            subtotal = precio * cantidad
            iva = (0.19 * subtotal)
            total = (((subtotal) + (iva)) - ((subtotal) * (descuento / 100))).toFixed(2)
            anotaciones = this.anotaciones
            productos = this.productos
            this.gtotal += parseFloat(total)
            console.log(this.gtotal)
            productos.push({
                nombre,
                cedula,
                precio,
                descuento,
                iva,
                correo,
                nombreproducto,
                idproducto,
                fecha,
                cantidad,
                subtotal,
                total,
                anotaciones
            })
            this.nombre =
                this.cedula =
                this.correo =
                this.nombreproducto =
                this.idproducto =
                this.precio =
                this.cantidad =
                this.descuento = ''
        },
    }
})