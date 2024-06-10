const bar = document.querySelector(".fa-bars");
const menu = document.querySelector(".menu");

bar.addEventListener("click", () => {
    menu.classList.toggle("show-menu");
});

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('productForm');

    form.addEventListener('submit', (event) => {
        // Obtener los valores de los campos
        const nombre = form.querySelector('#nombre').value.trim();
        const precio = form.querySelector('#precio').value.trim();
        const inventario = form.querySelector('#inventario').value.trim();

        // Inicializar variable para saber si hay errores
        let isValid = true;

        // Verificar que todos los campos estén llenos
        if (!nombre) {
            alert('El campo Nombre es obligatorio.');
            isValid = false;
        }

        if (!precio) {
            alert('El campo Precio es obligatorio.');
            isValid = false;
        }

        if (!inventario) {
            alert('El campo Inventario es obligatorio.');
            isValid = false;
        }

        // Prevenir el envío del formulario si hay errores
        if (!isValid) {
            event.preventDefault();
        }
    });
});
