//console.log(document.title);


//1. Cambia el título "Generation 1 Pokémon" por "Generasión 1 Pokimon".
const titulo = document.getElementById('gen-1');
titulo.innerHTML = 'Generasión 1 Pokimon';


//2. Cambia el color de fondo de la primera generación de Pokimon.
const fondo = document.getElementById("fondo-gen-1");
fondo.style.backgroundColor= "purple"


//3. Imprime por consola la URL de la página.
console.log(window.location.href);


//4. Imprime por consola el dominio de la página.
console.log(window.location.hostname);


//5. Imprime todos los nodos de imagen.
const imagenes = document.querySelectorAll("img");
imagenes.forEach(img => {
  console.log(img);
});


//6. Sustituye el atributo "src" de todas las imágenes por este "https://media.giphy.com/media/2v170e71aanfi/giphy.gif"
imagenes.forEach(img => {
  img.src = "https://media.giphy.com/media/2v170e71aanfi/giphy.gif";
});


//*Premium:*

//7. Cambia el fondo de todos los `infocard-lg-data text-muted` para todos los Pokimon voladores `itype flying`
const fondoFly  = document.getElementById("infocard-lg-data text-muted");
fondoFly.style.backgroundColor= "lila"


