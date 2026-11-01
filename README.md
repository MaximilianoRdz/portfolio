<div align="center">

```
// ESTADO DEL SISTEMA: EN LÍNEA • PORTFOLIO CORE v2.0
```

# `[ PORTAFOLIO WEB // MAXIMILIANO RODRÍGUEZ ]`

### `// PORTAFOLIO PROFESIONAL FULL STACK • EXPERIENCIA CYBERPUNK 2077 //`

<p align="center">
  <a href="https://www.maxrdzs.com/" target="_blank">
    <img src="https://img.shields.io/badge/Demo_en_Vivo-www.maxrdzs.com-FCEE0A?style=for-the-badge&logo=googlechrome&logoColor=050505&labelColor=050505" alt="Sitio Web en Vivo" />
  </a>
  <img src="https://img.shields.io/badge/Angular-21+-DD0031?style=for-the-badge&logo=angular&logoColor=white&labelColor=050505" alt="Angular" />
  <img src="https://img.shields.io/badge/TypeScript-5.9-3178C6?style=for-the-badge&logo=typescript&logoColor=white&labelColor=050505" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white&labelColor=050505" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Rendimiento-Lighthouse_100-00FFFF?style=for-the-badge&logo=lighthouse&logoColor=050505&labelColor=050505" alt="Lighthouse" />
</p>

<p align="center">
  <b>Portafolio web personal de alto rendimiento, construido con Angular Standalone Components y una estética futurista inspirada en interfaces HUD y netrunner de Cyberpunk 2077.</b>
</p>

</div>

---

## ⚡ Sobre el Proyecto

Este repositorio contiene el código fuente completo del portafolio profesional de **Maximiliano Rodríguez**, Ingeniero en Tecnologías de la Información y Desarrollador Full Stack.

El objetivo del proyecto es presentar de manera visual, interactiva y técnicamente sólida la trayectoria profesional, habilidades técnicas y proyectos destacados, demostrando dominio en desarrollo **Frontend moderno**, **arquitectura de software limpia** y **optimización extrema de rendimiento web**.

---

## 🎨 Identidad Visual y Experiencia de Usuario (UI/UX)

La interfaz fue diseñada desde cero inspirada en el universo **Cyberpunk (Edgerunners y 2077)**:

* **Paleta de Colores de Alto Contraste**:
  * 🟡 **Amarillo Cyberpunk (`#FCEE0A`)**: Acentos principales, estados activos e información insignia.
  * 🔴 **Rojo HUD (`#FF003C`)**: Bordes técnicos, líneas de escaneo y alertas estilo netrunner.
  * 🔵 **Cyan Neón (`#00FFFF`)**: Indicadores holográficos, submenús y detalles de telemetría.
  * ⚫ **Negro Profundo (`#050505`)**: Fondo base optimizado para pantallas OLED y reducción de fatiga visual.
* **Componentes de Interfaz HUD**:
  * `.cyber-card`: Tarjetas con esquinas biseladas (`clip-path: polygon`), esquinas con crosshairs decorativos y efecto hover dinámico.
  * `.cyber-btn`: Botones industriales con tipografía geométrica y distorsión al interactuar.
  * **Barra de Telemetría Superior**: Muestra en tiempo real el porcentaje de desplazamiento vertical (`NAV.POS: XX%`) y barra láser degradada.
  * **Efectos Glitch Acelerados por GPU**: Animaciones de aberración cromática (separación RGB rojo/cyan) promovidas a capas compuestas de hardware (`will-change: transform, clip-path, opacity`).
  * **Scanlines y Grids Técnicos**: Capas sutiles que emulan monitores de terminales militares sin comprometer la legibilidad ni el rendimiento.

---

## 🚀 Optimizaciones de Rendimiento

El portafolio está optimizado para alcanzar las métricas más altas en **Google Lighthouse** (Mobile y Desktop) y respetar los **Core Web Vitals**:

1. **ChangeDetectionStrategy.OnPush Global**: Todos los componentes usan `OnPush`, evitando ciclos innecesarios de detección de cambios en Angular.
2. **Eventos de Scroll Fuera de la Zona Angular (`runOutsideAngular`)**: Los cálculos de telemetría y navegación se ejecutan con listeners pasivos (`{ passive: true }`) y sincronización mediante `requestAnimationFrame`, asegurando 60-120 FPS sin bloqueos en el hilo principal (TBT = 0 ms).
3. **Lazy Loading e Intersection Observer**: Animaciones de aparición (`reveal`) y contadores numéricos se disparan únicamente cuando entran en el viewport.
4. **Carga No Bloqueante de Tipografías**: Google Fonts (`Chakra Petch` y `Share Tech Mono`) se cargan de forma asíncrona mediante `preload` y `media="print" onload="this.media='all'"`, eliminando el bloqueo del renderizado inicial.
5. **Preconexión de Recursos (Preconnect & DNS-Prefetch)**: Handshakes SSL y DNS adelantados para fuentes e iconos de Iconify.
6. **Peso Mínimo de Transferencia**: Bundle inicial de producción en solo **~74 kB transferidos**.

---

## 🛠️ Stack Tecnológico

