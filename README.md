# ✦ Renzo Retuerto — Portafolio Personal & Profesional

<div align="center">

  <!-- Badges de Estado y Tecnologías -->
  <a href="https://renzooucf.github.io/">
    <img src="https://img.shields.io/badge/Demo%20en%20Vivo-renzooucf.github.io-BE4A28?style=for-the-badge&logo=googlechrome&logoColor=white" alt="Live Demo" />
  </a>
  <a href="https://github.com/renzooucf">
    <img src="https://img.shields.io/badge/GitHub-renzooucf-191816?style=for-the-badge&logo=github&logoColor=white" alt="GitHub Profile" />
  </a>
  <a href="https://www.linkedin.com/in/renzo-retuerto-70076b350/">
    <img src="https://img.shields.io/badge/LinkedIn-Renzo%20Retuerto-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn Profile" />
  </a>

  <br><br>

  <p align="center">
    <b>« Construyo Software en Internet. »</b><br>
    <i>Portafolio web con estética editorial contemporánea, arquitectura Vanilla de alto rendimiento y experiencia interactiva avanzada.</i>
  </p>

  <p align="center">
    <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white" alt="HTML5" />
    <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white" alt="CSS3" />
    <img src="https://img.shields.io/badge/JavaScript%20(ES6+)-F7DF1E?style=flat-square&logo=javascript&logoColor=black" alt="JavaScript" />
    <img src="https://img.shields.io/badge/GitHub%20Pages-222222?style=flat-square&logo=githubpages&logoColor=white" alt="GitHub Pages" />
    <img src="https://img.shields.io/badge/Zero%20Dependencies-Success-brightgreen?style=flat-square" alt="Zero Dependencies" />
    <img src="https://img.shields.io/badge/Licencia-MIT-lightgrey?style=flat-square" alt="MIT License" />
  </p>

</div>

---

## 📖 Tabla de Contenidos

