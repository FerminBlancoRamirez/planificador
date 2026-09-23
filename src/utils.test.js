import { formatearFecha } from './utils.js'
import { describe, it, expect } from 'vitest'
import { calcularPeso } from './utils.js'

describe('formatearFecha', () => {
  it('formatea correctamente una fecha simple', () => {
    const fecha = new Date(2026, 8, 21, 14, 33)
    const resultado = formatearFecha(fecha)
    expect(resultado).toBe('21/09/2026 14:33')
  })
})

describe('Calcular peso', ()=> {
  it('Calcular un peso a partir de unos minutos dados', ()=> {
    let peso = calcularPeso(5)
    expect(peso).toBe('Baja')
    peso = calcularPeso(25)
      expect(peso).toBe('Media')
      peso = calcularPeso(45)
      expect(peso).toBe('Alta')
  })
} )
