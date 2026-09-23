import { calcularPeso, formatearFecha } from './utils.js'
import './style.css'
import confetti from 'canvas-confetti'
import.meta.env.VITE_VERSION

const boton = document.getElementById('añadir')
const input = document.getElementById('texto')
const inputMin = document.getElementById('min')
const lista = document.getElementById('lista')

boton.addEventListener('click', guardarPlan)

function guardarPlan(e) {
  e.preventDefault()
  const minutos = inputMin.value
  
  let peso = calcularPeso(minutos)

  const fechaHoy = formatearFecha(new Date())

  const li = document.createElement('li')

  li.textContent =
    input.value + ' - ' + fechaHoy + ' ' + minutos + ' (' + peso + ')'
  lista.appendChild(li)
  input.value = ''

  confetti({
    particleCount: 100,
    startVelocity: 30,
    spread: 360,
    origin: {
      x: Math.random(),
      y: Math.random() - 0.2,
    },
  })
}
