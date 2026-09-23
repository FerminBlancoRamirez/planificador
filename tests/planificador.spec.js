import { test, expect } from '@playwright/test'

test('Muestra el titulo de la app', async ({ page }) => {
  //await page.goto('localhost:5173')
  await page.goto('/')
  await expect( page.getByRole('heading', { name: 'Planificación del curso' }), 
).toBeVisible()
})


test('Permite añadir una nueva actividad', async({ page })=>{
    await page.goto('/')
    await page.getByPlaceholder('Escribe lo que has hecho hoy').fill('Cantar')
    await page.getByPlaceholder('60 min').fill('5')
    await page.getByRole('button', {name: 'Añadir'}).click()
    await expect(
        page.getByText('Cantar')
    ).toBeVisible
})
