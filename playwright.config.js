const { defineConfig } = require("@playwright/test")
module.exports = defineConfig({
  testDir: "./tests", // Aquí le decimos que busque en tu nueva carpeta
  use: {
    headless: false, // Esto sirve para que VEAS el navegador abrirse en tu pantalla
  },
})
