self.addEventListener("periodicsync", (event) => {
 if (event.tag === "mi-tarea-periodica") {
  console.log("Tarea de sincronización periódica ejecutada.");

  // Aquí puedes realizar las tareas que necesites, como:
  // - Actualizar datos desde un servidor
  // - Sincronizar información
  // - Realizar cualquier otra tarea en segundo plano

  event.waitUntil(
   // Ejemplo: Simular una petición fetch
   fetch("/api/actualizar-datos")
    .then((response) => response.json())
    .then((data) => {
     console.log("Datos actualizados:", data);
    })
    .catch((error) => console.error("Error al actualizar datos:", error))
  );
 }
});
