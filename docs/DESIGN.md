# Decisiones de Diseño (UI/UX)

## Estética General
El portafolio abandona lo sutil para abrazar de lleno la estética **Cyberpunk Edgerunners / Netrunner HUD**. Las decisiones visuales clave incluyen:

1. **Contraste Agresivo**: Uso impactante del Amarillo Cyberpunk contra fondos Negro Profundo. La paleta no busca ser discreta, sino gritar identidad y rebeldía.
2. **Interfaces HUD (Head-Up Display)**: Inspirado en los "braindances" y las interfaces ópticas de la serie/juego. La UI emula escaneos, líneas guías finas rojas, números decorativos técnicos y retículas de focalización.
3. **Formas Industriales**: Se rechazan casi por completo los bordes redondeados (`border-radius` tradicionales). Todo elemento interactivo tiene un aspecto angular y técnico.

## Layout y Estructura
- **Estructura en Bloques**: El layout simula un visor táctico o una terminal operativa. Contenedores muy marcados con líneas divisorias sólidas y bloques de datos estructurados.
- **Tipografía como Elemento Gráfico**: Los textos de los títulos no solo comunican, sino que actúan como piezas masivas de diseño gráfico, dictando la estructura y el peso de la pantalla.

## Componentes y Geometría
- **Esquinas Cortadas (Chamfered Edges)**: Las "cards" (tarjetas de proyectos o bio) y los botones utilizan esquinas recortadas en diagonal. Esto se implementa en CSS mediante `clip-path: polygon(...)`, logrando la estética de hardware corporativo de Night City.
- **Bordes Segmentados**: Las tarjetas utilizan líneas finas (comúnmente color rojo neón) que incorporan cortes, enmarcado de corchetes o esquinas engrosadas, imitando la interfaz de un escáner ocular u operativo.

## Animaciones
- **Efectos Glitch**: Transiciones, parpadeos esporádicos o divisiones RGB (aberración cromática) en títulos y botones al interactuar, simulando fallas o sobrecarga de ciberware.
- **Decodificación de Datos**: Animaciones donde los elementos aparecen como si estuvieran siendo decodificados línea por línea o escaneados por un protocolo de hackeo.
