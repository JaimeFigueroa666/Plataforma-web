// custom.js
document.addEventListener('DOMContentLoaded', function() {
    // Elementos del DOM
    const notificarBtn = document.getElementById('notificar');
    const verNotificacionBtn = document.getElementById('vernotificacion');
    const tituloInput = document.getElementById('titulo');
    const mensajeInput = document.getElementById('mensaje');
    const iconoInput = document.getElementById('icono');

    // Verificar si el navegador soporta la API de Notificaciones
    if (!('Notification' in window)) {
        alert('Este navegador no soporta las notificaciones de escritorio');
        notificarBtn.disabled = true;
        verNotificacionBtn.disabled = true;
        return;
    }

    // Solicitar permiso para notificaciones al cargar la página
    function solicitarPermiso() {
        if (Notification.permission !== 'denied') {
            Notification.requestPermission().then(permission => {
                if (permission === 'granted') {
                    console.log('Permiso para notificaciones concedido');
                }
            });
        }
    }

    // Llamar a la función de permiso al cargar
    solicitarPermiso();

    // Función para mostrar notificación
    function mostrarNotificacion(titulo, mensaje, icono = null) {
        if (Notification.permission === 'granted') {
            const opciones = {
                body: mensaje,
                icon: icono || null,
                vibrate: [200, 100, 200], // Patrón de vibración para móviles
                tag: 'notificacion-personalizada' // Para evitar notificaciones duplicadas
            };

            new Notification(titulo, opciones);
            
            // También mostramos una alerta en caso de que la notificación no sea visible
            console.log(`Notificación enviada: ${titulo} - ${mensaje}`);
        } else if (Notification.permission !== 'denied') {
            Notification.requestPermission().then(permission => {
                if (permission === 'granted') {
                    mostrarNotificacion(titulo, mensaje, icono);
                }
            });
        }
    }

    // Evento para el botón "Enviar Notificación"
    notificarBtn.addEventListener('click', function() {
        const titulo = tituloInput.value.trim() || 'Nueva Notificación';
        const mensaje = mensajeInput.value.trim() || '¡Tienes un nuevo mensaje!';
        const icono = iconoInput.value.trim() || null;

        mostrarNotificacion(titulo, mensaje, icono);
    });

    // Evento para el botón "Ver Notificación" (simulación instantánea)
    verNotificacionBtn.addEventListener('click', function() {
        const titulo = tituloInput.value.trim() || 'Nueva Notificación';
        const mensaje = mensajeInput.value.trim() || '¡Tienes un nuevo mensaje!';
        const icono = iconoInput.value.trim() || null;

        // Mostrar notificación de prueba
        if (Notification.permission === 'granted') {
            mostrarNotificacion(titulo, mensaje, icono);
        } else {
            alert(`Vista previa de notificación:\n\n${titulo}\n${mensaje}`);
            console.log('Notificación simulada (sin permisos):', { titulo, mensaje, icono });
        }
    });

    // Notificación de bienvenida cuando se concede el permiso
    if (Notification.permission === 'granted') {
        setTimeout(() => {
            mostrarNotificacion(
                'Notificaciones activadas', 
                'Ahora recibirás notificaciones de este sitio.',
                'https://cdn-icons-png.flaticon.com/512/2489/2489073.png'
            );
        }, 1500);
    }
});