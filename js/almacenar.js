document.addEventListener('DOMContentLoaded', () => {


    const input = document.getElementById('item')
    const agregarItemsBoton = document.getElementById('agregar')
    const limpiarItemsBoton = document.getElementById('limpiar')
    const contenedorItems = document.getElementById('contenedor')


    function cargarItems (){
        const listadeItems = JSON.parse(localStorage.getItem('items')) || [];
        contenedorItems.innerHTML = '';
        listadeItems.forEach(item => {
            const li = document.createElement('li'); 
            li.textContent = item; 
            contenedorItems.appendChild(li); 
        }
        )}

    function guardarItems(item) {
        const listadeItems = JSON.parse(localStorage.getItem('items')) || [];
        listadeItems.push(item)
        localStorage.setItem('items', JSON.stringify(listadeItems));
    }

    function limpiarItems () {
        localStorage.removeItem('items');
        cargarItems();
    }

    agregarItemsBoton.addEventListener('click', () => {
        const item = input.value.trim();
        if (item) {  // Verificar que la tarea no esté vacía
            guardarItems(item);  // Guardar la nueva tarea en localStorage
            input.value = '';  // Limpiar el campo de entrada
            cargarItems();  // Volver a cargar la lista de tareas para mostrar la nueva tarea
        }
        })

        limpiarItemsBoton.addEventListener('click', () => {
            limpiarItems();  // Limpiar todas las tareas de localStorage y actualizar la interfaz
        });
        
        // Cargar las tareas al cargar la página
        cargarItems();  // Mostrar las tareas almacenadas cuando se carga la página
    
    })
    