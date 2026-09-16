# Arquitectura del Proyecto

El proyecto sigue una arquitectura modular, escalable y limpia, altamente recomendada para aplicaciones Angular modernas utilizando **Standalone Components**.

## Estructura de Directorios

```text
src/app/
├── core/
│   └── services/        # Servicios Singleton (API, Auth), Guards, Interceptors. (Núcleo del sistema)
│
├── shared/
│   ├── components/      # Componentes reutilizables (Navbar, Footer, Botones genéricos)
│   ├── data/            # Datos estáticos o mocks (experiencia, proyectos, stack)
│   └── models/          # Interfaces y tipos de TypeScript globales
│
├── features/
│   └── home/            # Módulo o característica principal (Página de inicio)
│       ├── components/  # Componentes exclusivos de la vista Home (Hero, About, Timeline, etc.)
│       └── home.component.ts # Componente contenedor de la página
│
├── app.ts               # Componente raíz de la aplicación
├── app.routes.ts        # Definición de rutas (soporte para Lazy Loading futuro)
└── app.config.ts        # Configuración global y proveedores (HTTP, Router, etc.)
```

## Principios de Diseño
1. **Separación de Responsabilidades**: Las `features` son responsables de construir las vistas componiendo elementos más pequeños. La lógica de negocio pesada o la comunicación externa debe residir en `core/`.
2. **Reusabilidad**: Cualquier elemento UI que se repita en más de una `feature` debe ser extraído a `shared/`.
3. **Standalone First**: El proyecto no utiliza `NgModules`. Cada componente es autónomo y declara exactamente las dependencias que necesita en su array de `imports`.
