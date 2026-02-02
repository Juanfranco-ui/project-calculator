# Calculadora Web - Proyecto The Odin Project

Este proyecto es una calculadora funcional desarrollada con **HTML5**, **CSS3** y **JavaScript** vainilla. La aplicación permite realizar operaciones aritméticas básicas a través de una interfaz limpia y responsiva.

## Características y Funcionalidad

* **Lógica de Operaciones:** El motor de la calculadora utiliza una función `operate` que gestiona las cuatro operaciones básicas (suma, resta, multiplicación y división) mediante un flujo de control `switch`.
* **Manejo de Estados:** El script rastrea el primer número, el segundo número y el operador seleccionado como variables independientes. Esto permite que la calculadora actualice el contenido del visor dinámicamente según la entrada del usuario.
* **Encadenamiento de Cálculos:** La lógica implementada permite realizar cálculos continuos. Al presionar un operador después de haber ingresado dos números, la aplicación resuelve la operación pendiente y utiliza el resultado como base para el siguiente cálculo.
* **Interfaz de Usuario (UI):** * Diseño oscuro con componentes visuales responsivos mediante el uso de **Flexbox** y **Media Queries**.
    * Ordenamiento de botones personalizado mediante la propiedad `order` de CSS para mantener una estructura lógica en el HTML mientras se ajusta la posición visual.
    * Efectos de interacción (`hover` y `active`) para mejorar la experiencia táctil y visual.

## Estructura del Código

* **`index.html`**: Define la estructura del DOM, incluyendo el visor de resultados y los contenedores de botones.
* **`style.css`**: Contiene toda la estilización, manejo de colores y la adaptabilidad para dispositivos móviles.
* **`calculator.js`**: Gestiona los eventos de clic, la conversión de tipos de datos (Strings a Numbers) y la lógica matemática detrás de cada operación.