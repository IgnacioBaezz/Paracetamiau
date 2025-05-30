
const temas = {
    rcp: {
        titulo: "Guía paso a paso para aprender RCP",
        video: "https://www.youtube.com/embed/e05ZDPm6XCQ",
        descripcion: "Aprende a realizar reanimación cardiopulmonar básica. Este procedimiento puede salvar vidas.",
        texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dapibus risus velit, sed vehicula ipsum condimentum et. Phasellus quis augue pretium, vehicula enim at, lacinia sem. Morbi venenatis pellentesque iaculis. Maecenas faucibus tempor lacus, et ultrices tellus iaculis sed. Donec tristique lectus id fermentum auctor. Nunc iaculis nisi vel tortor accumsan, nec condimentum nulla commodo. Ut luctus massa eu eros dignissim molestie. Sed in ligula sed enim facilisis eleifend. Suspendisse potenti. Aenean nec felis a augue tincidunt aliquet. Morbi id nunc ac enim finibus convallis. Donec euismod, nisi vel consectetur interdum, nisl nisi aliquam erat, nec facilisis leo justo non est. Sed at dolor in quam sodales efficitur. Integer sed ligula id odio commodo fringilla. Proin ac ex a enim congue tincidunt.",
        texto1: "Etiam ornare erat in augue mollis lacinia. In id metus sit amet risus fermentum porta non sed felis. Duis a dui quis nibh fermentum lobortis. Fusce scelerisque, justo at sodales venenatis, massa nunc consequat mi, ut ultrices massa est ut turpis. Mauris porta congue dolor a vehicula.",
        texto2: "Fusce ac velit condimentum, semper lectus sit amet, ullamcorper metus. Donec sit amet massa mollis massa fermentum maximus. Nulla eget felis risus. Cras gravida semper sollicitudin. Sed ornare quam orci, vel interdum dolor rhoncus non. Donec auctor est dui, nec semper sapien bibendum eget. Proin commodo ipsum vel mi vestibulum, sed placerat sapien feugiat. Nunc sed felis dictum, tempus purus pretium, tempor nibh. Suspendisse placerat varius ullamcorper. Maecenas vel purus sapien.",
    },

};

function mostrarContenido(clave, boton) {
    const contenedor = document.getElementById("contenido-tema");
    const tema = temas[clave];

    // Oculta el contenido inicial si existe
    const bloqueInicial = document.getElementById("bloque-inicial");
    if (bloqueInicial) {
        bloqueInicial.style.display = "none";
    }

    contenedor.innerHTML = `
<h2 class="d-flex justify-content-center my-4 bg-color8 w-75 mx-auto p-4 rounded opacity-75 text-uppercase shadow-sm">${tema.titulo}</h2>

<div class="ratio ratio-16x9 my-3">
    <iframe src="${tema.video}" frameborder="0" allowfullscreen></iframe>
</div>

<div class="d-flex justify-content-center my-4 bg-color8 w-100 mx-auto p-4 rounded opacity-75 shadow-sm">
    <p class="lead fw-semibold">${tema.descripcion}</p>
</div>

<div class="bg-color1 w-100 mx-auto p-4 rounded shadow-sm">
    <p>${tema.texto}</p>
</div>

<div class="container py-4">
    <div class="row justify-content-center g-4">
        <!-- Fila superior -->
        <div class="col-md-5">
            <div class="bg-color8 text-white p-3 text-center rounded">
                <p>${tema.texto1}</p>
            </div>
        </div>
        <div class="col-md-5">
            <div class="bg-color8 text-white p-3 text-center rounded">
                <p>${tema.texto1}</p>
            </div>
        </div>

            <!-- Fila inferior -->
        <div class="col-md-5">
            <div class="bg-color8 text-white p-3 text-center rounded">
                <p>${tema.texto1}</p>
            </div>
        </div>
        <div class="col-md-5">
            <div class="bg-color8 text-white p-3 text-center rounded">
                <p>${tema.texto1}</p>
            </div>
        </div>
    </div>
</div>

<div class="bg-color7 w-100 mx-auto p-4 rounded shadow-sm opacity-75">
    <p>${tema.texto2}</p>
</div>

`;

    document.querySelectorAll('.menu-item').forEach(el => el.classList.remove('activo'));
    boton.classList.add('activo');
}

function mostrarContenidoDesdeMovil(clave, link) {
    // Llamamos a la función principal, sin aplicar clase 'activo'
    mostrarContenido(clave, link);

    // Cerramos el menú móvil
    const offcanvasElement = document.getElementById('sidebarMenu');
    const offcanvas = bootstrap.Offcanvas.getInstance(offcanvasElement);
    if (offcanvas) {
        offcanvas.hide();
    }
}


