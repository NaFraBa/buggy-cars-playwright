# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: buggy_cars\login.spec.js >> Simular inicio de sesión con datos de prueba
- Location: tests\buggy_cars\login.spec.js:3:1

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('span:has-text("Hi,")')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" locator('span:has-text("Hi,")') with timeout 5000ms
  - waiting for locator('span:has-text("Hi,")')

```

```yaml
- banner:
  - navigation:
    - link "Buggy Rating":
      - /url: /
    - text: Invalid username/password
    - textbox "Login": usuario_ignacio_test
    - textbox: ClaveFalsa123!
    - button "Login"
    - link "Register":
      - /url: /register
  - heading "Buggy Cars Rating" [level=1]
  - img
- main:
  - main:
    - heading "Popular Make" [level=2]
    - link "Lamborghini":
      - /url: /make/ckl2phsabijs71623vk0
      - img "Lamborghini"
    - heading "Lamborghini (25143 votes)" [level=3]
    - heading "Popular Model" [level=2]
    - link "Diablo":
      - /url: /model/ckl2phsabijs71623vk0|ckl2phsabijs71623vqg
      - img "Diablo"
    - heading "Lamborghini Diablo (10365 votes)" [level=3]
    - heading "Overall Rating" [level=2]
    - link:
      - /url: /overall
      - img
    - heading "List of all registered models." [level=3]
  - separator
  - link "Facebook":
    - /url: https://www.facebook.com
    - img
  - link "Twitter":
    - /url: https://www.twitter.com
    - img
  - paragraph: © 2016 Buggy Software, Inc.
```

# Test source

```ts
  1  | const { test, expect } = require("@playwright/test")
  2  | 
  3  | test("Simular inicio de sesión con datos de prueba", async ({ page }) => {
  4  |   // 1. Navegamos a la página oficial de Buggy Cars
  5  |   await page.goto("https://buggy.justtestit.org/")
  6  | 
  7  |   // 2. Localizamos el campo de usuario usando su atributo 'name' en el HTML y escribimos
  8  |   await page.locator('input[name="login"]').fill("usuario_ignacio_test")
  9  | 
  10 |   // 3. Localizamos el campo de contraseña y escribimos una clave cualquiera
  11 |   await page.locator('input[name="password"]').fill("ClaveFalsa123!")
  12 | 
  13 |   // 4. Buscamos el botón de inicio de sesión que tenga el texto exacto "Login" y hacemos clic
  14 |   await page.locator('button:has-text("Login")').click()
  15 | 
  16 |   // 5. Comprobamos si en la pantalla aparece el saludo inicial (Aserción)
  17 |   // Como los datos son inventados, el test esperará este texto y fallará de forma controlada
  18 |   const saludoUsuario = page.locator('span:has-text("Hi,")')
> 19 |   await expect(saludoUsuario).toBeVisible({ timeout: 5000 })
     |                               ^ Error: expect(locator).toBeVisible() failed
  20 | })
  21 | 
```