let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('Estudiante del Tecnologico de Ecatepec en la carrera de ingenieria en sistemas computacionales.')
  .pauseFor(200)
  .deleteChars(10)
  .start();
