# 🏎️ Buggy Cars Rating - Web Testing Automation con Playwright

Este repositorio contiene un framework de pruebas automatizadas desarrollado para la plataforma web **Buggy Cars Rating**, diseñado con el objetivo de validar flujos de usuario críticos, consistencia de la interfaz y manejo de excepciones en el DOM.

🌐 **Puedes ver mi portafolio web completo aquí:** [Ignacio Fraile - Profesional IT](https://github.io)

---

## 🛠️ Tecnologías y Herramientas Utilizadas

- **Lenguaje:** JavaScript (ES6+)
- **Framework de Testing:** Playwright Test (Microsoft)
- **Patrón de Diseño:** Selectores dinámicos basados en el DOM (CSS / Atributos del rol / Filtros de texto)
- **Entorno de ejecución:** Node.js
- **Control de Versiones:** Git & GitHub

---

## 📈 Pruebas Automatizadas Incluidas

El proyecto está estructurado de forma modular por páginas web e incluye los siguientes escenarios de prueba:

### 📁 Carpeta `tests/buggy_cars/`

1. **`elementos_dom.spec.js` (Navegación e Interacción Visual):**
   - Manejo avanzado del modo estricto de Playwright (`strict mode violation`) mediante estrategias de filtrado (`.first()`) sobre elementos repetidos con clases compartidas (`.card-block`).
   - Aserciones automatizadas en vivo para garantizar la visibilidad de componentes en el DOM.
2. **`login.spec.js` (Automatización de Formularios y Lógica Funcional):**
   - Control de inputs en el DOM mediante selectores de atributos avanzados (`input[name="login"]`).
   - Simulación de acciones de usuario reales mediante el uso de `.fill()` para la inserción de datos y `.click()` para disparar eventos.
   - Manejo de aserciones condicionales de visibilidad basada en textos del DOM (`span:has-text("Hi,")`) con control de tiempos de espera personalizados (`timeout`).

---

## 🚀 Cómo Ejecutar el Proyecto Localmente

Si deseas descargar y correr estas pruebas en tu máquina, sigue estos comandos en tu terminal de comandos:

### 1. Clonar el repositorio e instalar dependencias

```bash
git clone https://github.com
cd buggy-cars-playwright
npm install
```

### 2. Instalar los navegadores de Playwright

```bash
npx playwright install
```

### 3. Ejecutar las pruebas

- **Ejecutar un archivo específico (ej. Login) en Modo Visual:**
  ```bash
  npx playwright test tests/buggy_cars/login.spec.js --ui
  ```
- **Ejecutar todas las pruebas en segundo plano (Headless):**
  ```bash
  npx playwright test
  ```

---

# 🇬🇧 English Version

## 🏎️ Buggy Cars Rating - Web Testing Automation with Playwright

This repository features an automation testing framework built for the **Buggy Cars Rating** web platform. It validates critical user journeys, UI consistency, and DOM exceptions.

🌐 **Check out my full Web Portfolio here:** [Ignacio Fraile - IT Professional](https://github.io)

### 📈 Automated Test Cases Included

- **`elementos_dom.spec.js`:** UI consistency and structural testing. Resolves DOM strictness issues using specific filtering (`.first()`) across repeating elements.
- **`login.spec.js`:** Functional testing for login forms. Utilizes robust CSS attribute selectors, handles element interaction via `.fill()` and `.click()`, and performs assertion tracking through customized element timeouts.

### 🚀 How to Run Locally

1. **Clone & Install:**
   ```bash
   git clone https://github.com
   cd buggy-cars-playwright
   npm install
   ```
2. **Install Browsers:** `npx playwright install`
3. **Run Login Test (UI Mode):** `npx playwright test tests/buggy_cars/login.spec.js --ui`
