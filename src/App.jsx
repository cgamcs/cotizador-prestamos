import { useState, useEffect } from "react"
import Header from "./components/Header"
import { Minus, Plus } from "lucide-react"
import Button from "./components/Button"
import { formatearDinero, calcularTotalPagar, calcularMensuales } from "./helpers"

function App() {
  const [cantidad, setCantidad] = useState(10000)
  const [meses, setMeses] = useState(6)
  const [total, setTotal] = useState(0)
  const [mensuales, setMensuales] = useState(0)

  useEffect(() => {
    const resultadoTotalPagar = calcularTotalPagar(cantidad, meses)
    setTotal(resultadoTotalPagar)

    const resultadoMensualesPagar = calcularMensuales(resultadoTotalPagar, meses)
    setMensuales(resultadoMensualesPagar)
  }, [cantidad, meses])

  const MIN = 0
  const MAX = 50000
  const STEP = 100

  function handleChange(e) {
    setCantidad(+e.target.value)
  }

  function handleClickDecremento() {
    const valor = cantidad - STEP

    if (valor < MIN) {
      alert('Cantidad no valida')
      return
    }

    setCantidad(valor)
  }

  function handleClickIncremento() {
    const valor = cantidad + STEP

    if (valor > MAX) {
      alert('Cantidad no valida')
      return
    }

    setCantidad(valor)
  }

  return (
    <>
      <div className="my-10 max-w-lg mx-auto bg-white shadow-xl p-10 rounded-lg">
        <Header />

        <div className="flex w-full justify-between my-7">
          <Button
            operador={<Minus />}
            fn={handleClickDecremento}
          />
          <Button
            operador={<Plus />}
            fn={handleClickIncremento}
          />
        </div>

        <input
          type="range"
          name=""
          id=""
          className="w-full h-6 bg-gray-200 accent-lime-500 hover:accent-lime-600"
          onChange={handleChange}
          min={MIN}
          max={MAX}
          step={STEP}
          value={cantidad}
        />

        <p className="text-center my-10 text-4xl font-extrabold text-indigo-600">
          {formatearDinero(cantidad)}
        </p>

        <h2 className="text-2xl font-extrabold text-gray-600 text-center">
          Elige un <span className="text-indigo-600">plazo</span> a pagar.
        </h2>

        <select
          name=""
          id=""
          className="mt-10 w-full p-2 bg-white border border-gray-300 rounded-lg text-center text-xl font-bold text-gray-600"
          value={meses}
          onChange={e => setMeses(+e.target.value)}
        >
          <option value="6">6 meses</option>
          <option value="12">12 meses</option>
          <option value="18">18 meses</option>
        </select>

        <div className="my-5 space-y-3 bg-gray-50 p-5 ">
          <h2 className="text-2xl font-extrabold text-gray-600 text-center">
            Resumen <span className="text-indigo-600">de pagos.</span>
          </h2>

          <p className="text-xl text-gray-500 text-center font-bold">{meses} Meses</p>
          <p className="text-xl text-gray-500 text-center font-bold">{formatearDinero(total)} Total a pagar</p>
          <p className="text-xl text-gray-500 text-center font-bold">{formatearDinero(mensuales)} Mensuales</p>
        </div>
      </div>
    </>
  )
}

export default App
