//clase tiempo (clase hija de juego)

class tiempo {

  constructor(duracion) {

    //duracion en segundos
    this.duracion = duracion;
    this.tiempoRestante = duracion;
    this.inicio = millis();
  }

  actualizar() {

    //milis
    let tiempoActual = millis();
    //mislis a segundos
    let tiempoTranscurrido = (tiempoActual - this.inicio) / 1000;
    this.tiempoRestante = this.duracion - tiempoTranscurrido;
    if (this.tiempoRestante < 0) {
      this.tiempoRestante = 0;
    }
  }

  haTerminado() {

    //cuando se termina el tiempo
    return this.tiempoRestante <= 0;
  }
}
