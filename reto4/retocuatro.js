const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000
});

var pokemons = []
var variantes = []
var habilidades = []

function getP(url) {
    return new Promise(function (resolve, reject) {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4) {
                if (this.status == 200) {
                    resolve(JSON.parse(this.responseText));
                } else {
                    reject("Error: 🤮" + this.status);
                }
            }
        };
        xhttp.open("GET", url);
        xhttp.send();
    });
}
window.addEventListener('load', inicio, false);

function inicio() {
    mostrarPokemon()
    mostrarVariantes()
    mostrarHabilidades()
}

function mostrarPokemon() {
    pokemons = []
    mostrarPk = document.getElementById("mostrarPk")
    mostrarPk.innerHTML = ""
    offset = document.getElementById('offset').value;
    limit = document.getElementById('limit').value;
    imprimir = ""
    if (parseInt(limit) > 0) {
        if ((parseInt(offset) + parseInt(limit)) < 808) {
            getP("https://pokeapi.co/api/v2/pokemon?offset=" + offset + "&limit=" + limit + "").then(function (data) {
                data.results.forEach((pokemon, index) => {
                    pokemons.push(pokemon)
                    imprimir +=
                        '<div class="col-4 col-xs-4 col-sm-4 col-md-3 col-lg-3 col-xl-2">' +
                        '<div class="shadow p-3 mb-5 bg-white rounded">' +
                        '<a onclick="verpokemon(' + (index + 1 + parseInt(offset)) + ')">' +
                        '<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + (index + 1 + parseInt(offset)) + '.png" class="card-img-top" alt="...">' +
                        '<br>' +
                        '<center><h6>' + pokemon.name + '</h6></center>' +
                        '</a>' +
                        '</div>' +
                        '</div>'
                });
                mostrarPk.innerHTML = imprimir
            })
        } else {
            Toast.fire({
                type: 'error',
                title: 'El numero maximo de pokemon es 807, no puede superar este limite'
            })
        }
    } else {
        Toast.fire({
            type: 'error',
            title: 'El limite debe ser mayor que 0'
        })
    }
}


function verpokemon(id) {
    modalPokemon = document.getElementById("modalPokemon")
    modalPokemon.innerHTML = ""
    imprimirModalPokemon = ""
    getP("https://pokeapi.co/api/v2/pokemon/" + id + "/").then(function (data) {

        habilidadesPokemon = ""
        estadisticasPokemon = ""
        variantesPokemon = ""
        nombre = data.name
        data.abilities.forEach(habilidad => {
            idHabilidad = habilidad.ability.url.split("/")[6]  
            habilidadesPokemon += '<a href="#" onclick="verHabilidad(' + idHabilidad + ')"><h6>' + habilidad.ability.name + '</h6></a>'
        })
        data.stats.forEach(estadistica => {
            estadisticasPokemon += "<h6>" + estadistica.stat.name + ": " + estadistica.base_stat + "</h6>"
        })

        getP(data.species.url).then(function (especie) {
            especiesPoke = especie.varieties
            if (especiesPoke.length > 1) {
                especiesPoke.forEach((especiePoke, index) => {
                    if (index > 0) {
                        idPokemon = especiePoke.pokemon.url.split("/")[6]    
                        variantesPokemon += '<a href="#" onclick="verpokemon(' + idPokemon + ')"><h6>' + especiePoke.pokemon.name + '</h6></a>'
                    }
                })
            } else {
                variantesPokemon = "<h6>No hay variantes</h6>"
            }

            imprimirModalPokemon =
                '<div class="row">' +
                '<div class="col-3">' +
                '<center><img class="img-fluid" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + id + '.png">' +
                '<h3>' + nombre + '</h3>' +
                '</center>' +
                '</div>' +
                '<div class="col-3">' +
                '<H4>Estadisticas</H4><br>' + estadisticasPokemon +
                '</div>' +
                '<div class="col-3">' +
                '<H4>Habilidades</H4><br>' + habilidadesPokemon +
                '</div>' +
                '<div class="col-3">' +
                '<H4>Variedades</H4><br>' + variantesPokemon +
                '</div>'
            '</div>'

            modalPokemon.innerHTML = imprimirModalPokemon
            $('#modalpoke').modal('show');
        })

    })
}

function buscarPokemon(pokemonBusqueda) {
    mostrarPk.innerHTML = ""
    imprimir = ""
    hay = false
    pokemons.forEach((pokemon, index) => {
        if (pokemon.name.includes(pokemonBusqueda)) {
            hay = true
            imprimir +=
                '<div class="col-4 col-xs-4 col-sm-4 col-md-3 col-lg-3 col-xl-2">' +
                '<div class="shadow p-3 mb-5 bg-white rounded">' +
                '<a onclick="verpokemon(' + (index + 1 + parseInt(offset)) + ')">' +
                '<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + (index + 1 + parseInt(offset)) + '.png" class="card-img-top" alt="...">' +
                '<br>' +
                '<center><h6>' + pokemon.name + '</h6></center>' +
                '</a>' +
                '</div>' +
                '</div>'
        }
    });
    if (!hay) {
        imprimir = "No hay resultados para la busqueda"
    }
    mostrarPk.innerHTML = imprimir
}

