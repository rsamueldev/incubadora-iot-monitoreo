# Sistema de Control Ambiental para Incubadoras IoT

## Descripcion General
Este proyecto implementa una plataforma de monitoreo y control para incubadoras de aves de diversas especies. El sistema utiliza hardware basado en el microcontrolador ESP8266 para la captura de datos ambientales y un servidor centralizado desarrollado en NestJS para la gestion de la logica de negocio y la persistencia de datos en Supabase.

## Arquitectura del Sistema
El ecosistema se divide en tres capas principales:

1. Capa de Adquisicion (Hardware): ESP8266 con sensor DHT11 encargado de transmitir lecturas de temperatura y humedad mediante el protocolo HTTP.
2. Capa de Servicios (Backend): Servidor NestJS con arquitectura modular que valida la identidad del dispositivo y procesa la informacion entrante.
3. Capa de Datos (Base de Datos): Instancia de PostgreSQL gestionada por Supabase para el almacenamiento historico de lecturas y configuracion de dispositivos.

## Modulos del Backend

### Supabase Module
Modulo global encargado de proveer la instancia del cliente de base de datos a toda la aplicacion. Implementa validacion de conexion durante el ciclo de vida de inicio del servidor.

### Readings Module
Gestiona el flujo de datos de los sensores.
- Recepcion de paquetes JSON via POST.
- Validacion de integridad de datos mediante DTOs.
- Almacenamiento cronologico de variables de temperatura y humedad.

### Devices Module
Gestiona la configuracion y estado de las incubadoras registradas.
- Registro de nuevos dispositivos.
- Definicion de parametros segun el tipo de ave (gallina, pato, codorniz).

## Requisitos de Instalacion
1. Clonar el repositorio.
2. Instalar dependencias mediante el comando:
   npm install
3. Configurar el archivo .env con las siguientes variables:
   - SUPABASE_URL
   - SUPABASE_KEY
   - DEVICE_TOKEN (Token de seguridad para el hardware)

## Protocolo de Seguridad
La comunicacion entre el hardware y el servidor se asegura mediante un Bearer Token definido en las variables de entorno. Cualquier peticion sin el header de autorizacion correcto sera rechazada con un codigo de estado 401 Unauthorized.

## Ejecucion del Proyecto
Para iniciar el servidor en modo desarrollo con recarga automatica:
npm run start:dev