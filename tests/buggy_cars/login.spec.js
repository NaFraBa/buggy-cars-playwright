const { test, expect } = require("@playwright/test")

test("Simular inicio de sesión con datos de prueba", async ({ page }) => {
  // 1. Navegamos a la página oficial de Buggy Cars
  await page.goto("https://buggy.justtestit.org/")

  // 2. Localizamos el campo de usuario usando su atributo 'name' en el HTML y escribimos
  await page.locator('input[name="login"]').fill("usuario_ignacio_test")

  // 3. Localizamos el campo de contraseña y escribimos una clave cualquiera
  await page.locator('input[name="password"]').fill("ClaveFalsa123!")

  // 4. Buscamos el botón de inicio de sesión que tenga el texto exacto "Login" y hacemos clic
  await page.locator('button:has-text("Login")').click()

  // 5. Comprobamos si en la pantalla aparece el saludo inicial (Aserción)
  // Como los datos son inventados, el test esperará este texto y fallará de forma controlada
  const saludoUsuario = page.locator('span:has-text("Hi,")')
  await expect(saludoUsuario).toBeVisible({ timeout: 5000 })
})
