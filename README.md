# Oftalvista

Sistema de gestion para una clinica oftalmologica con frontend en Angular y backend en .NET, orientado a la administracion de usuarios, medicos, pacientes, agendas, citas, pagos, historial clinico y recordatorios.

## Descripcion general

El repositorio contiene una solucion dividida en cliente, servicios y componentes transversales:

- `01 Client/Oftalvista.Client.Public/ClientApp`: aplicacion web Angular 17.
- `02 Services/Oftalvista/Oftalvista.Api`: API REST en ASP.NET Core 8.
- `02 Services/Oftalvista/Oftalvista.Domain`: capa de dominio con agregados, validaciones e interfaces.
- `02 Services/Oftalvista/Oftalvista.Infrastructure`: persistencia, repositorios y configuraciones de entidades.
- `03 Transversal/Core/Oftalvista.Core`: utilitarios base, validacion y resultados genericos.

## Modulos funcionales identificados

La solucion ya tiene estructura para los siguientes modulos:

- Autenticacion y control de acceso por rol.
- Dashboard para administrador.
- Dashboard para paciente.
- Usuarios.
- Especialidades medicas.
- Medicos.
- Pacientes.
- Agenda medica.
- Citas.
- Pagos de cita.
- Historial de citas.
- Recordatorios de cita.

## Stack tecnologico

### Frontend

- Angular `17.3.x`
- Angular Material `17.3.x`
- RxJS `7.8.x`
- TypeScript `5.4.x`
- Arquitectura standalone con rutas lazy-loaded

### Backend

- .NET `8`
- ASP.NET Core Web API
- MediatR
- Dapper
- Entity Framework Core SQL Server
- FluentValidation
- Swagger / OpenAPI
- Serilog

## Arquitectura observada

El backend sigue una separacion por capas:

- `Api`: controladores, commands, queries y view models.
- `Domain`: entidades/agregados, contratos y validaciones de negocio.
- `Infrastructure`: `DbContext`, configuraciones EF Core, repositorios y soporte de persistencia.
- `Core`: clases base para validacion y respuestas comunes.

En la API se aprecia un enfoque tipo CQRS:

- `Commands` para altas, ediciones y eliminaciones.
- `Queries` para listados y lectura de datos.
- Validacion previa mediante `IValidable`, atributos y validadores.

## Estructura del repositorio

```text
Oftalvista.sln
+-- 01 Client/
|   +-- Oftalvista.Client.Public/
|       +-- ClientApp/
+-- 02 Services/
|   +-- Oftalvista/
|       +-- Oftalvista.Api/
|       +-- Oftalvista.Domain/
|       +-- Oftalvista.Infrastructure/
+-- 03 Transversal/
    +-- Core/
        +-- Oftalvista.Core/
```

## Frontend

El cliente Angular incluye:

- Ruteo por modulos funcionales.
- Guards de autenticacion y administrador.
- Interceptores para JWT, manejo de errores y modo demo.
- Servicios por entidad para consumir la API.
- Componentes de listado, detalle y formularios para los modulos principales.

### Rutas funcionales principales

- `/login`
- `/dashboard/admin`
- `/dashboard/paciente`
- `/mantenimiento/especialidades`
- `/mantenimiento/usuarios`
- `/mantenimiento/medicos`
- `/mantenimiento/pacientes`
- `/mantenimiento/agenda-medica`
- `/operaciones/citas`
- `/operaciones/pagos`
- `/operaciones/historial`
- `/operaciones/recordatorios`

### Modo demo

El frontend tiene un modo demo implementado con un interceptor (`demo.interceptor.ts`) y una base simulada en `localStorage`, lo que permite probar la app aunque la API no este conectada.

Credenciales demo detectadas en el proyecto:

- Administrador: `admin@demo.pe` / `demo123`
- Paciente: `paciente@demo.pe` / `demo123`

## Backend

La API expone controladores REST versionados bajo `api/v1` para:

- `usuario`
- `especialidad-medica`
- `medico`
- `paciente`
- `agenda-medica`
- `cita`
- `pago-cita`
- `historial-cita`
- `recordatorio-cita`

Cada modulo sigue la convencion base:

- `GET /api/v1/<recurso>`
- `POST /api/v1/<recurso>`
- `PUT /api/v1/<recurso>`
- `DELETE /api/v1/<recurso>/{guid}`

Tambien se observa uso de:

- consultas con Dapper y procedimientos almacenados, por ejemplo `USP_SEL_USUARIO`
- persistencia con EF Core y `DbContext`
- entidades con auditoria y borrado logico

## Como ejecutar el proyecto

### Requisitos

- .NET SDK 8 o superior
- Node.js 18+ recomendado
- npm
- SQL Server para la integracion real del backend

### Ejecutar frontend

Desde:

```powershell
cd "01 Client\Oftalvista.Client.Public\ClientApp"
npm install
npm start
```

Luego abrir:

```text
http://localhost:4200
```

### Ejecutar frontend en modo demo

1. Iniciar la aplicacion.
2. Ir a la pantalla de login.
3. Activar el modo demo.
4. Ingresar con alguna de las cuentas demo.

### Ejecutar backend

Desde:

```powershell
cd "02 Services\Oftalvista\Oftalvista.Api"
dotnet restore
dotnet run
```

Perfiles detectados en `launchSettings.json`:

- `http://localhost:5259`
- `https://localhost:7285`

Swagger deberia quedar disponible en:

```text
http://localhost:5259/swagger
```

o

```text
https://localhost:7285/swagger
```

## Configuracion relevante

### Frontend

- Desarrollo: `src/environments/environment.ts`
- Produccion: `src/environments/environment.prod.ts`

Valores observados:

- desarrollo: `http://localhost:5000/api/v1`
- produccion: `https://api.oftalvista.pe/api/v1`
