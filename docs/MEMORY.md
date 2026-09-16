# Memoria del Proyecto (Contexto)

Este documento sirve como cerebro o memoria externa del proyecto, guardando el contexto actual para el desarrollo iterativo.

## Contexto Actual
- **Proyecto**: Portafolio Web Personal de Maximiliano Rodríguez.
- **Estado**: Funcional, responsivo y recientemente refactorizado.
- **Idioma del Proyecto**: Español (estricto para el contenido orientado al usuario final).

## Decisiones Técnicas y Fixes Notables
- **Problema del Navbar**: Los componentes anidados de Angular hacían que `element.offsetTop` devolviera posiciones relativas al padre, rompiendo la lógica del ScrollSpy.
  - *Solución*: Se cambió a `getBoundingClientRect().top + window.scrollY` para obtener siempre la posición absoluta respecto al documento.
- **Layout de Biografía**: Originalmente usaba un diseño de dos columnas con estilo de tarjeta (`glass`). 
  - *Solución*: Se simplificó a texto plano, de mayor tamaño, centrado en una sola columna para lograr un impacto directo.

## Trabajo Pendiente o Próximos Pasos Ideales
1. **Internacionalización (i18n)**: Si en el futuro se requiere soporte para inglés, evaluar la adición de librerías como `@ngx-translate/core` o la solución nativa de Angular.
2. **Consumo de APIs**: Integrar el `ProjectService` dentro de `core/services/` para obtener proyectos dinámicamente de GitHub o una API headless CMS, en lugar de usar datos quemados en `shared/data/`.
3. **Sección de Contacto**: Implementar un formulario funcional conectando con un backend ligero o un servicio serverless (ej. Formspree o EmailJS).
