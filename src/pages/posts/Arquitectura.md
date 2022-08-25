---
title: Arquitectura
publishDate: 2020-03-02 00:00:00
date: May 2022
setup: |
    import MarkdownLayout from '../../layouts/MarkdownLayout.astro'
---
<MarkdownLayout title={frontmatter.title}>

# Arquitectura

Para el front-end se decidió usar la arquitectura “JAM” definida por CEO y cofundador de Netlify Mathias Biilmann como una arquitectura de desarrollo web moderna basada en JavaScript del lado del cliente, API reutilizables y HTML estático.

### Back

Para el back-end se decidió hacer uso de una arquitectura de microservicios basada en la nube, esto quiere decir que en ningún momento se hizo uso de servidores locales para el manejo de peticiones ni para las bases de datos. Para el manejo de peticiones se hizo uso del servicio de AWS conocido como funciones Lambda, estas funciones nos permiten manejar las peticiones del cliente de una manera escalable, adicionalmente algunas de estas funciones se conectan con Supabase el cual es un servicio de base de datos en la nube.

En la ::figura nose que:: se puede observar que el front-end va conectado a un API Gateway de AWS, la cual es su punto de entrada para los microservicios desplegados en AWS. Ademas se observa que las funciones lambda "Validate user", “Create user” y “transaction” se conectan con una base de datos de Supabase. Adicionalmente las funciones "Request airdrop", “Transaction" y “Create user” se conectan con la red de desarrollo (devnet) para hacer uso de los programas albergados en la plataforma de Solana. Cabe decir que el front-end se conecta con un servicio adicional llamado “none-transaction-history” el cual es una función de eje desplegada en Deno deploy, dicha función interactúa con la base de datos de Supabase.

![New Page-2.jpeg](https://res.craft.do/user/full/688a2170-06e1-3ac6-c2d6-ea21a36cca08/doc/695AED2B-FD2F-47A4-8E63-C880A131E2BF/BBAD9BA1-6A70-4CD8-8395-A6D12BBE25E2_2/KeQAow7Sf558Ayp91cgUCbFznATwn1zzU1m8l63dBuYz/New%20Page-2.jpeg)

</MarkdownLayout >
