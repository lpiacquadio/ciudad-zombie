/* El objeto jugador es un objeto literal que se encuentra incompleto.
 Solo tiene asignadas algunas de sus propiedades y ningun metodo */
var Jugador = {
  /* el sprite contiene la ruta de la imagen
  */
  sprite: 'imagenes/auto_rojo_abajo.png',
  x: 130,
  y: 160,
  ancho: 15,
  alto: 30,
  velocidad: 10,
  vidas: 5,
  mover: function(movX, movY, tecla) {
      this.x += movX;
      this.y += movY;
      this.sprite = 'imagenes/auto_rojo_' + tecla + '.png';
      if (tecla === 'arriba' || tecla === 'abajo') {
        this.ancho = 15;
        this.alto = 30;
      } else {
        this.ancho = 30;
        this.alto = 15;
      }
  },
  perderVidas: function(danio) {
    this.vidas -= danio;
  }
}
