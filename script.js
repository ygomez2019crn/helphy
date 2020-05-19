//filtro de busqueda de texto
function funcionfiltro() {
    var input, filter, ul, li, a, i, txtValue;

    input = document.getElementById("filtro");
    filter = input.value.toUpperCase();
    ul = document.getElementById("lista");
    li = ul.getElementsByTagName("span");

    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("p")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

//filtro de busqueda de texto de version pc
function funcionfiltroPc() {
    var input, filter, ul, li, a, i, txtValue;

    input = document.getElementById("filtroPc");
    filter = input.value.toUpperCase();
    ul = document.getElementById("lista");
    li = ul.getElementsByTagName("span");

    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("p")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}



//dropdown del boton de tipos de alimentos
var dropdowned = false

function dropdown() {

    if (dropdowned) {
        document.getElementById('dropdown').style.display = "none";
        document.getElementById('triangulo').style.rotate = "0deg";
        console.log("DROPDOWN FILTRO : No desplegado");
        dropdowned = false;

    } else {
        document.getElementById('dropdown').style.display = "block";
        document.getElementById('triangulo').style.rotate = "90deg";
        console.log("DROPDOWN FILTRO : Desplegado");
        dropdowned = true;
    }
}

function select(tipo) {
    var filter, ul, li, a, i, txtValue;

    // Definimos el filtro (imagen TIPO). Tipo es el parametro pasado en el html
    filter = 'imagen ' + tipo;
    // Vamos a buscar la lista de productos
    ul = document.getElementById("lista");
    li = ul.getElementsByTagName("span");

    console.log('FILTRO: ' + filter)
    // Si es ALL los muestra todos y sale de la función
    if (tipo == 'all'){
        for (i = 0; i < li.length; i++) {
            // Busca el elemento que es el segundo div
            a = li[i].getElementsByTagName("div")[1];
            // Establece txtValue con el valor de la clase (imagen fruta o imagen vegetal)
            txtValue = a.getAttribute("class")
            // Se muestra
            li[i].style.display = "inline";
        }
        document.getElementById('dropdown').style.display = "none";
        document.getElementById('triangulo').style.rotate = "0deg";
        dropdowned = false;
        //Se para
        return;
    }

    // Por cada producto:
    for (i = 0; i < li.length; i++) {
        // Busca el elemento que es el segundo div
        a = li[i].getElementsByTagName("div")[1];
        // Establece txtValue con el valor de la clase (imagen fruta o imagen vegetal)
        txtValue = a.getAttribute("class")
        // Si el filtro es igual a el tipo de fruta:
        if (txtValue == filter) {
            // Se muestra
            li[i].style.display = "";
        } 
        else {
            // No se muestra
            li[i].style.display = "none";
        }
        // Pasa a la siguiente fruta
    }
    // Se han acabado las frutas que recorrer
    //funcion dropmenu onclick de 'tipo'
    document.getElementById('dropdown').style.display = "none";
    document.getElementById('triangulo').style.rotate = "0deg";
    dropdowned = false;
}

//canvio de estado de un boton
function activebuton() {
    console.log("BOTÓN: Activado");
    document.getElementById('continuetxt').style.backgroundColor = "#2EDA94";
    document.getElementById('continuetxt').style.color = "white";
}

//desaparece el tutorial de la pantalla alimento.html
function dismisstut() {
    console.log("TUTORIAL: SALIR DEL TUTORIAL");
    document.getElementById("tarjeta-tuto").style.display = "none";
    document.getElementById("popup-tuto").style.display = "none";
    document.getElementById("popup-tuto").style.position = "static";
    document.getElementById("lista").style.overflow = "auto";
    document.getElementById("lista").style.position = "static";
}

//borde alimentos verde seleccionados
function seleccionarAlimentos(producto) {
    var lista, span, a, i, texto, marcado;
    lista = document.getElementById("lista");
    span = lista.getElementsByTagName("span");
    
    for (i = 0; i < span.length; i++) {
        a = span[i].getElementsByTagName("div")[1];
        texto = a.getAttribute("id")
        marcado = span[i].getElementsByTagName("div")[0].style.boxShadow == "rgba(0, 0, 0, 0.25) 0px 5px 10px, rgb(46, 218, 148) 0px 0px 0px 2px inset";

        if (texto == producto) {
            if (marcado == false){
                span[i].getElementsByTagName("div")[0].style.boxShadow="rgba(0, 0, 0, 0.25) 0px 5px 10px, rgb(46, 218, 148) 0px 0px 0px 2px inset";
                console.log('SELECCIÓN: El producto ' + producto + ' ha sido seleccionado')
                document.getElementById('bolita').style.visibility="visible";
                document.getElementById('txtboton').style.backgroundColor="#2EDA94";
            } else {
                span[i].getElementsByTagName("div")[0].style.boxShadow="rgba(0, 0, 0, 0.25) 0px 5px 10px, rgb(255, 255, 255) 0px 0px 0px 2px inset";
                console.log('SELECCIÓN: El producto ' + producto + ' ha sido desseleccionado')
            }
        } 
    }
}

//desplegable de todos los granjeros en version pc

function desplegablegranjeros(){
    console.log("GRANJEROS: Desplegado");
    document.getElementById("container_granjeros").style.display="inline"
}

//suma y resta de los botones

