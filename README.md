# Oftalvista Frontend

Aplicación web para la gestión de una clínica oftalmológica. Permite administrar usuarios, médicos, pacientes, agendas, citas y más, desde una interfaz moderna y organizada.

## Descripción

Este proyecto es un frontend desarrollado en Angular que consume una API REST. Está diseñado como una SPA (Single Page Application), con navegación fluida y módulos cargados de forma eficiente.

La aplicación ofrece vistas y funcionalidades diferenciadas según el tipo de usuario, facilitando tanto la administración interna como el acceso de los pacientes a su información.

## Funcionalidades

- Autenticación con control de acceso por roles
- Dashboard para administrador
- Dashboard para paciente
- Gestión de usuarios
- Gestión de médicos y especialidades
- Registro y mantenimiento de pacientes
- Administración de agenda médica
- Gestión de citas
- Registro de pagos
- Consulta de historial clínico
- Recordatorios de citas

## Arquitectura

El proyecto sigue buenas prácticas de Angular moderno:

- Componentes standalone
- Lazy loading por módulos funcionales
- Guards para protección de rutas
- Interceptores HTTP para:
  - Manejo de tokens (JWT)
  - Control global de errores
  - Simulación de backend (modo demo)
- Servicios desacoplados por entidad

## Estructura general

```text
ClientApp/
├── core/              # Servicios globales, interceptores, guards
├── features/          # Módulos funcionales (usuarios, citas, etc.)
├── shared/            # Componentes reutilizables
├── layouts/           # Estructura visual (dashboards, navegación)
├── environments/      # Configuración por entorno
