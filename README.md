# Employee Web React Typescript

## Requerimientos del Sistema

#### 1. Origen de Datos

- **Requerimiento**: El sistema debe utilizar el archivo "employees.json" como origen de datos.
- **Descripción**: Todos los datos de los empleados se deben cargar desde el archivo JSON especificado.

#### 2. Visualización de Empleados

- **Requerimiento**: El sistema debe mostrar a los empleados en formato de tabla.
- **Descripción**: La tabla debe incluir paginación para gestionar la visualización de grandes cantidades de datos.

#### 3. Filtrado de Empleados

- **Requerimiento**: El sistema debe permitir filtrar a los empleados.
- **Criterios de Filtrado**:
  - Apellido
  - Nombre
  - Puesto
  - Departamento
  - Fecha de nacimiento
  - Contacto

#### 4. Ordenamiento de Empleados

- **Requerimiento**: El sistema debe permitir ordenar a los empleados.
- **Criterios de Ordenamiento**: Los empleados pueden ordenarse de forma ascendente o descendente basado en los siguientes campos:
  - Apellido
  - Nombre
  - Puesto
  - Departamento
  - Fecha de nacimiento
  - Contacto

#### 5. Destacar Empleados

- **Requerimiento**: El sistema debe permitir a los usuarios destacar empleados.
- **Descripción**: Los empleados destacados se deben mostrar en un modal accesible desde la barra de navegación.
- **Funcionalidad Adicional**:
  - **Eliminación desde el Modal**: Desde el modal de empleados destacados, los usuarios deben poder eliminar empleados de la lista de destacados sin necesidad de cerrar el modal.

## Cómo probar el proyecto localmente

Para probar el proyecto, sigue estos pasos:

#### Clonar el repositorio

Primero, asegúrate de estar en la ubicación deseada en tu terminal y luego clona el repositorio:

```sh
git clone https://github.com/MartinezFabian/EmployeeWeb_React_TypeScript.git
```

#### Instalar dependencias

Asegúrate de tener Node.js y `npm` instalados en tu sistema. Si no los tienes, puedes descargarlos e instalarlos desde https://nodejs.org/. Node.js incluirá `npm` (gestor de dependencias de Node.js) durante la instalación.

Ahora, instala `yarn` (gestor de dependencias) si aún no lo tienes:

```sh
  npm install --global yarn
```

Luego, navega al directorio del proyecto clonado e instala las dependencias:

```sh
cd …/EmployeeWeb_React_TypeScript
yarn install
```

#### Ejecutar la aplicación

Una vez que las dependencias estén instaladas, puedes ejecutar la aplicación localmente con el siguiente comando:

```sh
yarn run dev
```

Esto iniciará un servidor de desarrollo. Para ver la aplicación, abre tu navegador web y navega a la dirección URL que se muestra en la terminal después de ejecutar el comando anterior.

## Dependencias Utilizadas en el proyecto

| Dependencia         | Versión  | Finalidad                                                                                                                            |
| ------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| vite                | ^5.2.0   | Herramienta de compilación que proporciona una experiencia de desarrollo rápida y ágil.                                              |
| @reduxjs/toolkit    | ^2.2.5   | Manejo del estado con Redux Toolkit                                                                                                  |
| react-redux         | ^9.1.2   | Integración de Redux con React                                                                                                       |
| @mui/material       | ^5.15.19 | Componentes de Material-UI                                                                                                           |
| @mui/x-data-grid    | ^7.6.1   | Componente de tabla avanzada de Material-UI                                                                                          |
| @mui/icons-material | ^5.15.19 | Iconos de Material-UI                                                                                                                |
| moment              | ^2.30.1  | Manipulación de fechas y horas                                                                                                       |
| typescript          | ^5.2.2   | Lenguaje de programación que proporciona características adicionales a JavaScript, como el tipado estático, interfaces, entre otras. |
