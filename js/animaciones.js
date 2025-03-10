document.addEventListener("DOMContentLoaded", function(){
    const mostrarLogin = document.getElementById("mostrarLogin");
    const mostrarRegistro = document.getElementById("mostrarRegistro");
    const formularioLogin = document.getElementById("formulario-login");
    const formularioRegistro = document.getElementById("formulario-registro");
    const contenedorForms = document.getElementById("contenedor-forms");

    mostrarLogin.addEventListener("click", (e)=>{
        e.preventDefault();
        contenedorForms.classList.remove("oculto");
        formularioLogin.classList.toggle("oculto");
        formularioRegistro.classList.add("oculto");

        if (formularioLogin.classList.contains("oculto")) {
            contenedorForms.classList.add("oculto");
        }
    });

    mostrarRegistro.addEventListener("click", (e)=>{
        e.preventDefault();
        contenedorForms.classList.remove("oculto");
        formularioRegistro.classList.toggle("oculto");
        formularioLogin.classList.add("oculto");

        if (formularioRegistro.classList.contains("oculto")) {
            contenedorForms.classList.add("oculto");
        }
    });

    document.addEventListener("click", (event) => {
        if(!event.target.closest("#contenedor-forms") && !event.target.closest(".contenedor-Usuario")){
            formularioLogin.classList.add("oculto");
            formularioRegistro.classList.add("oculto");
            contenedorForms.classList.add("oculto");
        }
    });
});