function mostrarVariantes() {
    variantes = []
    mostrarVariantes = document.getElementById("mostrarVariantes")
    mostrarVariantes.innerHTML = ""
    imprimirVariante = ""
    getP("https://pokeapi.co/api/v2/pokemon?offset=807&limit=157").then(function (data) {
        data.results.forEach((pokemon, index) => {
            if (index < 90) {
                img = '<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + (index + 10001) + '.png" class="card-img-top" alt="Sin imagen">'
            } else {
                img = "<br><center>Sin Imagen</center><br>"
            }
            variantes.push(pokemon)
            imprimirVariante +=
                '<div class="col-4 col-xs-4 col-sm-4 col-md-3 col-lg-3 col-xl-2">' +
                '<div class="shadow p-3 mb-5 bg-white rounded">' +
                '<a onclick="verpokemon(' + (index + 10001) + ')">' +
                '<br>' + img +
                '<center><h6>' + pokemon.name + '</h6></center>' +
                '</a>' +
                '</div>' +
                '</div>'
        });
        mostrarVariantes.innerHTML = imprimirVariante
    })
}

function buscarVariante(pokemonVariante) {
    mostrarVariantes.innerHTML = ""
    imprimir = ""
    hay = false
    variantes.forEach((variante, index) => {
        if (variante.name.includes(pokemonVariante)) {
            if (index < 90) {
                img = '<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + (index + 10001) + '.png" class="card-img-top" alt="Sin imagen">'
            } else {
                img = "<br><br><center>Sin Imagen</center><br>"
            }
            hay = true
            imprimir +=
                '<div class="col-4 col-xs-4 col-sm-4 col-md-3 col-lg-3 col-xl-2">' +
                '<div class="shadow p-3 mb-5 bg-white rounded">' +
                '<a onclick="verpokemon(' + (index + 10001) + ')">' +
                '<br>' + img +
                '<br>' +
                '<center><h6>' + variante.name + '</h6></center>' +
                '</a>' +
                '</div>' +
                '</div>'
        }
    });
    if (!hay) {
        imprimir = "No hay resultados para la busqueda"
    }
    mostrarVariantes.innerHTML = imprimir
}

function mostrarHabilidades() {
    habilidades = []
    mostrarHabilidades = document.getElementById("mostrarHabilidades")
    mostrarHabilidades.innerHTML = ""
    imprimirHabilidades = ""
    getP("https://pokeapi.co/api/v2/ability?offset=0&limit=224").then(function (data) {
        data.results.forEach((habilidad, index) => {

            habilidades.push(habilidad)
            imprimirHabilidades +=
                '<div class="col-4 col-xs-4 col-sm-4 col-md-3 col-lg-3 col-xl-2">' +
                '<div class="shadow p-3 mb-5 bg-white rounded">' +
                '<a onclick="verHabilidad(' + (index + 1) + ')">' +
                '<center><h4>' + habilidad.name + '</h4></center>' +
                '</a>' +
                '</div>' +
                '</div>'
        });
        mostrarHabilidades.innerHTML = imprimirHabilidades
    })
}

function verHabilidad(id) {
    modalPokemon = document.getElementById("modalPokemon")
    modalPokemon.innerHTML = ""
    imprimirModalPokemon = ""
    imprimirpokemonHabilidad = ""
    getP("https://pokeapi.co/api/v2/ability/" + id + "/").then(function (data) {
        imprimirModalPokemon += 
        imprimirpokemonHabilidad += '<div class="row">'
        data.pokemon.forEach(pokemon=>{
           idPokemon = pokemon.pokemon.url.split("/")[6]
           imprimirpokemonHabilidad +=           
           '<div class="col-3">'+
           '<a onclick="verpokemon(' + idPokemon + ')">' +
           '<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + idPokemon + '.png" class="card-img-top" alt="Sin imagen">'+
           '<center>'+pokemon.pokemon.name+'</center>'+      
           '</a></div>'
           
       })
       imprimirpokemonHabilidad += '</div>'
       imprimirModalPokemon =
                '<center><h1>'+data.name+ '</h1><br>'+
                '<h4>' + data.effect_entries[0].effect + '</h4><br>' +
                '</center>' +
                '<H2>Pokemons</H2>' + imprimirpokemonHabilidad                

            modalPokemon.innerHTML = imprimirModalPokemon
            $('#modalpoke').modal('show');
    })
}

function buscarHabilidad(habilidadBuscar) {
    mostrarHabilidades.innerHTML = ""
    imprimir = ""
    hay = false
    habilidades.forEach((habilidad, index) => {
        if (habilidad.name.includes(habilidadBuscar)) {       
            hay = true
            imprimir +=
                    '<div class="col-4 col-xs-4 col-sm-4 col-md-3 col-lg-3 col-xl-2">' +
                    '<div class="shadow p-3 mb-5 bg-white rounded">' +
                    '<a onclick="verHabilidad(' + (index + 1) + ')">' +
                    '<center><h4>' + habilidad.name + '</h4></center>' +
                    '</a>' +
                    '</div>' +
                    '</div>'       
        }
    });
    if (!hay) {
        imprimir = "No hay resultados para la busqueda"
    }
    mostrarHabilidades.innerHTML = imprimir
}