const peliculasDB = [
  // Niños (2 a 12 años) - Sin Crimen ni Terror
  { "titulo": "Extraordinario (Wonder)", "genero": "Drama", "edadMin": 2, "edadMax": 12 },
  { "titulo": "Shrek 2", "genero": "Comedia", "edadMin": 2, "edadMax": 12 },
  { "titulo": "Encanto", "genero": "Musical", "edadMin": 2, "edadMax": 12 },

  // Adolescentes (13 a 17 años)
  { "titulo": "El Club de los Poetas Muertos", "genero": "Drama", "edadMin": 13, "edadMax": 17 },
  { "titulo": "Chicas Pesadas (Mean Girls)", "genero": "Comedia", "edadMin": 13, "edadMax": 17 },
  { "titulo": "El Gran Showman", "genero": "Musical", "edadMin": 13, "edadMax": 17 },
  { "titulo": "Enola Holmes", "genero": "Crimen", "edadMin": 13, "edadMax": 17 },
  { "titulo": "Un Lugar en Silencio", "genero": "Terror", "edadMin": 13, "edadMax": 17 },

  // Adultos (18 o más)
  { "titulo": "Interestelar", "genero": "Drama", "edadMin": 18, "edadMax": 999 },
  { "titulo": "Deadpool", "genero": "Comedia", "edadMin": 18, "edadMax": 999 },
  { "titulo": "Bohemian Rhapsody", "genero": "Musical", "edadMin": 18, "edadMax": 999 },
  { "titulo": "Pulp Fiction", "genero": "Crimen", "edadMin": 18, "edadMax": 999 },
  { "titulo": "Shutter (Están entre nosotros)", "genero": "Terror", "edadMin": 18, "edadMax": 999 }
];

function recomendar(generoSeleccionado) {
    const edadInput = document.getElementById('edad').value;
    const edad = parseInt(edadInput);
    const resultadoDiv = document.getElementById('resultado');

    resultadoDiv.classList.remove('mostrar');

    setTimeout(() => {
        if (isNaN(edad) || edad < 2) {
            resultadoDiv.innerText = "Por favor ingresa una edad válida (mínimo 2 años).";
            resultadoDiv.style.color = "#e74c3c"; 
        } 
        // Nueva validación: Si es niño y elige Crimen o Terror
        else if (edad <= 12 && (generoSeleccionado === 'Crimen' || generoSeleccionado === 'Terror')) {
            resultadoDiv.innerText = "No hay recomendaciones de " + generoSeleccionado.toLowerCase() + " para niños.";
            resultadoDiv.style.color = "#f39c12"; 
        } 
        else {
            const recomendacion = peliculasDB.find(pelicula => {
                return pelicula.genero === generoSeleccionado &&
                       edad >= pelicula.edadMin &&
                       edad <= pelicula.edadMax;
            });

            if (recomendacion) {
                resultadoDiv.innerText = recomendacion.titulo;
                resultadoDiv.style.color = "#0fb9b1"; 
            } else {
                resultadoDiv.innerText = "No tenemos sugerencias para esta categoría aún.";
                resultadoDiv.style.color = "#f39c12"; 
            }
        }
        
        resultadoDiv.classList.add('mostrar');
        
    }, 100); 
}