1. [Sobre el Proyecto](#-sobre-el-proyecto)
2. [Características Principales](#-características-principales)
3. [Identidad Visual & Sistema de Diseño](#-identidad-visual--sistema-de-diseño)
4. [Estructura del Proyecto](#-estructura-del-proyecto)
5. [Stack Tecnológico](#-stack-tecnológico)
6. [Instalación y Uso Local](#-instalación-y-uso-local)
7. [Despliegue](#-despliegue)
8. [Contacto](#-contacto)

---

## 💡 Sobre el Proyecto

Este repositorio contiene el código fuente de mi **sitio web y portafolio personal** desplegado en **GitHub Pages**. 

El objetivo principal fue concebir una plataforma que combine una **estética editorial única (*Warm Paper / Neo-Brutalist Soft*)**, velocidad de carga instantánea (**100% Vanilla**, sin librerías pesadas ni frameworks de compilación) y utilidades interactivas que deleiten tanto a reclutadores como a desarrolladores curiosos.

> *"Divido mi tiempo entre proyectos académicos en la UPC, desarrollos personales de exploración técnica y encargos profesionales para quienes buscan software ordenado, confiable y bien documentado."*

---

## ✨ Características Principales

| Característica | Descripción |
| :--- | :--- |
| ⌨️ **Command Palette (`⌘K` / `Ctrl+K`)** | Menú modal interactivo tipo Spotlight/Raycast para navegar rápidamente por secciones, cambiar el tema, copiar el correo o abrir enlaces externos. |
| 🌗 **Tema Dinámico (Claro / Oscuro)** | Paleta personalizada: tono *Warm Paper* artesanal de día y *Obsidian Dark* de noche, persistente y con transiciones CSS fluidas. |
| 🖐️ **Franja Arrastrable (*Drag-to-Scroll*)** | Slider horizontal interactivo mediante Pointer Events nativos para descubrir áreas de especialización sin dependencias de carrusel externas. |
| 🏷️ **Filtro de Proyectos por Pestañas** | Clasificación dinámica entre proyectos **Personales** y **Profesionales/Clientes**, con etiquetas técnicas y enlaces a demos/repositorios. |
| 📬 **Formulario AJAX Asíncrono** | Integración silenciosa con FormSubmit vía `fetch()`, validación en tiempo real y feedback visual instantáneo. |
| 📋 **Copiado Rápido al Portapapeles** | Botón con feedback interactivo (`¡Correo copiado! ✓`) para copiar la dirección de contacto en un clic. |
| ⚡ **Performance & SEO First** | Datos estructurados en formato **JSON-LD (Schema.org Person)**, etiquetas Open Graph completas, fuentes pre-cargadas y `loading="lazy"`. |
| ♿ **Accesibilidad & Movimiento Reducido** | Respeta `prefers-reduced-motion`, semántica HTML5 estricta, atributos ARIA y navegación por teclado accesible. |

---

## 🎨 Identidad Visual & Sistema de Diseño

El diseño se aleja de las plantillas genéricas de tecnología para adoptar una dirección de arte inspirada en el diseño tipográfico y editorial suizo:

### 🔤 Tipografía
- **Titulares:** [`Fraunces`](https://fonts.google.com/specimen/Fraunces) — Serif moderna, elegante y expresiva con caracteres ópticos.
- **Cuerpo & Lectura:** [`Inter`](https://fonts.google.com/specimen/Inter) — Sans-serif limpia, neutra y altamente legible.
- **Detalles & Código:** [`JetBrains Mono`](https://fonts.google.com/specimen/JetBrains+Mono) — Monospaced técnica para etiquetas, comandos y metadatos.

### 🎨 Paleta de Color

```css
/* Modo Claro (Warm Paper) */
--paper:       #E7E2D4;  /* Fondo pergamino suave */
--paper-2:     #DCD6C4;  /* Fondo de soporte */
--ink:         #2C2B26;  /* Tinta oscura */
--rust:        #BE4A28;  /* Acento terracota / óxido */

/* Modo Oscuro (Deep Obsidian) */
--paper:       #191816;  /* Fondo carbón oscuro */
--paper-2:     #1C1916;  /* Superficies secundarias */
--ink:         #E8E6DF;  /* Tipografía hueso */
--rust:        #D66545;  /* Acento óxido vibrante */
```

---

## 📂 Estructura del Proyecto

```plaintext
renzooucf.github.io/
├── index.html         # Marcado semántico, metaetiquetas SEO y datos JSON-LD
├── styles.css         # Tokens de diseño, media queries y animaciones modulares
├── script.js          # Lógica interactiva (Command Palette, temas, drag strip, form)
├── pictures/
│   ├── icon.webp      # Favicon optimizado en formato WebP
│   └── profile.webp   # Fotografía de perfil en alta resolución comprimida
└── README.md          # Documentación general del repositorio
```

---

## 🛠️ Stack Tecnológico

- **Frontend Core:** HTML5 semántico + CSS3 moderno (Custom Properties, CSS Grid, Flexbox, Clamp).
- **Lógica & Comportamiento:** JavaScript ES6+ (IIFE modular, IntersectionObserver, Pointer Events, Clipboard API).
- **Backend de Contacto:** [FormSubmit.co](https://formsubmit.co/) (Endpoint AJAX sin backend propio).
- **Tipografías:** Google Fonts CDN con optimización `preconnect` y `preload`.
- **Despliegue:** GitHub Pages CDN global.

---

## 🚀 Instalación y Uso Local

Al estar construido sin empaquetadores ni dependencias de Node.js, ejecutar este proyecto localmente es sumamente sencillo:

### Opción 1: Abrir directamente en el navegador
Basta con clonar el repositorio y hacer doble clic sobre el archivo `index.html`.

### Opción 2: Usar un servidor local ligero

```bash
# 1. Clonar el repositorio
git clone https://github.com/renzooucf/renzooucf.github.io.git

# 2. Entrar en la carpeta
cd renzooucf.github.io

# 3. Iniciar un servidor HTTP local (elige cualquiera de las siguientes opciones):

# Con Python 3:
python -m http.server 8000

# Con Node.js (npx):
npx serve .

# Con la extensión Live Server de VS Code:
# Clic derecho en index.html -> "Open with Live Server"
```

Abre tu navegador en `http://localhost:8000` para visualizar el portafolio en tiempo real.

---

## 🌐 Despliegue en GitHub Pages

Este portafolio está configurado para desplegarse automáticamente a través de **GitHub Pages**:

1. Ve a los **Settings** del repositorio en GitHub.
2. Navega a la pestaña **Pages** (en el menú lateral izquierdo).
3. En **Build and deployment > Source**, selecciona:
   - **Branch:** `main` (o `master`)
   - **Folder:** `/ (root)`
4. Haz clic en **Save**. En unos instantes, la web estará disponible en:
   👉 **`https://renzoocf.github.io/`**

---

## 📬 Contacto & Enlaces

¿Tienes una propuesta o quieres colaborar en un proyecto de software?

- 🌐 **Web:** [renzooucf.github.io](https://renzoocf.github.io/)
- 💼 **LinkedIn:** [/in/renzo-retuerto](https://www.linkedin.com/in/renzo-retuerto-70076b350/)
- 💻 **GitHub:** [@renzooucf](https://github.com/renzooucf)
- 📝 **Blog Personal:** [RenzoOs](https://renzooucf.github.io/RenzoOs/)
- ✉️ **Email:** [renzoo.cf@gmail.com](mailto:renzoo.cf@gmail.com)

---

<div align="center">
  <sub>Diseñado y desarrollado con pasión por <b>Renzo Retuerto</b> © 2026.</sub>
</div>
