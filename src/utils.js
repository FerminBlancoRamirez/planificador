import dayjs from 'dayjs'

export function formatearFecha(fecha) {
  const fechaFormateada = dayjs(fecha).format('DD/MM/YYYY HH:mm')
  return fechaFormateada
}

export function calcularPeso(minutos) {
 
  // faltaria comprobar que minutos sea numérico
  if (minutos < 10) return 'Baja'
  else if (minutos < 30) return 'Media'
  return 'Alta'
  
}
