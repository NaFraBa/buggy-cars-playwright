# 🏎️ Buggy Cars Rating - Web Testing Automation con Playwright

Este repositorio contiene un framework de pruebas automatizadas desarrollado para la plataforma web **Buggy Cars Rating**, diseñado con el objetivo de validar flujos de usuario críticos, consistencia de la interfaz y manejo de excepciones en el DOM.

🌐 **Puedes ver mi portafolio web completo aquí:** [Ignacio Fraile - Profesional IT](https://nafraba.github.io/mi-portafolio/)

---

## 🛠️ Tecnologías y Herramientas Utilizadas

- **Lenguaje:** JavaScript (ES6+)
- **Framework de Testing:** Playwright Test (Microsoft)
- **Patrón de Diseño:** Selectores dinámicos basados en el DOM (CSS / Atributos del rol)
- **Entorno de ejecución:** Node.js
- **Control de Versiones:** Git & GitHub

---

## 📈 Pruebas Automatizadas Incluidas

El proyecto cubre escenarios esenciales orientados a garantizar la robustez del sitio web, incluyendo:

1. **Navegación Estructural:** Verificación de carga e interactividad en menús y pantallas secundarias.
2. **Validación de Componentes Múltiples:** Manejo avanzado del modo estricto de Playwright (`strict mode violation`) mediante estrategias de filtrado (`.first()`, `.last()`) sobre elementos repetidos con clases compartidas (`.card-block`).
3. **Robustez de la UI:** Aserciones automatizadas en vivo para garantizar que los elementos críticos sean visibles antes de interactuar con ellos.

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

- **Ejecución en segundo plano (Headless):**
  ```bash
  npx playwright test
  ```
- **Ejecución con Interfaz Gráfica interactiva (UI Mode):**
  ```bash
  npx playwright test --ui
  ```

---

# 🇬🇧 English Version

## 🏎️ Buggy Cars Rating - Web Testing Automation with Playwright

This repository features an automation testing framework built for the **Buggy Cars Rating** web platform. It validates critical user journeys, UI consistency, and DOM exceptions.

🌐 **Check out my full Web Portfolio here:** [Ignacio Fraile - IT Professional](https://nafraba.github.io/mi-portafolio/)

### 🛠️ Core Stack

- **Language:** JavaScript (ES6+)
- **Testing Framework:** Playwright Test
- **Execution Environment:** Node.js

### 🚀 How to Run Locally

1. **Clone & Install:**
   ```bash
   git clone https://github.com
   cd buggy-cars-playwright
   npm install
   ```
2. **Install Browsers:** `npx playwright install`
3. **Run Tests (UI Mode):** `npx playwright test --ui`
