# Instrucciones para Agentes (AI)

Este archivo contiene las directrices para cualquier agente de IA que trabaje en este repositorio.

## Reglas Generales
- **Idioma**: Todo el código, comentarios, documentación y la interfaz de usuario deben estar y mantenerse en **Español**.
- **Framework**: Angular (Standalone components).
- **Estilos**: Tailwind CSS combinado con variables CSS nativas para el tema.

## Flujo de Trabajo
- **Arquitectura**: Mantener y respetar la arquitectura de carpetas limpia (`core`, `shared`, `features`).
- **Diseño**: Al realizar cambios visuales, respetar la paleta de colores definida en `docs/STYLEGUIDE.md` y los lineamientos estéticos de `docs/DESIGN.md`.
- **Dependencias**: No introducir nuevas librerías pesadas a menos que sea estrictamente necesario y con aprobación.
- **Precisión**: Utilizar `getBoundingClientRect()` para cálculos de scroll en lugar de `offsetTop` debido a la naturaleza de los componentes anidados de Angular.
