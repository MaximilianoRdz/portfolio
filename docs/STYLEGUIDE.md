# Guía de Estilos

## Paleta de Colores
Inspirada en el universo Cyberpunk (Edgerunners y 2077), utilizando colores de alto contraste, tonos neón vibrantes y fondos absolutos.

| Nombre | Variable CSS | Color Hex | Uso Principal |
|--------|--------------|-----------|---------------|
| **Amarillo Cyberpunk** | `--color-cyber-yellow` | `#FCEE0A` | Color insignia. Fondos impactantes, acentos principales y textos destacados. |
| **Negro Profundo** | `--color-bg-dark` | `#050505` | Fondo base del documento para generar contraste máximo con el amarillo y neones. |
| **Rojo Neón / HUD** | `--color-neon-red` | `#FF003C` | Bordes técnicos de tarjetas (cards), alertas y delineados estilo netrunner HUD. |
| **Cyan Neón** | `--color-neon-cyan` | `#00FFFF` | Detalles holográficos, luces secundarias, indicadores y textos técnicos. |
| **Magenta / Rosa** | `--color-neon-magenta`| `#D9027D` | Gradientes secundarios y acentos de contraste intensos. |

## Tipografía
Inspirada en pósters promocionales e interfaces de usuario futuristas:

- **Familia Primaria (Títulos y Encabezados)**: Fuentes gruesas, geométricas, extendidas y en mayúsculas (ej. `Rajdhani`, `Orbitron`, `Blender Pro` o `Syncopate`). Transmiten peso industrial, actitud y dominan visualmente el espacio.
- **Familia Secundaria (Cuerpo de texto y Datos)**: Fuentes legibles y monoespaciadas (ej. `Roboto Mono`, `Share Tech Mono` o `Inter` en configuración técnica) para emular terminales de datos y facilitar la lectura extensa.

## Utilidades CSS Reutilizables (Clases Custom)
Clases definidas globalmente para estructurar la UI con temática "Edgerunners":

- `.cyber-card`: Tarjetas con fondo oscuro sólido o translúcido, bordes delgados color rojo neón (`#FF003C`) y **esquinas biseladas/cortadas** usando `clip-path: polygon(...)`.
- `.cyber-btn`: Botones rectangulares con esquinas cortadas, colores sólidos de alto impacto (amarillo o rojo) y texto negro contrastante.
- `.tech-border`: Elementos decorativos (líneas divisorias, *crosshairs* en las esquinas, corchetes o barras de progreso visuales) típicos de interfaces HUD/escáner.
- `.glitch-text`: Efecto de aberración cromática (separación RGB) o distorsión sutil aplicable mediante `@keyframes` al hacer hover sobre textos o títulos principales.
