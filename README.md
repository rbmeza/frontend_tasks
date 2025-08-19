# 📑 Informe del Proyecto: SaludTasks

Este documento detalla el desarrollo de la aplicación **SaludTasks**, enfocándose en el rol de la inteligencia artificial como herramienta de asistencia, la validación del código, las decisiones de diseño y el tiempo dedicado.
**IMPORTANTE:** 
- Se generan 3 tareas de ejemplo en la BDD (Sin estimación por la IA)
- Las tareas nuevas y las tareas editadas consultan a la IA por una estimación.
- La IA entrega por ejemplo "1 hora (85%)", donde el porcentaje es la seguridad que tiene respecto de la estimación.

---

## 💻 Partes del Código Generadas o Modificadas con la Ayuda de IA

A lo largo del desarrollo de este proyecto, la IA fue una herramienta clave para agilizar y mejorar el proceso.  
Las siguientes partes del código fueron generadas, modificadas o asistidas por IA:

- **Prácticamente todo el frontend fue realizado por la IA o modificado por ella**

- **El backend también fue creado por IA en su gran mayorIA xd**

---

## 🔍 Validación del Código

- La validación de código para un nuevo archivo consistió en **ejecutar pruebas**, ver si funcionaba e iterar y ajustar a las necesidades particulares.
- La validación de código al modificar un archivo consistió en identificar las diferencias, ver que tiene la **intención** de hacer lo que le pedí e insertar el código para ejecutar las pruebas.
- Por último, **si** se modificó código entregado por IA para ajustes.

---

## 💡 Decisiones de Diseño y Arquitectura

Las siguientes decisiones de diseño y arquitectura se tomaron con base en la eficiencia y la practicidad, a menudo influenciadas por las sugerencias de la IA:

- Se decidió utilizar **Express** para el backend y **React + Vite** para el frontend, sugerido por la IA, para mantener un mismo lenguaje en ambos proyectos.
- Se decidió utilizar **tailwindcss** para los estilos de la página, por la razón de que SaludTech utiliza esta tecnología y además tiene para configurar un "Dark mode"<3.
- Se escogió **SQLite** para almacenar los datos debido a que un archivo .json era muy precario y SQLite es perfecta para este tipo de desarrollos. Ambas alternativas sugeridas por la IA.

---

## 🐞 Ajustes al Código Generado por IA

Hubo algunas partes del código que requirieron ajustes para funcionar correctamente o para adaptarse mejor a las necesidades del proyecto:

- **Tailwindcss**: Se le pidió a la IA que me ayudara a configurar tailwindcss para los estilos y para hacer un funcionar el boton de dark mode. No se obtuvo un resultado positivo al utilizar a la IA junto con la documentación de tailwind + Vite, por lo que se decidió proseguir solo con la documentación de tailwind y se logró el objetivo final 💃

- **PATCH**: La IA entregó solo la ruta "PUT" en el backend y preferí agregar la ruta "PATCH" para utilizarla al momento de marcar como completada una tarea.

- **Consulta IA**: En el servicio que consume la api de gemini, la IA se había equivocado con el nombre del modelo. Se acudió a la documentación y se escogió un modelo acorde.

---

## ⏱️ Tiempo del Ejercicio

El tiempo total invertido en este ejercicio, desde el inicio del proyecto hasta el despliegue final, fue de aproximadamente **6 horas**. Este tiempo se dividió en las siguientes fases: 
- Desarrollo del Frontend: 2 horas.
- Desarrollo del Backend: 1.5 horas.
- Despliegue del Frontend y Backend: 1 horas.
- Depuración y Solución de Errores: 1.5 horas.

