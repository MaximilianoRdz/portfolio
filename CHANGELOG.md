# Registro de Cambios (Changelog)

Todos los cambios notables en este proyecto serán documentados en este archivo.

## [Unreleased]

### Añadido
- Documentación estructurada del proyecto (`AGENTS.md`, `CHANGELOG.md` y carpeta `docs/`).
- Estructura base para futuros servicios (`core/services/`).

### Cambiado
- **Arquitectura**: Se refactorizó el proyecto hacia una arquitectura modular basada en `core/`, `shared/` y `features/`.
- **Diseño**: El color de fondo principal se actualizó a un tono Azul Navy profundo (`#07091a`) para alinear con la estética deseada.
- **Navbar**: Se corrigió el algoritmo de detección de sección activa para usar posiciones absolutas en lugar de relativas, solucionando problemas de resaltado.
- **Contenido**: Se tradujeron términos al español (ej. "Skills" a "Habilidades") para mantener consistencia.
- **Sección Sobre Mí**: Se simplificó la vista a una sola columna centrada, mejorando la legibilidad de la biografía y removiendo estilos de tarjeta excesivos.

### Eliminado
- Carpetas y componentes redundantes de la antigua estructura plana (`app/components` y `app/pages`).