| Capa / Herramienta | Tecnología | Propósito |
|-------------------|------------|-----------|
| **Framework** | [Angular 21](https://angular.dev/) | Standalone components, Signals reactivos y arquitectura modular. |
| **Lenguaje** | [TypeScript 5.9](https://www.typescriptlang.org/) | Tipado estático estricto y código mantenible. |
| **Estilos** | [Tailwind CSS v4](https://tailwindcss.com/) | Utilidades atómicas y variables CSS nativas de alto rendimiento. |
| **Iconos** | [Iconify](https://iconify.design/) + SVGs vectoriales nativos | Marcas oficiales a color y logotipos vectoriales de precisión. |
| **Pruebas Unitarias**| [Vitest](https://vitest.dev/) | Ejecución ultra-rápida de pruebas unitarias. |
| **Hosting y Despliegue** | [Vercel](https://vercel.com/) | CI/CD automático, compresión Brotli y CDN perimetral global. |

---

## 📂 Estructura del Código

El proyecto sigue una arquitectura limpia estructurada por responsabilidades (`core`, `features`, `shared`):

```plaintext
myportfolio/
├── docs/                                # Documentación de diseño, arquitectura y estilos
│   ├── ARCHITECTURE.md                  # Lineamientos de arquitectura
│   ├── DESIGN.md                        # Principios estéticos
│   └── STYLEGUIDE.md                    # Variables CSS, paleta de colores y clases personalizadas
├── public/                              # Activos estáticos públicos (Favicon, Robots.txt, CV en PDF)
├── src/
│   ├── app/
│   │   ├── core/                        # Servicios singleton y lógica central de la app
│   │   ├── features/                    # Módulos y vistas principales
│   │   │   └── home/                    # Página principal del portafolio
│   │   │       ├── components/
│   │   │       │   ├── hero/            # Sección inicial con glitch title y llamadas a la acción
│   │   │       │   ├── about/           # Biografía profesional y contadores animados
│   │   │       │   ├── timeline/        # Línea de tiempo de experiencia laboral y formación
│   │   │       │   ├── projects/        # Catálogo de proyectos con enlaces a demos y repositorios
│   │   │       │   └── tech-stack/      # Escaneo de tecnologías con iconos oficiales y DRF vector
│   │   │       └── home.component.ts    # Orquestador principal, telemetría y HUD
│   │   ├── shared/                      # Componentes, datos y modelos reutilizables
│   │   │   ├── components/navbar/       # Menú lateral para escritorio y HUD inferior para móviles
│   │   │   ├── data/                    # Datos estáticos (proyectos, experiencia, habilidades)
│   │   │   └── models/                  # Interfaces y tipos TypeScript
│   │   ├── app.config.ts                # Configuración de proveedores de la aplicación
│   │   ├── app.routes.ts                # Definición de rutas
│   │   └── app.ts                       # Componente raíz con OnPush
│   ├── index.html                       # HTML base con precargas de fuentes, SEO y Open Graph
│   ├── main.ts                          # Punto de entrada de Angular
│   └── styles.css                       # Variables Cyberpunk, scrollbar personalizada y keyframes
├── angular.json                         # Configuración de compilación optimizada y presupuestos
└── package.json                         # Dependencias y scripts del proyecto
```

---

## 🚀 Proyectos Destacados en el Portafolio

* **GTOPagos**: Sistema de pagos y administración financiera empresarial.
  * **Frontend**: Angular, TypeScript.
  * **Backend**: Django REST Framework, Python, PostgreSQL.
  * **Demo en Vivo**: [gtopagos.maxrdzs.com/demo](https://gtopagos.maxrdzs.com/demo)
  * **Repositorios**: [Frontend en GitHub](https://github.com/MaximilianoRdz/GTOPagos) | [Backend en GitHub](https://github.com/MaximilianoRdz/GTOPagos_Back)

---

## 💻 Instalación y Desarrollo Local

### Requisitos Previos
* **Node.js**: v18.x o superior
* **npm**: v9.x o superior
* **Angular CLI** (opcional para comandos globales): `npm install -g @angular/cli`

### Pasos

1. **Clonar el repositorio**:
   ```bash
   git clone https://github.com/MaximilianoRdz/portfolio.git
   cd portfolio/myportfolio
   ```

2. **Instalar dependencias**:
   ```bash
   npm install
   ```

3. **Iniciar el servidor de desarrollo**:
   ```bash
   npm start
   ```
   Abre tu navegador en `http://localhost:4200/`. La aplicación se recargará automáticamente ante cualquier cambio.

4. **Ejecutar pruebas unitarias**:
   ```bash
   npm test
   ```

5. **Compilar para producción**:
   ```bash
   npm run build
   ```
   Los artefactos optimizados se generarán en el directorio `dist/myportfolio`.

---

## 🌐 Despliegue en Producción

El sitio se encuentra desplegado y alojado en la red perimetral de **Vercel** bajo el dominio oficial:
🔗 **[https://www.maxrdzs.com/](https://www.maxrdzs.com/)**

---

## 📬 Contacto

* **Desarrollador**: Maximiliano Rodríguez
* **LinkedIn**: [linkedin.com/in/maximiliano-rodríguez-991430245](http://www.linkedin.com/in/maximiliano-rodríguez-991430245)
* **Correo Electrónico**: [maxrdz117@gmail.com](mailto:maxrdz117@gmail.com)
* **GitHub**: [@MaximilianoRdz](https://github.com/MaximilianoRdz)

---

<div align="center">
  <sub>Construido con pasión por el código limpio y la ingeniería de software.</sub>
</div>
