### Proyect React Task List

## ¿Qué es mi producto y para que sirve?

En resumen, la aplicación permite al usuario llevar una lista de tareas y realizar las operaciones básicas de agregar, editar y eliminar tareas de manera fácil e intuitiva.

## ¿Cuáles son las funcionalidades más importantes y porque los usuarios las usarían?

La aplicación consta de dos componentes principales: el componente "TaskList" y el componente "TaskForm".

El componente TaskList es responsable de mostrar la lista de tareas. Cada tarea se muestra en una fila de una tabla que muestra su título y su estado (completado o pendiente). Junto a cada tarea hay dos botones: uno para editar la tarea y otro para eliminarla de la lista. Cuando se hace click en el botón de editar, se abre el componente TaskForm para permitir la edición de la tarea.

El componente TaskForm es responsable de mostrar el formulario para editar una tarea. El formulario tiene dos campos: uno para el título de la tarea y otro para su estado (completado o pendiente). Cuando se agrega una tarea nueva, el formulario está vacío. Cuando se edita una tarea existente, los campos del formulario se llenan con los valores actuales de la tarea.

Ambos componentes interactúan con un estado global llamado "tasks" que contiene una matriz de objetos que representan las tareas. Cada objeto de tarea tiene un ID único, un título y un estado.

Cuando se agrega una tarea nueva, se crea un nuevo objeto de tarea y se agrega a la matriz "tasks". Cuando se edita una tarea existente, se actualiza el objeto de tarea correspondiente en la matriz "tasks". Cuando se elimina una tarea, se elimina el objeto de tarea correspondiente de la matriz "tasks".

### Autor
Yesid camilo Mora Barbosa