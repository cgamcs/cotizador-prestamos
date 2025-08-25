const formatearDinero = (valor) => {
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    })

    return formatter.format(valor)
}

const calcularTotal = (cantidad, meses) => {
    let total

    // Mientras mayor es la cantidad solicitada menor es el intrés
    switch (cantidad) {
        case 10000:
            total = cantidad * 1.5
            break

        case 20000:
            total = cantidad * 1.3
            break
        case 30000:
            total = cantidad * 1.2
            break

        case 40000:
            total = cantidad * 1.1
            break

        default:
            break
    }

    switch (meses) {
        case 6:
            total *= 1.2
            break

        case 6:
            total *= 1.3
            break

        case 6:
            total *= 1.4
            break

        default:
            break
    }

    return total
}

export {
    formatearDinero,
    calcularTotal
}