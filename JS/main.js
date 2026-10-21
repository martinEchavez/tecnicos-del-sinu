// 🔧 CONFIGURACIÓN CENTRALIZADA DE CONTACTO - Cambiar solo aquí
// Mientras phone esté vacío la página funciona en modo demostración:
// los botones de llamar y WhatsApp avisan que el número llega pronto.
const CONTACT_CONFIG = {
    phone: '',               // ej. '3001234567'
    phoneInternational: '',  // ej. '+573001234567'
    whatsappMessages: {
        general: 'Hola, necesito servicio técnico en Montería. ¿Me pueden ayudar?',
        lavadora: 'Hola, mi lavadora tiene una falla. Quiero agendar una revisión.',
        tv: 'Hola, mi televisor tiene una falla. Quiero agendar una revisión.',
        estufa: 'Hola, mi estufa tiene una falla. Quiero agendar una revisión.'
    }
};

// Muestra el aviso "número disponible pronto" unos segundos
function showPendingNotice(event) {
    event.preventDefault();
    const notice = document.getElementById('aviso-contacto');
    notice.classList.remove('hidden');
    clearTimeout(showPendingNotice.timer);
    showPendingNotice.timer = setTimeout(() => notice.classList.add('hidden'), 2500);
}

function initializeContactLinks() {
    const telLinks = document.querySelectorAll('a[data-tel]');
    const waLinks = document.querySelectorAll('a[data-wa]');

    if (!CONTACT_CONFIG.phone) {
        document.getElementById('demo-banner').classList.remove('hidden');
        [...telLinks, ...waLinks].forEach(link => {
            link.removeAttribute('target');
            link.setAttribute('href', '#contacto');
            link.setAttribute('aria-disabled', 'true');
            link.classList.add('contacto-pendiente');
            link.addEventListener('click', showPendingNotice);
        });
        return;
    }

    telLinks.forEach(link => {
        link.href = `tel:${CONTACT_CONFIG.phoneInternational || CONTACT_CONFIG.phone}`;
    });
    document.querySelectorAll('.phone-number').forEach(el => {
        el.textContent = CONTACT_CONFIG.phone;
    });
    // WhatsApp usa el formato internacional sin el +
    const whatsappNumber = CONTACT_CONFIG.phoneInternational.replace('+', '');
    waLinks.forEach(link => {
        const message = CONTACT_CONFIG.whatsappMessages[link.dataset.wa] || CONTACT_CONFIG.whatsappMessages.general;
        link.href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    });
}

initializeContactLinks();

// Mapa: el iframe de Google Maps (~400 KB de JS) se carga solo cuando lo tocan
document.querySelectorAll('[data-map-embed]').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const iframe = document.createElement('iframe');
        iframe.src = link.dataset.mapEmbed;
        iframe.className = link.dataset.mapClass;
        iframe.title = 'Mapa de Montería';
        iframe.referrerPolicy = 'strict-origin-when-cross-origin';
        iframe.allowFullscreen = true;
        link.replaceWith(iframe);
    });
});
