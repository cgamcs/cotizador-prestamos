const formatearDinero = (valor) => {
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    })

    return formatter.format(valor)
}

const calcularTotalPagar = (cantidad, meses) => {
    let total

    // Mientras mayor es la cantidad solicitada menor es el interés
    switch (true) {
        case (cantidad <= 10000):
            total = cantidad * 1.5
            break

        case (cantidad <= 20000):
            total = cantidad * 1.3
            break

        case (cantidad <= 30000):
            total = cantidad * 1.2
            break

        case (cantidad <= 40000):
            total = cantidad * 1.1
            break

        default:
            total = cantidad // o lo que definas como caso base
            break
    }

    switch (meses) {
        case 6:
            total *= 1.2
            break

        case 6:
            total *= 1.3
            break

        case 18:
            total *= 1.4
            break

        default:
            total *= 1.5
            break
    }

    return total
}

const calcularMensuales = (total, meses) => {
    return total / meses
}

export {
    formatearDinero,
    calcularTotalPagar,
    calcularMensuales
}