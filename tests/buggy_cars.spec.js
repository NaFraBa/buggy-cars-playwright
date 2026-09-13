// mi_prueba.spec.js
const { test, expect } = require("@playwright/test")

test.describe("Pruebas funcionales en Buggy Cars Rating", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://buggy.justtestit.org/")
  })

  test("01. Verificar que la página de inicio carga correctamente", async ({
    page,
  }) => {
    // Validar el título de la página
    await expect(page).toHaveTitle(/Buggy Cars Rating/i)

    // Validar que se muestran las tarjetas principales (Popular Make, Popular Model, Overall Rating)
    await expect(
      page.getByRole("heading", { name: "Popular Make" }),
    ).toBeVisible()
    await expect(
      page.getByRole("heading", { name: "Popular Model" }),
    ).toBeVisible()
    await expect(
      page.getByRole("heading", { name: "Overall Rating" }),
    ).toBeVisible()
  })

  test("02. Validar error al iniciar sesión con credenciales incorrectas", async ({
    page,
  }) => {
    // Localizar inputs de login en la cabecera
    await page.locator('input[name="login"]').fill("usuario_ficticio_123")
    await page.locator('input[name="password"]').fill("ClaveInvalida123!")
    await page.getByRole("button", { name: "Login" }).click()

    // Validar mensaje de error
    const alertError = page.locator(".label-warning")
    await expect(alertError).toBeVisible()
    await expect(alertError).toHaveText("Invalid username/password")
  })

  test("03. Registro de un nuevo usuario de forma dinámica", async ({
    page,
  }) => {
    // Ir a la página de registro
    await page.getByRole("link", { name: "Register" }).click()
    await expect(page).toHaveURL(/.*\/register/)

    // Generar un sufijo aleatorio para evitar conflictos de usuario duplicado
    const randomId = Date.now()
    const username = `testuser_${randomId}`

    // Completar el formulario
    await page.locator("#username").fill(username)
    await page.locator("#firstName").fill("Juan")
    await page.locator("#lastName").fill("Perez")
    await page.locator("#password").fill("Password123!")
    await page.locator("#confirmPassword").fill("Password123!")

    // Enviar formulario
    await page.getByRole("button", { name: "Register" }).click()

    // Confirmar mensaje de registro exitoso
    const successMessage = page.locator(".result.alert-success")
    await expect(successMessage).toBeVisible()
    await expect(successMessage).toHaveText("Registration is successful")
  })

  test("04. Navegar a la sección de Overall Rating y ver detalle de un coche", async ({
    page,
  }) => {
    // Click en la imagen o enlace del ranking general
    await page.locator('a[href="/overall"]').first().click()
    await expect(page).toHaveURL(/.*\/overall/)

    // Verificar que la tabla de coches se cargue
    const table = page.locator("table.cars")
    await expect(table).toBeVisible()

    // Entrar al detalle del primer modelo listado
    const firstCarLink = page.locator("tbody tr:first-child a").first()
    await firstCarLink.click()

    // Verificar que estamos en la página del modelo y se muestra el bloque de especificaciones
    await expect(page).toHaveURL(/.*\/model\/.*/)
    await expect(page.locator(".card-block").first()).toBeVisible()
  })
})
