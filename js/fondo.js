const group = document.querySelector('.logo_group')

for (let i = 1; i < 20; i++) {
    const containerId = `iconContainer${i}`
    const container = document.createElement('div')
    container.className = 'iconContainer'
    container.id = containerId
    group.appendChild(container)

    addIcons(containerId)
}

function addIcons(containerId) {
    const iconContainer = document.getElementById(containerId)

    const Unicode = [
        '\uf155', // Signo de dólar
        '\uf77f', // Vape
        '\uf0d6', // Moneda
        '\uf53d', // Botella de vape
        '\uf3d1', // Humo
        '\uf4c0', // Diamante
        '\uf3f9', // Botella de vidrio
        '\uf54e', // Caja registradora
        '\uf2c3', // Pago con tarjeta
        '\uf51e', // Billetes
        '\uf5b2', // Carrito de compras
        '\uf4b0', // Cigarrillo electrónico
        '\uf1c3', // Factura
        '\uf5c3', // Caja fuerte
        '\uf780', // Vapeo
        '\uf559', // Bolsa de dinero
        '\uf219', // Gráfico de ventas
        '\uf5ea', // Caja de cartón (envío)
        '\uf291', // Etiqueta de precio
        '\uf5e2', // Caja abierta
    ];
    
    for (let i = 0; i < 50; i++) {
        const icon = document.createElement('i')
        icon.className = 'icon fas'
        icon.innerHTML = randomIcon(Unicode)
        iconContainer.appendChild(icon)
    }
}

function randomIcon(values) {
    const randomIndex = Math.floor(Math.random() * values.length)
    return values[randomIndex]
}
